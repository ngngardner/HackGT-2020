
import requests
import json


def create(ctx, body):
    url = ctx.order_service

    payload = json.dumps({
        'expireAt': "2020-05-08T14:26:48Z",
        'comments': body
    })

    response = requests.request(
        "POST",
        url,
        headers=ctx.headers,
        data=payload,
        auth=ctx.auth
    )

    return response
