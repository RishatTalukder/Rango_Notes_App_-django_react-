# Rango*Notes_App*(django_react)

I tried to make a react notes app with Django backend

## How to run the project

### 1. Prerequisites

- Must have python3 installed.
- Must have nodejs installed.
- must have prior knowledge of django and react.

### 2. Clone the repository.

### 3. Create a virtual environment and install dependencies from requirements.txt:

```bash
$ python3 -m venv venv
```

```bash
$ source venv/bin/activate
```

```bash

$ pip install -r requirements.txt
```

### 3. Run the development server:

```bash
$ python manage.py runserver
```

### 4. Open localhost:8000 in the browser.


## so lets get started

# table of Content:

- [1. Create a Django Project](#1-create-a-django-project)
- [2. Create a Django App](#2-create-a-django-app)
- [3. Create a Django View](#3-create-a-django-view)
- [4. Create a Django URL](#4-create-a-django-url)
- [5. Create a Django Model](#5-create-a-django-model)
- [6. Create a Django Admin](#6-create-a-django-admin)
- [7. Create a Django Serializer](#7-create-a-django-serializer)
- [8. Create a Django API View](#8-create-a-django-api-view)
- [9. Create a React App](#10-create-a-react-app)
- [10. Create a React Component](#11-create-a-react-component)
- [11. Create a React Route](#12-create-a-react-route)
- [12. Create a React Service](#13-create-a-react-service)
- [13. connect React with Django](#14-connect-react-with-django)
- [14. Testing the App](#15-testing-the-app)
- [15. Deploying the App](#16-deploying-the-app)

## 1. Create a Django Project

First we need a virtual environment to install Django and other dependencies. So, let’s create a virtual environment using the following command:

```bash
$ python3 -m venv venv
```

Now, activate the virtual environment using the following command:

```bash
$ source venv/bin/activate
```

for windows:

```bash
$ venv\Scripts\activate
```

Now, install Django using the following command:

```bash
$ pip install django
```

now we can create our django project.

SO, let’s create a Django project using the following command:

```bash
$ django-admin startproject backend
```

this will create a folder named backend which will contain all the files and folders related to our Django project. There will be a folder inside the `backend folder` named `backend` which will contain all the files and folders related to our Django project. likr this:

```bash
backend
├── backend
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── manage.py
```

Now, let’s run the Django development server using the following command:

```bash
$ cd backend
```
> Note: Make sure you are in the same directory where the `manage.py` file is located.

```bash
$ python manage.py runserver
```

this will serve  your project at `http://127.0.0.1:8000/`

> i'll use `localhost:8000` instead of the above url. so if you see `localhost:8000` in the code, you should know that i'm talking about `http://127.0.0.1:8000/`

I you wrote the commands correctly you will see a page with a rocket trying to lift off. thats the default django page. now we can move on to the next step.

## 2. Create a Django App

Now, let’s create a Django app using the following command:

```bash
$ python manage.py startapp notes_api
```

this will create a folder named notes which will contain all the files and folders related to our Django app. This python files wiil be used to create our views, our models, our serializers, our urls, etc. like this:

```bash
backend
├── backend
├── notes_api
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── migrations
│   ├── models.py
│   ├── serializers.py
│   ├── tests.py
│   └── views.py
└── manage.py
```

Now, we need to add the newly created app in the`settings.py` file in our `backend` folder. So, open the `backend/settings.py` file and add the following code in the `INSTALLED_APPS` list:

```python
INSTALLED_APPS = [
    ...
    'notes_api',
]
```

## 3. Create a Django View

SO, we are actually creating a notes app. The app will give us the ability to create, read, update and delete notes. But, Here we are using the React framework to create the frontend of our app. So, we only need the `JSON` data from our backend. So, we will create a view which will return the `JSON` data. So, let’s create a view using the following code in the `notes_api/views.py` file:

```python   
from django.shortcuts import render
from django.http import JsonResponse # new

# function to handle the request of the route
def routes(request):    
    routes = {
        'notes': '/notes',
        'notes detail': '/notes/<str:pk>',
    } # new
    return JsonResponse(routes,safe=False) # send the json response
```

> Note: we are using the `JsonResponse` class to send the `JSON` response and the `safe=False` argument is used to send objects other than dict.

## 4. Create a Django URL

Now, we need to create a URL for our view. So, let’s create a URL using the following code in the `notes_api/urls.py` file:

```python
from django.urls import path
from .views import routes # new

urlpatterns = [
    path('', routes, name='routes'), # new
]
```

Now, we need to include the newly created URL in the `backend/urls.py` file. So, open the `backend/urls.py` file and add the following code:

```python

from django.contrib import admin
from django.urls import path, include # new

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('notes_api.urls')), # new
]
```

now we can test our app. so, run the development server using the following command:

```bash
$ python manage.py runserver
```

and open `http://localhost:8000/` in the browser. you will see the following `JSON` response:

```json
{
    "notes": "/notes",
    "notes detail": "/notes/<str:pk>"
}
```

but this won't be well formatted, the `rest framework` will help us with that.

lets go to the `notes_api/views.py` file a add some more routes inside the `routes` function:

```python
from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.

# function that returns a JSON response of all the routes in the API
def routes(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return JsonResponse(routes,safe=False)
```

Nothing much has changed, we just added some more routes to the `routes` function. now if you go to `http://localhost:8000/` you will see the following `JSON` response:

```json
[{"Endpoint": "/notes/", "method": "GET", "body": null, "description": "Returns an array of notes"}, {"Endpoint": "/notes/id", "method": "GET", "body": null, "description": "Returns a single note object"}, {"Endpoint": "/notes/create/", "method": "POST", "body": {"body": ""}, "description": "Creates new note with data sent in post request"}, {"Endpoint": "/notes/id/update/", "method": "PUT", "body": {"body": ""}, "description": "Creates an existing note with data sent in post request"}, {"Endpoint": "/notes/id/delete/", "method": "DELETE", "body": null, "description": "Deletes and exiting note"}]
```

a one line `JSON` response. now we need to install the `rest framework` to make it look better. but before that lets make a `model` for our notes.

## 5. Create a Django Model

Now, we need to create a model for our notes. So, let’s create a model using the following code in the `notes_api/models.py` file:

```python
from django.db import models

# Create your models here.

class Note(models.Model):
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.body[0:50] + "..."
```

Now, we need to migrate the model to the database. So, run the following command:

```bash
$ python manage.py makemigrations
```

this will create a migration file in the `notes_api/migrations` folder. Now, run the following command to migrate the model to the database:

```bash
$ python manage.py migrate
```

Now, we need to register the model in the `notes_api/admin.py` file. So, open the `notes_api/admin.py` file and add the following code:

```python
from django.contrib import admin
from .models import Note # new

# Register your models here.
admin.site.register(Note) # new
```

Now, run the development server using the following command:

```bash
$ python manage.py runserver
```

and open `http://localhost:8000/admin` in the browser. you will see the admin page. now login using the superuser credentials. you will see the `Notes` model there. now we can add, edit and delete notes from the admin page.

## 6. Create a Django Admin

Now, we need to create a Django admin. We can create a super user who can access the admin page and add, edit and delete notes. So, let’s create a super user using the following command:

```bash
$ python manage.py createsuperuser
```

Now, enter the username, email and password for the super user. Now, run the development server and go to the admin page. Now, login using the super user credentials. You will see the `Notes` model there, along with other models. Now, we can add, edit and delete notes from the admin page.

## 7. Create a Django Serializer

whats a serializer? A serializer is a class that converts the model data into JSON so that the frontend can use the data easily. For this we need to install the `djangorestframework` using the following command:

```bash
$ pip install djangorestframework
```

We have to add the `rest_framework` in the `INSTALLED_APPS` list in the `backend/settings.py` file. So, open the `backend/settings.py` file and add the following code in the `INSTALLED_APPS` list:

```python
INSTALLED_APPS = [
    ...
    'rest_framework',
    'notes_api',
]
```

Now lets go to the `notes_api/views.py` to get the data formatted by the help of the `rest_framework`. So, open the `notes_api/views.py` file and add the following code:

```python
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response # new
from rest_framework.decorators import api_view # new

@api_view(['GET']) # new
def routes(request):
    routes = [
        ....
    ]
    return Response(routes) # new
```
> Note: we are using the `Response` class to send the `JSON` response and the `api_view` decorator to specify the type of request. This will also help us to add more request types in the future and format the data accordingly.

Now, run the development server and you should see the default `rest framework` page. And the json data well formatted. There are some options that you can explore. SO feel free to explore. now we can move on to the next step.


now, you should make some dummy data by going to the admin page and adding some notes. So that we can see the data in the frontend but as we are making a api we need to get the data from the database in `json` format. SO go to the admin page `localhost:8000/admin` and add some notes.

Now lets serialize the data inot json format.

> Note: `Serializers` are used to convert the model data into JSON so that the frontend can use the data easily.

SO, first make a new file named `serializers.py` in the `notes_api` folder. and add the following code in it:

```python
from rest_framework import serializers
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
```

> Note: we are using the `ModelSerializer` class to serialize the model data. We are also using the `Note` model and all the fields of the model. You can also specify the fields that you want to serialize by using the `fields` list instead of `__all__`.

This is the general structure of a serializer. Now, we need to serialize the data in our view.

## 8. Create a Django API View

The `rest_framework` provides us with a class based view called `APIView` which we can use to create our API views. So, let’s create an API view using the following code in the `notes_api/views.py` file:

```python
from django.shortcuts import render
# from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import NoteSerializer # new
from .models import Note # new

@api_view(['GET'])
def routes(request):
    routes = [
        ...
    ]
    return Response(routes)

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all() # new
    serializer = NoteSerializer(notes, many=True) # new
    return Response(serializer.data) # new
```

> Note: we are using the `NoteSerializer` class to serialize the data. We are also using the `Note` model to get all the notes from the database. We are also using the `many=True` argument to specify that there are many notes. You can also use `many=False` if you are getting a single object.

> Note: `Note.objects.all()` will get all the notes from the database. You can also use `Note.objects.get(id=pk)` to get a single note from the database.

Here, we are using the `GET` request to get all the notes from the database. Now, we need to create a URL for our view. So, let’s create a URL using the following code in the `notes_api/urls.py` file:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.routes, name='routes'),
    path('notes/', views.getNotes, name='notes'), # new
]
```

Now, run the development server and go to `http://localhost:8000/notes/` in the browser. You will see that the data from our model is serialized and returned in `JSON` format. This the data that we will use in our frontend.

Now we can create the `api_view` for the `GET` request to get a single note from the database. So, let’s create an API view using the following code in the `notes_api/views.py` file:

```python
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import NoteSerializer
from .models import Note

@api_view(['GET'])
def routes(request):
    ....

@api_view(['GET'])
def getNotes(request):
    ....

@api_view(['GET'])
def getNote(request, pk): # new
    note = Note.objects.get(id=pk) # new
    serializer = NoteSerializer(note, many=False) # new
    return Response(serializer.data) # new
```

> Note: we are using the `getNote` function to get a single note from the database. We are also using the `pk` argument to get the note with the specified id. We are also using the `many=False` argument to specify that there is only one note.

Now, we need to create a URL for our view. So, let’s create a URL using the following code in the `notes_api/urls.py` file:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.routes, name='routes'),
    path('notes/', views.getNotes, name='notes'),
    path('notes/<str:pk>', views.getNote, name='note'), # new
]
```
> Note: we are using the `str` data type for the `pk` argument. You can also use `int` if you are using an integer id.  this will be used to get a single note from the database and the `pk` will be used to specify the id of the note.

Now, run the development server and go to `http://localhost:8000/notes/1` in the browser. You will see that the data from our model is serialized and returned in `JSON` format. This the data that we will use in our frontend.


## 9. Create a React App

Now, we need to create a React app. So, let’s create a React app using the following command:

```bash
$ cd ..
$ npx create-react-app frontend
```

> Note: `cd ..` will take you to the parent directory. Because we need to create the React app in the parent directory alongside the backend folder. so the folder structure will look like this:

```bash
parent_directory
├── backend
|   ├── backend
|   ├── notes_api
|   └── manage.py
└── frontend
    ├── node_modules
    ├── public
    ├── src
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
```

Now lets start the react app using the following command:

```bash
$ cd frontend
$ npm start
```

this will serve  your project at `http://localhost:3000/` and you will see the default react page. now we can move on to the next step.

## 10. Create a React Component

we will open the 