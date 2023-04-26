from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return HttpResponse('<h1>Hello world</h1>'
                        '<a href="/test">Click on "TEST"</a>')
def test(request):
    return HttpResponse('<h1>Test page</h1>'
                        '<a href="http://127.0.0.1:8000/">Click on "HOME"</a>')