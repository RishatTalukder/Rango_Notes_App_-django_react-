from django.shortcuts import render

# from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Note
from .serializers import NoteSerializer

from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from rest_framework.permissions import AllowAny
from rest_framework.authentication import BasicAuthentication

# Create your views here.


@api_view(["GET"])
def getNotes(request):
    notes = Note.objects.all().order_by("-updated")
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@authentication_classes([BasicAuthentication])
@permission_classes([AllowAny])
def getNote(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
@authentication_classes([BasicAuthentication])
@permission_classes([AllowAny])
def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(["DELETE"])
@authentication_classes([BasicAuthentication])
@permission_classes([AllowAny])
def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response("Note was deleted")


@api_view(["POST"])
@authentication_classes([BasicAuthentication])
@permission_classes([AllowAny])
def createNote(request):
    data = request.data
    note = Note.objects.create(body=data["body"])
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)
