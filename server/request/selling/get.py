
import requests


def get_item(ctx, item_id):
    url = f"{ctx.catalog_service}/item-details/2/101"

    response = requests.request(
        "GET",
        url,
        headers=ctx.headers,
        auth=ctx.auth
    )

    return response.text


def get_cart(ctx, cart_id):
    url = f"{ctx.selling_service}/{cart_id}"

    response = requests.request(
        "GET",
        url,
        headers=ctx.headers,
        auth=ctx.auth
    )

    return response.text


def get_cartitems(ctx, cart_id):
    url = f"{ctx.selling_service}/{cart_id}/items"

    response = requests.request(
        "GET",
        url,
        headers=ctx.headers,
        auth=ctx.auth
    )

    return response.text
