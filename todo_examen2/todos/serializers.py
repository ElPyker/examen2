from rest_framework import serializers
from .models import ToDo
from datetime import datetime

class ToDoSerializer(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()

    class Meta:
        model = ToDo
        fields = ['id', 'title', 'description', 'is_completed', 'user', 'created_at', 'updated_at']

    def get_created_at(self, obj):
        return obj.created_at.strftime('%Y-%m-%d %H:%M:%S')

    def get_updated_at(self, obj):
        return obj.updated_at.strftime('%Y-%m-%d %H:%M:%S')

class ToDoIdSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = ['id']

class ToDoIdTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = ['id', 'title']

class ToDoIdUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = ['id', 'user']
