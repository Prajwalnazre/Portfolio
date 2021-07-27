from rest_framework import serializers
from . import models
# from django.contrib.postgres import fields
from django.db.models import fields

class visitorSerializer(serializers.ModelSerializer):
    #robot = RobotSerializer()
    class Meta:
        model = models.visitors
        fields = "__all__"