from django.urls import path

from . import views

urlpatterns = [
    path("", views.getRoutes, name="geturls"),
    path("notes/", views.getNotes, name="getnotes"),
    path("notes/<str:pk>/", views.getNote, name="getnote"),
]
