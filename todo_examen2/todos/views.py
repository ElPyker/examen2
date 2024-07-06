from rest_framework import generics
from .models import ToDo
from .serializers import (
    ToDoSerializer,
    ToDoIdSerializer,
    ToDoIdTitleSerializer,
    ToDoIdUserSerializer
)

class ToDoListCreateView(generics.ListCreateAPIView):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer

class ToDoListView(generics.ListAPIView):
    serializer_class = ToDoIdSerializer

    def get_queryset(self):
        return ToDo.objects.all()

class ToDoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer

class UnresolvedToDoListView(generics.ListAPIView):
    serializer_class = ToDoIdTitleSerializer

    def get_queryset(self):
        return ToDo.objects.filter(is_completed=False)

class ResolvedToDoListView(generics.ListAPIView):
    serializer_class = ToDoIdTitleSerializer

    def get_queryset(self):
        return ToDo.objects.filter(is_completed=True)

class UserToDoListView(generics.ListAPIView):
    serializer_class = ToDoIdUserSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return ToDo.objects.filter(user_id=user_id)

class UserResolvedToDoListView(generics.ListAPIView):
    serializer_class = ToDoIdTitleSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return ToDo.objects.filter(user_id=user_id, is_completed=True)

class UserUnresolvedToDoListView(generics.ListAPIView):
    serializer_class = ToDoIdTitleSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return ToDo.objects.filter(user_id=user_id, is_completed=False)
