from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer

# Create your views here.


# function that returns a JSON response of all the routes in the API
@api_view(["GET"])
def routes(request):
    routes = [
        {
            "Endpoint": "/notes/",
            "method": "GET",
            "body": None,
            "description": "Returns an array of notes",
        },
        {
            "Endpoint": "/notes/id",
            "method": "GET",
            "body": None,
            "description": "Returns a single note object",
        },
        {
            "Endpoint": "/notes/create/",
            "method": "POST",
            "body": {"body": ""},
            "description": "Creates new note with data sent in post request",
        },
        {
            "Endpoint": "/notes/id/update/",
            "method": "PUT",
            "body": {"body": ""},
            "description": "Creates an existing note with data sent in post request",
        },
        {
            "Endpoint": "/notes/id/delete/",
            "method": "DELETE",
            "body": None,
            "description": "Deletes and exiting note",
        },
    ]
    return Response(routes)


@api_view(["GET"])
def notes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def note(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)