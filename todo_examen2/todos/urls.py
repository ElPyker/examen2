from django.urls import path
from .views import (
    ToDoListCreateView,
    ToDoListView,
    ToDoDetailView,
    UnresolvedToDoListView,
    ResolvedToDoListView,
    UserToDoListView,
    UserResolvedToDoListView,
    UserUnresolvedToDoListView,
)

urlpatterns = [
    path('todos/', ToDoListCreateView.as_view(), name='todo-list-create'),
    path('todos/ids/', ToDoListView.as_view(), name='todo-list-ids'),
    path('todos/<int:pk>/', ToDoDetailView.as_view(), name='todo-detail'),
    path('todos/unresolved/', UnresolvedToDoListView.as_view(), name='unresolved-todos'),
    path('todos/resolved/', ResolvedToDoListView.as_view(), name='resolved-todos'),
    path('todos/user/<int:user_id>/', UserToDoListView.as_view(), name='user-todos'),
    path('todos/user/<int:user_id>/resolved/', UserResolvedToDoListView.as_view(), name='user-resolved-todos'),
    path('todos/user/<int:user_id>/unresolved/', UserUnresolvedToDoListView.as_view(), name='user-unresolved-todos'),
]
