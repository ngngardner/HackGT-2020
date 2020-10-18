import requests


def replace(ctx, payload, order_id):
    url = f"{ctx.order_service}/{order_id}"

    response = requests.request(
        "PUT",
        url,
        headers=ctx.headers,
        data=payload
    )

    return response
