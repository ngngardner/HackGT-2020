
import json
import requests


def add_item(ctx, item_id, cart_id):
    url = f"{ctx.selling_service}/{cart_id}/items"

    body = {
        "scanData": f"{item_id}",
        "quantity": {
            "unitOfMeasure": "EA",
            "value": 1
        }
    }

    response = requests.request(
        "POST",
        url,
        data=json.dumps(body),
        headers=ctx.headers,
        auth=ctx.auth
    )

    return response.text
