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
- [9. Create a React App](#9-create-a-react-app)
- [10. Create a React Component](#10-create-a-react-component)
- [11. Making a Api Call](#11-making-a-api-call)
- [12. Create a React Router](#12-create-a-react-router)
- [13. connect React with Django](#13-connect-react-with-django)
- [14. Testing the App](#14-testing-the-app)
- [15. Deploying the App](#15-deploying-the-app)

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

this will serve your project at `http://127.0.0.1:8000/`

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
[
  {
    "Endpoint": "/notes/",
    "method": "GET",
    "body": null,
    "description": "Returns an array of notes"
  },
  {
    "Endpoint": "/notes/id",
    "method": "GET",
    "body": null,
    "description": "Returns a single note object"
  },
  {
    "Endpoint": "/notes/create/",
    "method": "POST",
    "body": { "body": "" },
    "description": "Creates new note with data sent in post request"
  },
  {
    "Endpoint": "/notes/id/update/",
    "method": "PUT",
    "body": { "body": "" },
    "description": "Creates an existing note with data sent in post request"
  },
  {
    "Endpoint": "/notes/id/delete/",
    "method": "DELETE",
    "body": null,
    "description": "Deletes and exiting note"
  }
]
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

> Note: we are using the `str` data type for the `pk` argument. You can also use `int` if you are using an integer id. this will be used to get a single note from the database and the `pk` will be used to specify the id of the note.

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

this will serve your project at `http://localhost:3000/` and you will see the default react page. now we can move on to the next step.

## 10. Create a React Component

we will open the `frontend` and we dont really need some files and folders so we can remove them. so remove the following files and folders:

- `src/App.test.js`
- `src/index.css`
- `src/logo.svg`
- `src/serviceWorker.js`
- `src/setupTests.js`
- `src/reportWebVitals.js`

Deleting these files will cause some errors so lets fix those errors too. Its pretty simple to remove those error, we just need to go to the `src/index.js` file and keep the following code:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

And we can remove the rest.
also in the `src/App.js` file we can the following code:

```javascript
import "./App.css";

function App() {
  return <div className="App">My App</div>;
}

export default App;
```

everything else can be removed. now we can create our first component. so lets create a folder named `components` in the `src` folder. and create a file named `Header.js` and `Footer.js` in the `components` folder. and add the following code in it:

```javascript
import React from "react";

function Header() {
  return <div>Header</div>;
}

export default Header;
```

for the `Footer.js` file:

```javascript
import React from "react";

function Footer() {
  return <div>Footer</div>;
}

export default Footer;
```

> Note: remember to capitalize the first letter of the component name. otherwise it will not work.

now we can import these components in the `App.js` file and use them. so lets import them in the `App.js` file:

```javascript
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header /> {/* new */}
      My app
      <Footer /> {/* new */}
    </div>
  );
}

export default App;
```

now we can see the `Header` and `Footer` component in the browser. now we can move on to the next step.

## 11. Making a Api call

We have a header and footer component. now we need to create a component for the home page. so lets create a file named `NotesListPage.js` in a new folder, I named the folder `Pages` folder and add the following code in it:

```javascript
import React from "react";

function NotesListPage() {
  return <div>Notes List Page</div>;
}

export default NotesListPage;
```

now we can import this component in the `App.js` file and use it. so lets import it in the `App.js` file:

```javascript
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotesListPage from "./pages/NotesListPage";

function App() {
  return (
    <div className="App">
      <Header />
      <NotesListPage /> {/* new */}
      {/*My app*/}
      <Footer />
    </div>
  );
}

export default App;
```

now we can see the `NotesListPage` component in the browser.

Now, we need to make an API call to get the data from our backend. So, let’s make an API call using the following code in the `NotesListPage.js` file:

```javascript
import React, { useState, useEffect } from "react"; // new

function NotesListPage() {
  let [notes, setNotes] = useState([]); // new

  let getNotes = async () => {
    // new
    let response = await fetch("http://localhost:8000/api/notes/"); // new
    let data = await response.json(); // new
    setNotes(data); // new
  }; // new

  return (
    <div>
      <div>
        {/* mapping the notes array we got from django rest framework*/}
        {notes.map((note) => (
          <div key={note.id}>{note.body}</div>
        ))}
      </div>{" "}
      {/* new */}
    </div>
  );
}
```

> Note: we are using the `useState` hook to create a state variable named `notes` and the `useEffect` hook to make the API call when the component is rendered. We are also using the `fetch` function to make the API call and the `json` function to convert the response into JSON. We are also using the `map` function to loop through the `notes` array and display the notes.

So what we are doing here is we are making an api call to the `http://localhost:8000/api/notes/` url and getting the data from the backend. and we are storing the data in the `notes` state variable. and we are looping through the `notes` array and displaying the notes.

Now this will give us an error because we are trying to get data from the `http://localhost:8000/api/notes/` url but we dont have that url in our backend. So lets fix that by going to the `backend/urls.py` file and adding the following code:

```python

from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('notes_api.urls')) # new
]

```

> Note: we are using the `include` function to include the `notes_api/urls.py` file in the `backend/urls.py` file. We are also using the `api` prefix for the `notes_api/urls.py` file. So, we need to add the `api` prefix in the `notes_api/urls.py` file.

I created the view for that so to double check go to `http://localhost:8000/api/notes/` and you will see the data in `json` format.

Now if you did everything right you should see the notes in you react server but there will be another error. the error will be something like this:

```bash
cors error
```

this is because we are trying to get data from a different server. so we need to install a package named `django-cors-headers` using the following command:

```bash
$ pip install django-cors-headers
```

now we need to add the `corsheaders` in the `INSTALLED_APPS` list in the `backend/settings.py` file. So, open the `backend/settings.py` file and add the following code in the `INSTALLED_APPS` list:

```python
INSTALLED_APPS = [
    ...
    'rest_framework',
    'notes_api',
    'corsheaders', # new
]
```

now we need to add the `corsheaders` middleware in the `MIDDLEWARE` list in the `backend/settings.py` file. So, open the `backend/settings.py` file and add the following code in the `MIDDLEWARE` list:

```python
MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware', # new
    'django.middleware.common.CommonMiddleware', # new
]
```

now we need to add the `CORS_ORIGIN_ALLOW_ALL` in the `backend/settings.py` file. So, open the `backend/settings.py` file and add the following code:

```python
CORS_ORIGIN_ALLOW_ALL = True # new
```

> Note: we are using the `CORS_ORIGIN_ALLOW_ALL` to allow all the origins to make the API call. You can also specify the origins that you want to allow by using the `CORS_ORIGIN_WHITELIST` list. You can know more about the `django-cors-headers` package from the [official documentation](https://pypi.org/project/django-cors-headers/).

now you should restart the django server and you see the notes in the react server.

If you did everything right you should see the notes in your react server.

We can make it cleaner by making another component for the notes. so lets create a file named `ListItem.js` in the `components` folder and add the following code in `components/ListItem.js` file:

```javascript
import React from "react";

function ListItem({ note }) {
  return <div>{note.body}</div>;
}

export default ListItem;
```

> this component will take a prop named `note` and display the `note.body` in the browser.

now we can import this component in the `NotesListPage.js` file and use it. so lets import it in the `NotesListPage.js` file:

```javascript 
import React from "react";
import { useState, useEffect } from "react";
import ListItem from "../component/ListItem"; {/* new */}

const NotesListPage = () => {
  let [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/");
    let data = await response.json();
    setNotes(data);
  };

  return (
    <div>
      <div className="notes_list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} /> {/* new */}
        ))}
      </div>
    </div>
  );
};

export default NotesListPage;
```

> Note: we are using the `ListItem` component to display the notes. We are also using the `note` prop to pass the note to the `ListItem` component. We are also using the `key` prop to specify the key for the `ListItem` component. We are also using the `index` argument to specify the index of the note.(else we will get an error)

now we can see the notes in the browser. And its a little less complicated.

You might still face some errors but once you add the proxy in the `package.json` file it will work fine. so lets add the proxy in the `package.json` file:

```json
{
  {
  "name": "frontend",
  "proxy": "http://127.0.0.1:8000", // new
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  ....
```

> Note: we are using the `proxy` to specify the backend url. You can also use the full url in the `fetch` function. But using the `proxy` is a better option.

now we can use this link without specifying the full url. so lets change the `fetch` function in the `NotesListPage.js` file:

```javascript
import React from "react";
import { useState, useEffect } from "react";
import ListItem from "../component/ListItem";

const NotesListPage = () => {
  let [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("/api/notes/"); {/*no need to specify the full url*/} 
    let data = await response.json();
    setNotes(data);
  };

  return (
    <div>
      <div className="notes_list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesListPage;
```

now we can see the notes in the browser without any errors.

## 12. Create a React Router

Now that we fetched the data from the backend we need to create a router so that we can navigate to different pages.

So, let’s install the `react-router-dom` package using the following command:

```bash
$ npm install react-router-dom
```

> this will install the `react-router-dom` package in our project. We will use this package to create the router. You can know more about the `react-router-dom` package from the [official documentation](https://reactrouter.com/en/6.17.0/start/tutorial).

To route the page we need to wrap the `App` component with the `Router` component. So, let’s wrap the `App` component with the `Router` component using the following code in the `src/App.js` file:

```javascript
....
{/*importing the BrowserRouter component from react-router-dom*/}

import { Route, BrowserRouter as Router } from "react-router-dom"; {/* new */}
import { Routes } from "react-router-dom"; {/* new */}

function App() {
  return (
    <Router> {/* new */}
      <div className="App">
        <Header />
        <Routes> {/* new */}
          <Route path="/" element={<NotesListPage />} />
        </Routes> {/* new */}
        <Footer />
      </div>
    </Router> {/* new */}
  );
}

....
```
> Note: we are using the `Route` component to specify the route for the `NotesListPage` component. We are also using the `path` prop to specify the path for the `NotesListPage` component. We are also using the `element` prop to specify the component for the `NotesListPage` component. We are also using the `Routes` component to specify the routes for the `App` component. We are also using the `Router` component to wrap the `App` component.


> Note: the `Route` component will render the `NotesListPage` component when the path is `/`. You can also use the `exact` prop to specify the exact path for the `NotesListPage` component.


