
import requests


def create_item(ctx, body, item_id):
    url = f"{ctx.catalog_service}/items/2/{item_id}"

    response = requests.request(
        "PUT",
        url,
        headers=ctx.headers,
        data=body,
        auth=ctx.auth
    )

    return response.text


def create_price(ctx, body, item_id):
    url = f"{ctx.catalog_service}/items/2/{item_id}/49979488099544"

    response = requests.request(
        "PUT",
        url,
        headers=ctx.headers,
        data=body,
        auth=ctx.auth
    )

    return response.text


def create_cart(ctx):
    url = f"{ctx.selling_service}"

    response = requests.request(
        "POST",
        url,
        headers=ctx.headers,
        auth=ctx.auth
    )

    if response.status_code == 201:
        cart_id = response.headers['Location']
        cart_id = cart_id[7:]
        return cart_id
    else:
        return None
