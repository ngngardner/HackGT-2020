
from flask import Flask, request
from context import Context

from request import orders, selling

app = Flask(__name__)
ctx = Context()


@app.route('/carts', methods=["POST"])
def carts():
    if request.method == 'POST':
        return selling.create_cart(ctx)


@app.route("/items/<item_id>", methods=["GET", "PUT"])
def items_id(item_id):
    if request.method == 'GET':
        return selling.get_item(ctx, item_id)
    if request.method == "PUT":
        return selling.create_item(ctx, request.data, item_id)


@app.route("/items/2/<item_id>", methods=["PUT"])
def create_price(item_id):
    if request.method == 'PUT':
        return selling.create_price(ctx, request.data, item_id)


@app.route("/carts/<cart_id>", methods=["GET", "DELETE"])
def carts_id(cart_id):
    if request.method == 'GET':
        return selling.get_cart(ctx, cart_id)
    if request.method == 'DELETE':
        return selling.delete_cart(ctx, cart_id)


@app.route("/carts/<cart_id>/items", methods=["GET"])
def carts_items(cart_id):
    if request.method == 'GET':
        return selling.get_cartitems(ctx, cart_id)


@app.route("/carts/<cart_id>/items/<item_id>", methods=["POST", "PATCH", "DELETE"])
def carts_items_id(cart_id, item_id):
    if request.method == 'POST':
        return selling.add_item(ctx, item_id, cart_id)
    if request.method == 'PATCH':
        return selling.increment_item(ctx, cart_id, item_id)
    if request.method == 'DELETE':
        return selling.decrement_item(ctx, cart_id, item_id)

# ORDERS
@app.route("/orders", methods=["POST"])
def create_order():
    if request.method == 'POST':
        return orders.create(ctx, request.data)


@app.route("/orders/find", methods=["POST"])
def find_order():
    if request.method == 'POST':
        return orders.find(ctx, request.data)


@app.route("/orders/<order_id>", methods=["GET", "PUT"])
def orders_id(order_id):
    if request.method == 'GET':
        return orders.get_order(ctx, order_id)
    if request.method == 'PUT':
        return orders.replace(ctx, request.data, order_id)
