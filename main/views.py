from django.shortcuts import render

from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view

# from rest_framework.decorators import login_required
# Create your views here.
from . import models
from . import models, serializers
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def mainpage(request) :
    return render(request, '../templates/index.html')

@csrf_exempt
@api_view(['GET'])
def get_visitor(request):
    all_visitors = models.visitors.objects.all()
    sdata =  serializers.visitorSerializer(all_visitors, many=True).data
    return JsonResponse({"data":sdata})


@csrf_exempt
@api_view(['POST'])
def post_visitor(request):
    data = request.data
    print(data)
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")
    visitor = models.visitors(name = name, email=email, message=message)
    visitor.save()
    return JsonResponse({"visitor": True})


