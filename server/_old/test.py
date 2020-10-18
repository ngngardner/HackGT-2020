import requests


user = "acct:a02117db69444dd58998f31246c4486c@066dd65a-de9e-4f75-9274-d37eb3ef06c7"
password = "password123456#"
headers = {
    'content-type': 'application/json',
    'nep-organization': 'a02117db69444dd58998f31246c4486c',
    'nep-correlation-id': '2020-0708',
}
id = 'b6651a7e518f4afaa945b304bb7c2749'
url = f'https://gateway-staging.ncrcloud.com/site/sites/{id}'
request = requests.get(url, headers=headers, auth=(user, password))
print(request.json())
