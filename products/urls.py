from django.urls import path
from .views import ProductListView, CartView

urlpatterns = [
    path('products/', ProductListView.as_view()),
    path('cart/', CartView.as_view()),
]