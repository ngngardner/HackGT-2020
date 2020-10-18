
import requests


def delete_cart(ctx, cart_id):
    url = f"{ctx.selling_service}/{cart_id}"

    response = requests.request(
        "DELETE",
        url,
        headers=ctx.headers,
        auth=ctx.auth
    )

    return response
