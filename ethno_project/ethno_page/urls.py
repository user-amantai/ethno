from django.urls import path
from ethno_page.views import *

urlpatterns = [
    path('', home),
    path('test/', test),
]