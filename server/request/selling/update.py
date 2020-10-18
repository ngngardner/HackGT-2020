
import requests
import json

from .get import get_cartitems


def increment_item(ctx, cart_id, item_id):
    # find line id
    items = json.loads(get_cartitems(ctx, cart_id).text)
    line_id = None
    for item in items['pageContent']:
        if item['scanData'] == str(item_id):
            line_id = item['lineId']
            value = item['quantity']['value'] + 1

    if line_id is not None:
        body = {
            "quantity": {
                "unitOfMeasure": "EA",
                "value": value
            }
        }
        url = f"{ctx.selling_service}/{cart_id}/items/{line_id}"

        response = requests.request(
            "PATCH",
            url,
            data=json.dumps(body),
            headers=ctx.headers,
            auth=ctx.auth
        )

        return response
    return None


def decrement_item(ctx, cart_id, item_id):
    # find line id
    items = json.loads(get_cartitems(ctx, cart_id).text)
    line_id = None
    for item in items['pageContent']:
        if item['scanData'] == str(item_id):
            line_id = item['lineId']
            value = item['quantity']['value'] - 1

    if line_id is not None:
        body = {
            "quantity": {
                "unitOfMeasure": "EA",
                "value": value
            }
        }
        url = f"{ctx.selling_service}/{cart_id}/items/{line_id}"

        response = requests.request(
            "PATCH",
            url,
            data=json.dumps(body),
            headers=ctx.headers,
            auth=ctx.auth
        )

        return response
    return None


def finalize_cart(ctx, cart_id):
    url = f"{ctx.selling_service}/{cart_id}"

    body = {
        "status": "Finalization"
    }

    response = requests.request(
        "PATCH",
        url,
        data=json.dumps(body),
        headers=ctx.headers,
        auth=ctx.auth
    )

    return response
