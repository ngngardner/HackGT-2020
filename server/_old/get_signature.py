import requests
import json


def get_signature(ctx):
    url = "http://localhost:3000"

    headers = {
        'Content-Type': 'application/json',
        'api-url': 'https://gateway-staging.ncrcloud.com/order/3/orders/1',
        'secret_key': f'{ctx.bsp_secret_key}',
        'shared_key': f'{ctx.bsp_shared_key}',
        'nep-organization': f'133f46eec37041f5984baa482e8c7f4d',
        'nep-enterprise-unit': '17f9e7600e974bb2827b86ac9d61285d'
    }

    response = requests.request("POST", url, headers=headers)

    response = json.loads(response.text.encode('utf8'))

    signature = response['signature']
    date = response['date']
    
    auth = f'AccessKey {ctx.bsp_shared_key}:{signature}'
    return auth, date

