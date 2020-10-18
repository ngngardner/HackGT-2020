
import requests
import re
from datetime import datetime
import hmac
import hashlib
import base64

from context import Context


def replacer(match):
    return match.group(1).upper()


def convertVariables(ctx, templateContent):
    regexPattern = re.compile('/({{(.*?)}})/g')
    convertedContent = templateContent
    matchedVar = regexPattern.match(convertedContent)
    while (matchedVar is not None):
        variableReplacement = matchedVar[1]
        variableName = matchedVar[2]
        variableValue = ctx.__dict__[variableName]
        convertedContent = convertedContent.replace(
            variableReplacement,
            variableValue
        )
        matchedVar = regexPattern.match(convertedContent)
    return convertedContent


def signableContent(ctx, url, method, headers):
    def constraint(filter):
        for x in filter:
            if len(x) > 0:
                pass
            else:
                del x
        return filter

    requestPath = convertVariables(ctx, url.strip())
    requestPath = re.sub(r'/^https?:\/\/[^\/]+\//', '/', requestPath)
    params = [
        method,
        requestPath,
        headers['Content-Type'],
        # headers['content-md5'],
        convertVariables(ctx, headers['nep-organization'])
    ]
    return ('\n').join(constraint(params))


def uniqueKey(ctx, d):
    nonce = d.isoformat()[:18] + '.000Z'
    return ctx.bsp_secret_key + ':' + nonce


def calculateSignature(ctx, url, method, headers):
    formatto = "%a, %d %b %Y %H:%M:%S GMT"
    d = datetime.utcnow()
    ctx.__dict__['date'] = d.strftime(formatto)
    key = str.encode(uniqueKey(ctx, d))
    sc = str.encode(signableContent(ctx, url, method, headers))
    res = base64.b64encode(
        hmac.new(key, msg=sc, digestmod=hashlib.sha512).digest())
    return str(res)


def getAuth(ctx, url, method, headers):
    sc = calculateSignature(ctx, url, method, headers)
    res = f'AccessKey {ctx.bsp_shared_key}:{sc}'
    return res


if __name__ == "__main__":
    ctx = Context()
    method = "POST"
    url = 'https://gateway-staging.ncrcloud.com/order/3/orders/1'

    headers = {
        'Content-Type': 'application/json',
        'nep-organization': f'133f46eec37041f5984baa482e8c7f4d',
        'nep-enterprise-unit': '17f9e7600e974bb2827b86ac9d61285d'
    }

    headers['Authorization'] = getAuth(ctx, url, method, headers)
    headers['Date'] = ctx.date
    response = requests.request(method, url, headers=headers)
    print(response.text.encode('utf8'))
