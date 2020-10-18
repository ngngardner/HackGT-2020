
import requests


def get_order(ctx, order_id):
    url = f"{ctx.order_service}/{order_id}"

    response = requests.request(
        "GET",
        url,
        headers=ctx.headers,
        auth=ctx.auth
    )

    return response
