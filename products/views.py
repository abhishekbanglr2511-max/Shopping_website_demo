from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CartView(APIView):
    def get(self, request):
        cart = request.session.get('cart', [])
        return Response(cart)

    def post(self, request):
        product = request.data
        cart = request.session.get('cart', [])

        for item in cart:
            if item['id'] == product['id']:
                item['quantity'] += 1
                request.session['cart'] = cart
                return Response(cart)

        # New item
        new_item = {
            'id': product['id'],
            'name': product['name'],
            'price': float(product['price']),
            'image': product['image'],
            'quantity': 1
        }
        cart.append(new_item)
        request.session['cart'] = cart
        return Response(cart)

    def delete(self, request):
        product_id = int(request.data.get('id'))
        cart = request.session.get('cart', [])
        cart = [item for item in cart if item['id'] != product_id]
        request.session['cart'] = cart
        return Response(cart)