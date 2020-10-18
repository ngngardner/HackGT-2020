
from flask import Flask
from context import Context

from request import orders, selling


app = Flask(__name__)
ctx = Context()


@app.route('/')
def hello_world():
    return 'Hello, World!'


if __name__ == "__main__":
    # print(ctx.auth)
    # print(orders.create(ctx, "Good_Morning"))

    # cart info
    cart_id = selling.create_cart(ctx)
    print(selling.add_item(ctx, 101, cart_id).text)
    cart_info = selling.get_cartitems(ctx, cart_id)
    print(cart_info.text)
    print(selling.increment_item(ctx, cart_id, 101).text)
    cart_info = selling.get_cartitems(ctx, cart_id)
    print(cart_info.text)

    print(selling.decrement_item(ctx, cart_id, 101).text)
    cart_info = selling.get_cartitems(ctx, cart_id)
    print(cart_info.text)
