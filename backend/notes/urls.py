from django.urls import path

from . import views

urlpatterns = [
    path("notes/", views.getNotes, name="getnotes"),
    path("notes/create/", views.createNote, name="createnote"),
    path("notes/<str:pk>/", views.getNote, name="getnote"),
    path("notes/<str:pk>/update/", views.updateNote, name="updatenote"),
    path("notes/<str:pk>/delete/", views.deleteNote, name="deletenote"),
]
