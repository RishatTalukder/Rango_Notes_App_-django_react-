<h1 align='center'> Notes app </h1>
<h4 align='center'> A simple notes app with DJANGO + REACT JS </h4>

## Introduction

i've been wanting to make a Simple project for beginners to have grasp of how good django and react js are when combined together. So i made this simple notes app. I hope you like it.

This project will have 4 parts:

- Implementing the Frontend with React JS
- Implementing the Backend with Django
- Connecting the Frontend with the Backend
- Deploying the project

## Requirements

- Python 3.6+
- Django 4.0+
- React JS 18

## Prerequisites

- NODE JS should be installed in your system
- Python and pip should be installed in your system

Thats it and you need to know the basic of Djnago, The Django Rest Framework and React JS.

SO, lets start.

# Frontend

## Creating the React App

First of all, we need to create a `React App`. To do that first make a directory for the project and then open the terminal in that directory and type:

```bash
npx create-react-app frontend
```

> this will create a react app named `frontend` in the directory.

Now if you look at the directory you should see something like this:

```bash
frontend
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── reportWebVitals.js
    └── setupTests.js
```

this is the usual structure of a react app. We will do most of our work inside the `src` directory. After we are done with the `frontend` part we will goto the `backend` part.

We might not need to touch the other files but the `src` folder. SO, now lets start the development server. To do that type:

```bash
cd frontend

npm start
```

> this will start the development server at `localhost:3000` in your browser and reload the page if you make any changes to the code.

## Creating the Components

Before creating a component lets delete the files that we dont need. To do that first delete the ``App.test.js`, `logo.svg`, `reportWebVitals.js` and `setupTests.js` files. We need to keep the `index.js`, `App.js` and `App.css` files.

Then goto the `src/app.js` file and edit the file to look like this:

```js
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
```

This will render a `Hello world` text in the browser in the mid-top of the page that because of the `app.css` file that has some stylling from before , so Goto the `src/app.css` file and remove all the code and you will see only the `Hello world` text in the browser.

Now lets make the first component. Make a new `folder` named `components` inside the `src` directory and inside the newly made `components` folder make a new file made `Header.js`

> the component name should be in `PascalCase` and the file name should match the component name.

Now open the `Header.js` file and type:

```js
import React from "react";

const Header = () => {
  return (
    <div>
      <h1>Notes App</h1>
    </div>
  );
};

export default Header;
```

this will not render anything in the browser because we have not imported the `Header` component in the `App.js` file. So, goto the `src/App.js` file and import the `Header` component like this:

```js
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
```

Now you should see the `Notes App` text in the browser. This component is for every page in the site. But I want to keep my common and specific page components separate. So, I will make a new folder named `pages` inside the `src` directory and inside the `pages` folder I will make a new file named `NotesListPage.js` and type:

```js
import React from "react";

const NotesListPage = () => {
  return (
    <div>
      <h1>Notes List Page</h1>
    </div>
  );
};

export default NotesListPage;
```

Then again goto the `src/App.js` file and import the `NotesListPage` component like this:

```js
import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";

function App() {
  return (
    <div className="App">
      <Header />
      <NotesListPage />
    </div>
  );
}

export default App;
```

The `Header` component will become the `navbar` of the site and the `NotesListPage` component will become the `home` page of the site. But In this state its hard to make a website without any data. So, here are some dummy data that we will use in the project:

```js
let notes = [
  {
    id: 1,
    body: "Todays Agenda\n\n- Walk Dog\n- Feed fish\n- Play basketball\n- Eat a salad",
    updated: "2021-07-14T13:49:02.078653Z",
    created: "2021-07-13T21:54:16.235392Z",
  },
  {
    id: 2,
    body: "Bob from bar down the \n\n- Take out trash\n- Eat food",
    updated: "2021-07-13T20:43:18.550058Z",
    created: "2021-07-13T00:17:13.289897Z",
  },
  {
    id: 3,
    body: "Wash car",
    updated: "2021-07-13T19:46:12.187306Z",
    created: "2021-07-13T00:16:22.399841Z",
  },
];

export default notes;
```

Before copying this data make a new folder named `assets` inside the `src` folder and make a new file named `data.js` inside that file copy the above data and paste it.

Now we have some dummy data to use in the project. So, lets render the data in the `NotesListPage` component. To do that first import the `notes` data in the `NotesListPage` component like this:

```js
import React from "react";

import notes from "../assets/data"; // importing the data

const NotesListPage = () => {
  return (
    <div>
      {/* render the data using map function */}
      {notes.map((note) => {
        return (
          <div key={note.id}>
            <h2>{note.body}</h2>
            <p>{note.updated}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NotesListPage;
```

> we have to use the map function to render the data because the data is in array format and arrays dont have the `body` and `updated` properties. So, we have to use the map function to access the data.

Now you can see the data in the browser. But editing the data this way can be very messy so, I'll make a component for a single Item. So, make a new file named `ListItem.js` inside the `components` folder and type:

```js
import React from "react";

const ListItem = () => {
  return <div>ListItem</div>;
};

export default ListItem;
```

now import and add this to the `NotesListPage` component like this:

```js
.....
const NotesListPage = () => {
  return (
    <div>
        {notes.map((note)=>{
            return(
                <div key={note.id}>
                    <ListItem />
                </div>
            )
        })}
    </div>
  )
}
.....
```

Now the `ListItem` will e rendered for every item in the `notes` array.

As we have 4 Items in the `notes` array we will see 4 `ListItem` components in the browser. But we need to pass the data to the `ListItem` component so that we can render them and edit them separately. To do that we need to pass the `notes` data as a `prop` to the `ListItem` component. So, goto the `NotesListPage` component and edit the `ListItem` component like this:

```js
.....

const NotesListPage = () => {
  return (
    <div>
        {notes.map((note)=>{
            return(
                <div key={note.id}>
                    <ListItem note={note}/>
                </div>
            )
        })}
    </div>
  )
}
export default ListItem
```

> remember that twe need to pass the key prop to the parent element of the map function. So, we need to pass the key prop to the `div` element.

Now this way we can access the `note` data in the `ListItem` component. So, goto the `ListItem` component and edit the component like this:

```js
.....

const ListItem = (note) => {
  const {id, title, body, created, updated} = note.note
  console.log(id, title, body, created, updated);
  return (
    <div>
        <h3>{body}</h3>
        <p>Created: {created}</p>
        <p>Updated: {updated}</p>
    </div>
  )
}

.....
```

This will render the data in the browser. We will make some aditional chages to the `ListItem` component later. For now we will lets this be like this.

and move on to the next part.

we have the structure of the `home` page but we need another page for making changes to individual notes. For that react has a feature called `routing`. This make the site behave like a `SPA` (Single Page Application).

# React Routing

Lets make a new component named `NotePage.js` inside the `pages` folder and type:

```js
import React from "react";

const NotePage = () => {
  return <div>NotePage</div>;
};

export default NotePage;
```

and as always import and add this component to the `App.js` file like this:

```js
.....

const App = () => {
  return (
    <div className="App">
      <Header />
      <NotesListPage />
      <NotePage />
    </div>
  )
}

export default App
```

now you will see that the page is not acting like a new page. It's just another component that is rendered in the same page.

To fix this issue we need to use `React-Router`. To do that first install the `react-router-dom` package by typing:

```bash
npm install react-router-dom
```

> this will install the `react-router-dom` package in the project.

`react-router-dom` is a package that helps us to make the site behave like a `SPA`. It give use some components that we can use to make the site behave like a `SPA`.

SO lets make another page and lets see how it works.

goto the `src/App.js` file and import the `BrowserRouter` and `Route` component from the `react-router-dom` package and wrap every thing inside the `BrowserRouter` component like this:

```js
.....
// importing browser router, routes and route component
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NotesListPage />
      </div>
    </Router>
  );
}
....
```

> wrap all the components inside the `Router` component.

Now we cna specify which component to render in which path. To do that we need to use the `Route` component. So, goto the `src/App.js` file and import the `NotePage` component and add the `Route` component like this:

```js
.....

import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> {/* adding the routes component to render specific components for a path*/}

          <Route path="/" element={<NotesListPage />} /> {/* rendering the NotesListPage component for the home page */}
          <Route path="/note" element={<NotePage />} /> {/* rendering the NotePage component for the /note page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

Now if you goto the `localhost:3000` you will see the `NotesListPage` component and if you goto the `localhost:3000/note` you will see the `NotePage` component only and you should seee that the pages are not reloading. This is how a `Single Page Application` works.

Now we need to make the the `Home Page` as so that we can click a Note and goto the `NotePage` component and see the details of the Notes in that page. We need a `Dynamic Route` for that.

When anyone will click in a Note in the Home page that will take use to the `NotePage` where the Details of the notes will be shown and this will happen if we can pass the `id` of the note to the `NotePage` component. But we need a specific path for that. So, goto the `src/App.js` file and edit the `Route` component like this:

```js

.....

import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/note" element={<NotePage />} />
          <Route path="/note/:id" element={<NotePage />} /> {/* adding the dynamic route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

> the `:id` is the dynamic part of the route. This will be replaced by the `id` of the note. We can pass `....../note/1` or `....../note/2` or `....../note/3` and so on. This will be the `id` of the note. Which them we will query the note from the database.

After doing this try any path in your browser URL and you will see that the `NotePage` component is rendered.

Now how do we get the id from the URL and then use this id to query the note from the database. For that we need to use the `useParams` hook from the `react-router-dom` package. So, goto the `src/pages/NotePage.js` file and import the `useParams` hook like this:

```js
import React from "react";

import { useParams } from "react-router-dom"; // importing the useParams hook

const NotePage = () => {
  const params = useParams(); // using the useParams hook
  console.log(params);
  return <div>NotePage</div>;
};

export default NotePage;
```

You should see the `id` in the console. Now we can use this `id` to query the note from the data. Now, lets use the `id` we got from the URL to get the specific note from the data. To do that goto the `src/pages/NotePage.js` file and import the `notes` data and use the `id` to get the specific note like this:

```js
import React from "react";

import { useParams } from "react-router-dom";

import notes from "../assets/data"; // importing the notes data

const NotePage = () => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === Numberid)); // using the id to get the specific note
  console.log(note);
  return <div>NotePage</div>;
};
```

Now you should see the notes of the specific id in the console. Now we can use this data to render the data in the `NotePage` component. So, goto the `src/pages/NotePage.js` file and render the data like this:

```js
.....

const NotePage = () => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === Number(id));
  return (
    <div>
      <div>
        <h2>{note.body}</h2>
        <p>{note.updated}</p>
      </div>
    </div>
  );
};

export default NotePage;
```

Now you should see the data in the browser. Now lets link the Item to the `NotePage` component. To do that goto the `src/components/ListItem.js` file and import the `Link` component from the `react-router-dom` package and do what I do:

```js
.....
import { Link } from "react-router-dom"; //importing the Link component
const ListItem = (note) => {
  const { id, title, body, created, updated } = note.note;

  return (
    <div>
      <Link to={`note/${id}`}> {/*wrapping the item with the Link component and passing the id to the path*/}
        <h3>{body}</h3>
        <p>Created: {created}</p>
        <p>Updated: {updated}</p>
      </Link>
    </div>
  );
};
.....
```

> link component will make the item clickable and the `to` prop will take us to the `NotePage` component with the specific id.

Now if you click the item you will see the `Notepage` without the browser reloading.

We have done most of the frontend part but it does not look good. So, lets add some styling to the project.

# Styling the project

I'll not go into much detail about the styling part. I'll just show you the code and you can copy and paste the styling part in the `src/app.css` file.

Get the code from my github repo: https://github.com/RishatTalukder/Rango_Notes_App_-django_react-

then go to the `src/app.css` file and copy the css code from the `app.css` file and paste it in the `src/app.css` file in your project.

Now if you look at the code you will see there are some color variable set and the stylling is set for different classes. So, we will add those classes in Our components and the styles will be applied to the components.

So, if you are done with copying and paste the code in your `src/app.css` file then we can now add the stylling classes so go to the `src/app.js` file and add the classes like this:

```js
.....
function App() {
  return (
    <Router>
      <div className="container dark"> {/* this class will center the the content horizontally*/}
        <div className="app"> {/*this class will center the the content vertically and the content will be in the middle of the page*/}
          <Header />
          <Routes>
            <Route path="/" element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
.....
```

Now the content of the screen should be in the middle of the screen and with some additional styling.

Now we can style the `NotesListPage` component. So, goto the `src/pages/NotesListPage.js` file and add the classes like this:

```js
.....
const NotesListPage = () => {
  return (
    <div className="notes"> {/* this class will add some padding to the content*/}
      <div className="notes-header"> {/* this class will style the header of the page*/}
        <h2 className="notes-title">&#9782; Notes</h2> {/* this class will style the title of the page and the &#9782; is the unicode for a nice looking icon*/}
        <p className="notes-count">{notes.length}</p> {/* this class will style the count of the notes*/}
      </div>
      <div className="notes-list"> {/* this class will style the list of the notes*/}
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <ListItem note={note} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
.....
```

Now you should see a `light green` syntax highlighted `Notes` title and a `light green` syntax highlighted `Notes` icon in the `NotesListPage` component and how many notes are there in the `notes` array.

We should style the individual `ListItem` component. So, goto the `src/components/ListItem.js` file and add the classes like this:

```js
.....

const ListItem = (note) => {
  const { id, title, body, created, updated } = note.note;
  console.log(id, title, body, created, updated);
  return (
    <div>
      <Link to={`note/${id}`}>
        <div className="notes-list-item"> {/* this class will style the list item*/}
          {body}
        </div>
      </Link>
    </div>
  );
};
.....
```

Now this should look like a `list item` and if you click the item you should see the `NotePage` component with the specific note and this should look a lot cleaner than before and removed `updated` and `created` date from the `ListItem` component.

Finally, we can style the `NotePage` component. So, goto the `src/pages/NotePage.js` file and add the classes like this:

```js
.....
import { Link } from "react-router-dom"; //importing the Link component  to go back to the home page
 
const NotePage = () => {
  .....
  return (
    <div className="note"> {/* this class will style the note page*/}
      <div className="note-header"> {/* this is for the title and going back icon*/}
        <h3>
          <Link to="/"> {/* this will take us to the home page*/}
            {/* arrow left icon */}
            &#8592;
          </Link>
        </h3>
      </div>
      <p>{note.body}</p>
    </div>
  );
};
.....
```

Now you should the note in the page and it should have a nice bask arroy icon to go back to the home page and the note itself. But there no way we can edit a `note` so we need to do some editing to the `NotePage` component to make it editable.

```js
.....
const NotePage = () => {
  .....
    return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            {/* arrow left icon */}
            &#8592;
          </Link>
        </h3>
      </div>

      <textarea value={note.body}>
        {/* this is the editable note body but will not work until we add the onChange handler */}
      </textarea>

    </div>
  );
};

```

> textarea is a html tag that is used to take input from the user. We will use this to edit the note. But this will not work until we add the onChange handler.

This will make the note page a little cleaner and the `value={note.body}` will show the note in the textarea. But we need to add the `onChange` handler to make the textarea editable. We will fix it but we have another thing left.

We haven't really stylled or edited the header tag for our website. So, goto the `src/components/Header.js` file and add the classes like this:

```js
.....

const Header = () => {
  return (
    <div className="app-header"> {/* this will make the header sticky and will be on top of the page*/}
      <h1>Notes List</h1>
    </div>
  );
};
.....

```

Now you should see the header on top of the page and it should be sticky.

Now we have a good looking `React-Notes-App`. Evrything is not perfect but it's good enough for now. We will make some changes to the `NotePage` component later because we need a backend for that. So, the frontend part is done for now. we will comeback but lets setup the `Backend`.


# Backend

## Creating the Django Project

So, opren your project directry in the terminal and type:

```bash
project$ python -m venv venv
```

> this will create a virtual environment named `venv` in the project directory.

Now activate the virtual environment by typing:

```bash
project$ source venv/bin/activate
or 
project$ . venv/bin/activate # for windows
```

> this will activate the virtual environment. You will see a `(venv)` in the terminal.

Now we need to install the `django` package in the virtual environment. To do that type:

```bash
(venv) project$ pip install django
```

> this will install the `django` package in the virtual environment.

Now we need to create a django project. To do that type:

```bash
(venv) project$ django-admin startproject backend
```

> this will create a django project named `backend` in the project directory.

Now if you look at the directory you should see something like this:

```bash
project
├── backend
│   ├── backend
│   │   ├── asgi.py
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   └── manage.py
├── frontend
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   ├── README.md
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── App.css
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── venv
```

Now we need to create an app for the project. To do that type:

```bash
(venv) project$ cd backend

(venv) project/backend$ python manage.py startapp notes
```

> this will create an app named `notes` in the `backend` project.

Now if you look at the directory you should see something like this:

```bash
backend
├── backend
├── notes
│   ├── admin.py
│   ├── apps.py
│   ├── __init__.py
│   ├── migrations
│   ├── models.py
│   ├── tests.py
│   └── views.py
└── manage.py
```

Now we need to add the `notes` app to the `INSTALLED_APPS` list in the `backend/backend/settings.py` file. So, goto the `backend/backend/settings.py` file and add the `notes` app to the `INSTALLED_APPS` list like this:

```python
INSTALLED_APPS = [
    'notes', # adding the notes app
    'django.contrib.admin',
    .....
]
```

Now that we created the django project and the app we need to create an api for the `frontend` to communicate with the `backend`. So, goto the `backend/notes/views.py` file and type:

```python
from django.shortcuts import render
from django.http import JsonResponse

def getRoutes(request):
    routes = [
        'api/notes',
    ]
    return JsonResponse(routes, safe=False)
```

> this will return a json response with the routes.

This is a dummy `json` response to show you how we will approach the api part. This is the `function` that will render the `json` response. But we need to add this function to the `urls.py` file. So, make a new file named `urls.py` inside the `backend/notes` folder and type:

```python
from django.urls import path

from . import views

urlpatterns = [
    path('', views.getRoutes),
]
```
> this should be the same typed here. I fyou din't type it correctly then you will get an error.

Now we need to add connect this `notes/urls.py` file to the `backend/backend/urls.py` file. So, goto the `backend/backend/urls.py` file and type:

```python
from django.contrib import admin
from django.urls import path, include # importing the include function

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('notes.urls')), # adding the notes/urls.py file
]
```

> this will connect the `notes/urls.py` file to the `backend/backend/urls.py` file.

And the path will be `api/` for all the routes we set in the `notes/urls.py` file. So, if you goto the `localhost:8000/api/` you should see the `json` response.

Now you know how we can easily create an api for the `frontend`. Lets use a data biggers than the dummy data we used in the `frontend`. So, goto the `backend/notes/views.py` file and type:

```python
from django.shortcuts import render
from django.http import JsonResponse

def getRoutes(request):
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

    return JsonResponse(routes, safe=False)

```

Now goto the `localhost:8000/api/` and you should see the `json` response. But it's messy and we cannot see the data clearly.

## Using the Django Rest Framework

lets use the `django-rest-framework` package to make the `json` response more readable. So, goto the terminal and type:

```bash

(venv) project/backend$ pip install djangorestframework
```

> this will install the `django-rest-framework` package in the virtual environment.

Now we need to add the `rest_framework` to the `INSTALLED_APPS` list in the `backend/backend/settings.py` file. So, goto the `backend/backend/settings.py` file and add the `rest_framework` to the `INSTALLED_APPS` list like this:

```python
INSTALLED_APPS = [
    'notes',
    'rest_framework', # adding the rest_framework
    'django.contrib.admin',
    .....
]
```

Now we can use the `rest_framework` to make the `json` response more readable. So, goto the `backend/notes/views.py` file and type:

```python
from django.shortcuts import render
#from django.http import JsonResponse # we dont need this anymore

from rest_framework.response import Response # importing the Response function

def getRoutes(request):
    routes = [
        ..... # the same code from before
    ]

    return Response(routes) # using the Response function

```

But this will give you an error. So, goto the `backend/notes/views.py` file and type:

```python
from django.shortcuts import render
from rest_framework.decorators import api_view # importing the api_view function
from rest_framework.response import Response

@api_view(['GET']) # using the api_view function
def getRoutes(request):
    routes = [
        ..... # the same code from before
    ]

    return Response(routes)

```

Now goto the `localhost:8000/api/` and you should see the `json` response in a more readable way with default `rest_framework` styling. 

> the decorator `@api_view(['GET'])` is used to specify the method of the request. We will use this decorator for all the routes. But this was to show you how we can use the `rest_framework` package to make the `json` response more readable.


Now that we know how to make a good json response lets make the database for the project.

# Creating the Database

`Django` has a built in database called `sqlite3`. We will use this database for the project. So, goto the `backend/backend/settings.py` file and find the `DATABASES` dictionary and edit it like this:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3', # this is the path to the database
    }
}
```

This is the default setup and we will use this for the meantime. But if you want make it more challenging you can use `postgresql` or `mysql` database. But for now we will use the default `sqlite3` database.

If you don't know `sqlite3` is a `no-sql` database. So, we don't need to create a table for the database. We can just create a model and the database will create the table for us. 

## Creating the Model
Go to the `backend/notes/models.py` file and type:

```python
from django.db import models

class Note(models.Model): # creating the model
    body = models.TextField(null=True, blank=True) # creating the body field
    created = models.DateTimeField(auto_now_add=True) # creating the created field
    updated = models.DateTimeField(auto_now=True) # creating the updated field

    def __str__(self):
        return self.body[:50] # returning the title of the note
```

> the `__str__` method is used to return the title of the note. We will use this method to show the title of the note in the admin panel.

In case you didn't know here is an overview of what i did here:

- I created a model named `Note` and it has 3 fields `body`, `created` and `updated`.
- The `body` field is a `TextField` field and it can be `null` or `blank`.
- The `created` field is a `DateTimeField` field and it will be automatically added when a note is created.
- The `updated` field is a `DateTimeField` field and it will be automatically updated when a note is updated.
- The `__str__` method is used to return the title of the note. We will use this method to show the title of the note in the admin panel.

This is the model we only need for the project. Now we have to migrate the model to the database. To do that type:

```bash
(venv) project/backend$ python manage.py makemigrations
```

> this will create a migration file for the model.

Now we need to migrate the model to the database. To do that type:

```bash
(venv) project/backend$ python manage.py migrate
```
> now the table for the model is created in the database. You can check it in the `backend/db.sqlite3` file. Other builtin django tables are also there.

Now we need to register the model in the admin panel. So, goto the `backend/notes/admin.py` file and type:

```python
from django.contrib import admin

from .models import Note # importing the Note model

admin.site.register(Note) # registering the Note model
```

Now if you goto the `localhost:8000/admin/` you should see the `Note` model in the admin panel. You can add, edit and delete notes from the admin panel but you need to be a `superuser` to be able to do that.

You can make yourself the superuser by typing:

```bash
(venv) project/backend$ python manage.py createsuperuser
```

This will ask for the following:
- username (required but you can leave it blank, it will take your pc username)
- email (optional)
- password (required, you should use a strong password but if you want to test the project you can use `123456`)

Now you can login to the admin panel and add, edit and delete notes from the admin panel.

SO goto the `localhost:8000/admin/` and login with the superuser credentials and add atleast 3 notes so that we can use them in the project.

I just copied and pasted from the `frontend/assets/data.js` file. You can do that too.

If you are done with creating the notes then we can move on to the next part.

We need to Get this ntoes as `json` response. So, goto the `backend/notes/views.py` file and type:

```python
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Note # importing the Note model

@api_view(['GET'])
def getRoutes(request):
    .....

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all() # getting all the notes from the database
    return Response(notes) # returning the notes as json response
```

Now goto the `localhost:8000/api/notes/` and you should see the notes as `json` response. but you won't. You see an error but no worries. We will fix it.

## Serializing the Data

To make a `json` response from `models` we need to `serialize` the data. 

> serialization is the process of converting an object into a stream of bytes to store the object or transmit it to memory, a database, or a file. Its main purpose is to save the state of an object in order to be able to recreate it when needed. The reverse process is called deserialization.

SO, it's a must to `serialize` the data before we can use it as `json` response. So, amke a new file named `serializers.py` inside the `backend/notes` folder and type:

```python
from rest_framework import serializers

from .models import Note # importing the Note model

class NoteSerializer(serializers.ModelSerializer): # creating the serializer
    class Meta:
        model = Note # adding the Note model
        fields = '__all__' # adding all the fields of the Note model
```

This is the `serializer`. It's a class that inherits from the `ModelSerializer` class from the `rest_framework` package. then Inside the class there must be a `Meta` class that has the `model` and `fields` attributes. The `model` attribute is the model we want to serialize and the `fields` attribute is the fields of the model we want to serialize. We can also specify the fields we want to serialize. But for now we will serialize all the fields.

Now we need to use this `serializer` in the `views.py` file. So, goto the `backend/notes/views.py` file and type:

```python
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Note
from .serializers import NoteSerializer # importing the NoteSerializer

@api_view(['GET'])
def getRoutes(request):
    .....

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True) # serializing the notes, many=True because we are serializing multiple notes
    return Response(serializer.data) # returning the serialized data
```

SO, here's what happened here:
- we imported the `NoteSerializer` from the `serializers.py` file.
- we fetched the notes from the database.
- we passed the notes to the `NoteSerializer` and serialized the notes, specified `many=True` because we are serializing multiple notes.
- we returned the serialized data as `json` response by passing the `serializer.data` to the `Response` function.

>serializer.data is the serialized data.

Now make a route in the `backend/notes/urls.py` file for the `getNotes` function. So, goto the `backend/notes/urls.py` file and type:

```python
from django.urls import path

from . import views

urlpatterns = [
    path('', views.getRoutes),
    path('notes/', views.getNotes), # adding the route for the getNotes function
]
```

Now goto the `localhost:8000/api/notes/` and you should see the notes as `json` response.

> don't forget to add @api_view(['GET']) decorator to all the routes.

## api for a single note

Its the same as the `getNotes` function. 

we need to make an api for a single note. So, goto the `backend/notes/views.py` file and type:

```python
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Note
from .serializers import NoteSerializer

@api_view(['GET'])
def getRoutes(request):
    .....

@api_view(['GET'])
def getNotes(request):
    .....

@api_view(['GET'])
def getNote(request, pk): # pk is the primary key of the note
    note = Note.objects.get(id=pk) # getting the note from the database
    serializer = NoteSerializer(note, many=False) # serializing the note, many=False because we are serializing a single note
    return Response(serializer.data) # returning the serialized data
```

The only changes we made here is we added a new function named `getNote` and we added a new route for the `getNote` function.

There is another `path` parameter named `pk` in the `getNote` function. This is the `primary key` of the note. We will use this `pk` to get the specific note from the database.

We used `get` method to get the specific note from the database. We can also use `filter` method to get the specific note from the database. But we will use `get` method for now.

and set `many=False` because we are serializing a single note.

Now make a route in the `backend/notes/urls.py` file for the `getNote` function. So, goto the `backend/notes/urls.py` file and type:

```python

.....

urlpatterns = [
    path('', views.getRoutes),
    path('notes/', views.getNotes),
    path('notes/<str:pk>/', views.getNote), # adding the route for the getNote function
]
```

> <:str:pk> is the path parameter. We will use this to get the specific note from the database.

Now goto the `localhost:8000/api/notes/1/` and you should see the specific note as `json` response.


Well we made the dummy notes. We should connect the `frontend` to the `backend` and get the notes from the database.

# Connecting the Frontend to the Backend

## Connecting the Home Page

We need to connect the `frontend` to the `backend` to get the notes from the database. So, goto the `src/pages/NotesListPage.js` file and type:

```js

.....
// import notes from "../assets/data"; // we don't need this anymore
import { useState, useEffect } from "react"; // importing the useState and useEffect hooks

const NotesListPage = () => {
  const [notes, setNotes] = useState([]); // using the useState hook to set the notes
  
  // using the useEffect hook to get the notes from the database
  useEffect(() => {
    getNotes();
  }, []);
  
  // getting the notes from the database
  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/"); // getting the notes from the database
    let data = await response.json(); // converting the response to json
    console.log(data); // logging the data
    setNotes(data); // setting the notes
  };

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <ListItem note={note} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotesListPage;

```

We are fetching the notes from the database and setting the notes in the `notes` state. We are using the `useState` and `useEffect` hooks to do that.

Now if you goto the `localhost:3000` you should see an `error` in consol. This is because of `cross-origin`  error.

> cross-origin error is a security feature of the browser. It prevents the browser from making request to another server. We are making request to the `localhost:8000` server from the `localhost:3000` server. So, we are getting this error.

So, we need to fix this error in the server. So, we need another package for that. So, goto the terminal and type:

```bash
(venv) project/backend$ pip install django-cors-headers
```

> this will install the `django-cors-headers` package in the virtual environment.

Now goto the `backend/backend/settings.py` file and find the `MIDDLEWARE` list and add the `CorsMiddleware` to the `MIDDLEWARE` list like this:

```python
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware', # adding the CorsMiddleware
    'django.middleware.security.SecurityMiddleware',
    .....
]
```

also add `corsheaders` to the `INSTALLED_APPS` list like this:

```python
INSTALLED_APPS = [
    'notes',
    'rest_framework',
    'corsheaders', # adding the corsheaders
    'django.contrib.admin',
    .....
]
```

Now to give access to the data to the `frontend` add the following to the `backend/backend/settings.py` file:

```python
CORS_ORIGIN_ALLOW_ALL = True
```

this will give access to the data to the `frontend`. But this is not a good practice. But for this project we will use this. 

Now goto the `localhost:3000` and you should see the notes in the `NotesListPage` component working.

And our app in also working fine but we made a `json` response for individual notes. So, we need to make a `json` response for individual notes. So, goto the `src/pages/NotePage.js` file and type:

```js
.....
// import notes from "../assets/data";
import { useState, useEffect } from "react"; // importing the useState and useEffect hooks
const NotePage = () => {
  const { id } = useParams(); // using the useParams hook

  const [note, setNote] = useState([]); // using the useState hook to set the note
  const getNote = async () => { // getting the note from the database
    let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`); // getting the note from the database
    let data = await response.json();
    console.log(data);
    setNote(data);
  };

  useEffect(() => {
    getNote();
  }, []);

  // Find the note with a matching id
  //const note = notes.find((note) => note.id === Number(id));

  // Display a message if the note is not found
  if (!note) {
    return <p>Note not found</p>;
  }

  return (
    ..... // the same code from before
  );
};

export default NotePage;

```

It's almost the same as the `NotesListPage` component. But we are getting a single note from the database and setting the note in the `note` state. We are using the `useState` and `useEffect` hooks to do that.

Now if you goto the `localhost:3000/note/1` you should see the note in the `NotePage` component working.

## Proxy

We are using `http://127.0.0.1:8000/` to get the data from the database. And we have to type this everytime we want to get the data from the database. It's because when ever the `fetch` function is called it makes a request to the `localhost:3000` server for the data but the data is in the `localhost:8000` server. So, we have to type the `localhost:8000` everytime we want to get the data from the database. It's annoying. There is a way to fix this. We can use `proxy` to fix this. So, goto the `frontend/package.json` file and add the following:

```json
{
  "name": "frontend",
  "proxy": "http://127.0.0.1:8000", // adding the proxy
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    .....
  },
.....
}
```
> restart the react server to see the changes.
Now we can use the path without specifying the `localhost:8000` everytime we want to get the data from the database. So, goto the `src/pages/NotesListPage.js` file and type:

```js
.....

const getNotes = async () => {
    let response = await fetch("/api/notes/"); // getting the notes from the database
    let data = await response.json();
    console.log(data);
    setNotes(data);
  };

.....
```

we can also do the same for the `NotePage` component. So, goto the `src/pages/NotePage.js` file and type:

```js
.....

const getNote = async () => {
    let response = await fetch(`/api/notes/${id}/`); // getting the note from the database
    let data = await response.json();
    console.log(data);
    setNote(data);
  };

.....
```

Now if you goto the `localhost:3000` and `localhost:3000/note/1` you should see the notes in the `NotesListPage` component and the note in the `NotePage` component working.

# CRUD

Now we have everything ready time for the fun part. We will make the `frontend` fully functional. We will make the `frontend` fully functional by adding the `CRUD` functionality to the `frontend`. So, lets get started.

We will start with updating a note.

## Updating a Note

This is going to be fun. By fun I mean a lot of work. So, lets get started.

### Getting updated note in rest framework

We need to make an api to update a note. So, goto the `backend/notes/views.py` file and type:

```python
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Note
from .serializers import NoteSerializer

@api_view(['GET'])
def getRoutes(request):
    .....

@api_view(['GET'])
def getNotes(request):
    .....

@api_view(['GET'])
def getNote(request, pk):
    .....

@api_view(['PUT']) # adding the PUT method
def updateNote(request, pk): # pk is the primary key of the note
    data = request.data # getting the data from the request
    note = Note.objects.get(id=pk) # getting the note from the database
    serializer = NoteSerializer(instance=note, data=data) # serializing the note

    if serializer.is_valid(): # checking if the data is valid
        serializer.save() # saving the data in the database
    
    return Response(serializer.data) # returning the serialized data
```

- we added a new function named `updateNote` that takes a `pk` parameter. pk is the primary key of the note or the id of the note.

- `data= request.data` is used to get the data from the request. 
- `note = Note.objects.get(id=pk)` is used to get the note from the database.
- `serializer = NoteSerializer(instance=note, data=data)` is used to serialize the note. We used `instance=note` because we are updating the note. If we were creating a new note we would use `NoteSerializer(data=data)`. 
- `if serializer.is_valid():` is used to check if the data is valid.
- `serializer.save()` is used to save the data in the database.
- `return Response(serializer.data)` is used to return the serialized data.

Thats what Happend here. If You noticed we added a new method named `PUT` in the `@api_view` decorator. This is because we are updating the note. If we were creating a new note we would use `POST` method. We will use `PUT` method for updating the note and `POST` method for creating a new note.

Now we need to make a route for the `updateNote` function. So, goto the `backend/notes/urls.py` file and type:

```python
from django.urls import path

from . import views

urlpatterns = [
    path("", views.getRoutes, name="geturls"),
    path("notes/", views.getNotes, name="getnotes"),
    path("notes/<str:pk>/", views.getNote, name="getnote"),
    path("notes/<str:pk>/update/", views.updateNote, name="updatenote"), # adding the route for the updateNote function
]

```

Now goto the `localhost:8000/api/notes/1/update/` and you should see something different. The `rest_framework` page has a form to update the note. But we don't need that. We need to update the note from the `frontend`. So, we need to make a `json` response for the `updateNote` function.

### Sending updated note in the frontend

If you remember we made a `textarea` in the `NotePage` component. But we didn't add the `onChange` handler to make the `textarea` editable. So, goto the `src/pages/NotePage.js` file and type:

```js
.....
const NotePage = () => {
  ..... // the same code from before
  if (!note) {
    return <p>Note not found</p>;
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            {/* arrow left icon */}
            &#8592;
          </Link>
        </h3>
      </div>

      <textarea onChange={(e) => setNote({...note, body: e.target.value})}
       value={note.body}> {/* adding the onChange handler */}
        {/* this is the editable note body but will not work until we add the onChange handler */}
      </textarea>
    </div>
  );
};

export default NotePage;
```

I just added a `onChange` handler to the `textarea`. This will make the `textarea` editable and in the `onChange` handler we are setting the `note` state to the new note byt using the `setNote` function. We are using the `spread operator` to do that. We are also using the `e.target.value` to get the value of the `textarea` then we are setting the `note` state to the new note.

Now if you goto the `localhost:3000/note/1` you should see the `textarea` editable. But if you type something in the `textarea` and refresh the page you will see that the note is not updated. This is because we didn't send the updated note to the database. But you can now type inside the `textarea` and the note will be updated in the `frontend`.

Now what we want is to send a `PUT` request to the `backend` When we are done typing in the `textarea`. 

### Sending the updated note to the backend

We will use the `fetch` function to send the `PUT` request to the `backend`. So, goto the `src/pages/NotePage.js` file and type:

```js

.....
import React from "react";
import { useParams } from "react-router-dom";
// import notes from "../assets/data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const NotePage = () => {
  ..... // the same code from before

  // updating the note in the database 
  let updateNote = async () => {
    await fetch(`/api/notes/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  if (!note) {
    return <p>Note not found</p>;
  }

  return (
    ..... // the same code from before
};

export default NotePage;
  
```

- we added a new function named `updateNote` that sends a `PUT` request to the `backend` to update the note.
- we used the `fetch` function to send the `PUT` request to the `backend`.
- we used the `PUT` method to send the `PUT` request to the `backend`.
- we used the `Content-Type` header to specify the type of the data we are sending to the `backend`.
- we used the `JSON.stringify` function to convert the `note` state to `json` string.
- we used the `note` state as the `body` of the `PUT` request.

I made a function to do the update but we need to call the function when we are done typing in the `textarea`. Now when do we call this? We can add a new button that will update the note when we click on it, we can also update the note when we click on the back button. 

I like the second option. You try the first option. I will do the second option. So, goto the `src/pages/NotePage.js` file and type:

```js
.....
import { useParams,useNavigate } from "react-router-dom"; // using the useNavigate hook from react-router-dom
// import notes from "../assets/data";

const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // using the useNavigate hook to redirect to the home page

  ..... // the same code from before

  let handleSubmit = () =>{
    updateNote(); // calling the updateNote function
    navigate("/"); // redirecting to the home page
  }

  if (!note) {
    return <p>Note not found</p>;
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <div onClick={handleSubmit} > {/* adding the onClick handler and removing the Link */}
            {/* arrow left icon */}
            &#8592;
          </div>
        </h3>
      </div>

      <textarea
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        value={note.body}
      >
        {/* this is the editable note body but will not work until we add the onChange handler */}
      </textarea>
    </div>
  );
};

export default NotePage;

```

Now this can be messy to unserstand. So, here's what happened here:

- I made a new function named `handleSubmit` that calls the `updateNote` function and redirects to the home page. 

- I wanted to update the note when we click on the back button. So, I removed the `Link` component and added a `div` with the `onClick` handler so that when we click on the back button the `handleSubmit` function will be called and the note will be updated.

- Inside the `handleSubmit` function we are calling the `updateNote` function and redirecting to the home page.

SO now if you goto the `localhost:3000/note/1` and type something in the `textarea` and click on the back button you should see the note updated in the `frontend` and the `backend`. This is because we are sending a `PUT` request to the `backend` and updating the note in the `backend` as well.

Now just a simple thing I want to add. I want to add the feature when you update a note the `updated` note is shown at the top of the `NotesListPage` component. So, this is just a small thing. we can add this in the `backend`. So, goto the `backend/notes/views.py` file and type:

```python
.....
@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all().order_by('-updated') # getting all the notes from the database and ordering them by the updated field
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)
.....

```

Now if you goto the `localhost:3000` and update a note you should see the updated note at the top of the `NotesListPage` component.

That was prety confusing But still have a lot of more fun stuff to do.(by fun I mean excruciatingly painful).

## Deleting a Note

This is the easy one Of the `CRUD` functionality. 

Goto the `backend/notes/views.py` file and type:

```python
..... # the same code from before

@api_view(['DELETE']) # adding the DELETE method
def deleteNote(request, pk): # pk is the primary key of the note
    note = Note.objects.get(id=pk) # getting the note from the database
    note.delete() # deleting the note
    return Response('Note was deleted') # returning a message
```

- we added a new function named `deleteNote` that takes a `pk` parameter. pk is the primary key of the note or the id of the note.

- `note = Note.objects.get(id=pk)` is used to get the note from the database.
- `note.delete()` is used to delete the note from the database.
- `return Response('Note was deleted')` is used to return a message.

Thats what Happend here. If You noticed we added a new method named `DELETE` in the `@api_view` decorator. This is because we are deleting the note. If we were creating a new note we would use `POST` method. We will use `DELETE` method for deleting the note and `POST` method for creating a new note.

Now we need to make a route for the `deleteNote` function. So, goto the `backend/notes/urls.py` file and type:

```python
from django.urls import path

from . import views

urlpatterns = [
    path("", views.getRoutes, name="geturls"),
    path("notes/", views.getNotes, name="getnotes"),
    path("notes/<str:pk>/", views.getNote, name="getnote"),
    path("notes/<str:pk>/update/", views.updateNote, name="updatenote"),
    path("notes/<str:pk>/delete/", views.deleteNote, name="deletenote"), # adding the route for the deleteNote function
]

```

Now don't goto the `localhost:8000/api/notes/1/delete/` because it will delete the first note in the database. We need to make a `json` response for the `deleteNote` function.

### Deleting a Note in the frontend

We will use the `fetch` function to send the `DELETE` request to the `backend`. So, goto the `src/pages/NotePage.js` file and type:

```js
.....
const NotePage = () => {
  .....

  const deleteNote = async () => {
    await fetch(`/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  .....

  return (
    .....
};

export default NotePage;

```

- `deleteNote` is a new function that sends a `DELETE` request to the `backend` to delete the note. Its almost the same as the `updateNote` function and as the `updateNote` function we are using the `fetch` function to send the `DELETE` request to the `backend`.

- we used the `DELETE` method to send the `DELETE` request to the `backend`.


Now we need to call the `deleteNote` function when we click on the delete button. So, goto the `src/pages/NotePage.js` file and type:

```js
..... // the same code from before
const NotePage = () => {
  ..... // the same code from before

  const deleteNote = async () => {
    await fetch(`/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  ..... // the same code from before
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <div onClick={handleSubmit}>
            {/* arrow left icon */}
            &#8592;
          </div>
        </h3>



        <button onClick={deleteNote}> {/* adding the onClick handler */}
          {/* trash icon */}
          &#128465;
        <button onClick={deleteNote}>
          {/* trash icon */}
          &#128465;
        </button>
      </div>




      <textarea
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        value={note.body}
      >
        {/* this is the editable note body but will not work until we add the onChange handler */}
      </textarea>
    </div>
  );
};

export default NotePage;

```

We can just add a `button` and add the `onClick` handler to the `button` and call the `deleteNote` function when we click on the `button`. But I like the trash icon. So, I added a `button` and added the `onClick` handler to the `button` and called the `deleteNote` function when we click on the `button`. This will delete the note from the `frontend` and the `backend`.

And thats it For deleting a note. Now if you goto the `localhost:3000/note/1` and click on the trash icon you should see the note deleted from the `frontend` and the `backend`.

Now for the hard part. Creating a new note.

## Creating a New Note

### new note Button
It's the same logic as the `deleteNote` function But we will make another `component` only for creating a new note.

So, goto `src/components` folder and make a new file named `addNote.js` and type:

```js
import React from "react";
import { Link } from "react-router-dom";

const AddNote = () => {
  return (
    <div>
      <Link to="/note/new" className="floating-button">
        <div>
          <div>
            {/* plus icon */}
            <strong>
                &#43;
            </strong>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AddNote;

```

This is just a `Link` component that will redirect to the `NotePage` component when we click on the `Link` component. But we need to make a new route for the `NotePage` component. So, goto the `src/NotesListPage.js` file and type:

```js
.....
import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import AddNote from "../components/AddNote"; // importing the AddNote component


  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <ListItem note={note} />
            </div>
          );
        })}
      </div>
      <AddNote /> {/* adding the AddNote component */}
    </div>
  );
};

export default NotesListPage;

```

Now if you click on the plus icon you should see the `NotePage` component with a trash icon. Which does not make any sense. So, To fix that we need to add a condition where if the `id` is `new` then we will show the `NotePage` component without the trash icon. So, goto the `src/pages/NotePage.js` file and type:

```js
.....
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <div onClick={handleSubmit}>
            {/* arrow left icon */}
            &#8592;
          </div>
        </h3>


        {/* if the id is not equal to new, then show the delete button */}
        {id !== "new" ? (
          <button onClick={deleteNote}>
            {/* trash icon */}
            &#128465;
          </button>
        ) : (
          <button>done</button>
        )}
      </div>

      .....
    </div>
  );
};

export default NotePage;

```

Now if you goto the `localhost:3000/note/new` you should see the `NotePage` component without the trash icon. But if you goto the `localhost:3000/note/1` you should see the `NotePage` component with the trash icon.


### Fixing the routing issue
If you look at the console you should see an error. This is because we are trying to get a note with the `id` of `new` from the database. But we don't have a note with the `id` of `new` in the database. It's because the `useEffect` hook is running when the component is mounted. So, we need to add a condition where if the `id` is not equal to `new` then we will run the `useEffect` hook. So, goto the `src/pages/NotePage.js` file and type:

```js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// import notes from "../assets/data";
import { useState, useEffect } from "react";
const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState([]);

  const getNote = async () => {
    if (id === "new") return; // if the id is equal to new then return

    let response = await fetch(`/api/notes/${id}/`);
    let data = await response.json();
    console.log(data);
    setNote(data);
  };

  .....

    return (
      .....
    );
  };

export default NotePage;
  
```

As the `useEffect` hook is running the getNote function when the component is mounted. So, we added a condition where if the `id` is equal to `new` then we will return. This will fix the error.

Now time to create a new note. 

### Marging Update and Delete Note
Creating a new Note is as same as `updating` a note. But before doing that want some extra features like when we are edting a existing note If the note is empty then the note will be deleted. we can do that by adding some conditions in the `handleSubmit` function. So, goto the `src/pages/NotePage.js` file and type:

```js

.....

const NotePage = () => {
  .....

  let handleSubmit = () => {

    if (id !== "new" && note.body === "") {
      deleteNote();
    }
    else if (id !== "new") {
      updateNote();
    }
    navigate("/");
  };

  .....

  return (
    .....
  );
};

export default NotePage;

```

SO, when the `id` is not equal to `new` and the `note.body` is empty then we will delete the note. 

When the `id` is not equal to `new` and the `note.body` is not empty then we will update the note.

### New note in backend

Now lets make a rest api for creating a new note. So, goto the `backend/notes/views.py` file and type:

```python
.....
@api_view(['POST']) # adding the POST method
def createNote(request): 
    data = request.data # getting the data from the request
    note = Note.objects.create( # creating a new note
        body=data['body'] # adding the body field
    )
    serializer = NoteSerializer(note, many=False) # serializing the note
    return Response(serializer.data) # returning the serialized data
```

Using the `POST` method to create a new note. We are getting the data from the request. We are creating a new note and serializing the note. We are returning the serialized data.

Then using `create` method to create a new note. We are adding the `body` field to the note. We are serializing the note. We are returning the serialized data.

Now we need to make a route for the `createNote` function. So, goto the `backend/notes/urls.py` file and type:

```python
from django.urls import path

from . import views

urlpatterns = [
    path("", views.getRoutes, name="geturls"),
    path("notes/", views.getNotes, name="getnotes"),
    path("notes/create/", views.createNote, name="createnote"), # adding the route for the createNote function
    path("notes/<str:pk>/", views.getNote, name="getnote"),
    path("notes/<str:pk>/update/", views.updateNote, name="updatenote"),
    path("notes/<str:pk>/delete/", views.deleteNote, name="deletenote"),
    
]

```

> the position of the url path is important. If you put the `createNote` path after the `getNote` path then the `createNote` path will be treated as the `getNote` path and you will be asked to give a `pk` parameter to avoid this issue put the `createNote` path before the `getNote` path.


### New note in frontend

Now lets make a function to create a new note. So, goto the `src/pages/NotePage.js` file and type:

```js
.....

const NotePage = () => {
  .....

  const createNote = async () => {
    await fetch(`/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  .....

  return (
    .....
  );
};

export default NotePage;

```

Now lets handle the submissions. So, goto the `src/pages/NotePage.js` file and type:

```js
.....

const NotePage = () => {
  .....

  let handleSubmit = () => {
    if (id !== "new" && note.body === "") {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note.body !== "") {
      createNote();
    }
    navigate("/");
  };

  .....

  return (
    .....
  );
};

export default NotePage;

```

We also have unfinished business. We need to redirect to the home page when we click on the done button. So, goto the `src/pages/NotePage.js` file and type:

```js
.....

const NotePage = () => {
  .....

  let handleSubmit = () => {
    .....
  }

  return (
    .....
    <div className="note">
      ...... // the same code from before

        {id !== "new" ? (
          <button onClick={deleteNote}>
            {/* trash icon */}
            &#128465;
          </button>
        ) : (
          <button onClick={handleSubmit}>done</button> {/* adding the onClick handler */}
        )}
      </div>

      <textarea
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        value={note.body}
      >
        {/* this is the editable note body but will not work until we add the onChange handler */}
      </textarea>

    </div>
  );
};

export default NotePage;

```

# Extra Credit

## Title Generator
Now that we got all thi sout of the way You should be able to create a new note. Click the plus icon and you should see the `NotePage` component with a done button. Click on the done button and you should see the note created in the `frontend` and the `backend` and you will be redirected to the home page and you should see the note at the top of the `NotesListPage` component.

Now to troubleshoot and fix the issue with the titles of the notes in the `NoteslistPage`. SO, if you make a new note with this data 

<p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. wedwedwe iofsjnksdfhbbbnxcnmbnmgdsriopasodoq qwerhsjkhdb sdfskla iksroiufsoierfsoiefhs s edfsiehfgbskdjhfgaknsbfa uagwhreu hawoeea wsd aw o qawiueaoiwhda wehaosdihsdkjfsb dfef oisy hefsef sef soieyhfoseuhfaowehrdakjsdaklmsdf ioer fhosae hseo ifhsoeihf  e oif hseofihsefoiuhse ggsdffsjkhdf qaklwjhd oESIHUfdoqwpqrwsiekfj wo w </p>

you will see all of this is in the `NotesListPage` page which is not ideal for any notes app. We need a title generator to fix this. So, goto the `frontend/src/ListItem.js` file and type:

```js
import React from "react";
import { Link } from "react-router-dom";

const ListItem = (note) => {
  const { id, body, updated } = note.note;
let getUpdateTime = () => {
    let date = new Date(updated);
    return 
  let title = body.split("\n")[0]; // getting the first line of the note

  if (title.length > 45){
    title = title.slice(0, 45); // getting the first 45 characters of the first line of the note
  }

  return (
    <div>
      <Link to={`note/${id}`}>
        <div className="notes-list-item">
          <h3>{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;

```

- we added a new variable named `title` that gets the first line of the note.
- we added a condition where if the `title` is greater than `45` characters then we will get the first `45` characters of the `title`.

Now if you goto the `localhost:3000` and create a new note with the data above you should see the first `45` characters of the first line of the note in the `NotesListPage` component.

## Update Time

Lets add The update time For `extra` credit. So, goto the `frontend/src/ListItem.js` file and type:

```js
import React from "react";
import { Link } from "react-router-dom";

const ListItem = (note) => {
  const { id, body, updated } = note.note;

  let title = body.split("\n")[0];

  if (title.length > 45) {
    title = title.slice(0, 45);
  }

  return (
    <div>
      <Link to={`note/${id}`}>
        <div className="notes-list-item">
          <h3>{title}</h3>
          <p>
            <span>{updated}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;

```

Thi swill look bad. We need some stylling in the `uopdate time`. So, goto the `frontend/src/ListItem.js` file and type:

```js
import React from "react";
import { Link } from "react-router-dom";

const ListItem = (note) => {
  const { id, body, updated } = note.note;

  let title = body.split("\n")[0];

  if (title.length > 45) {
    title = title.slice(0, 45);
  }

  let getTime = () => {
    let time = new Date(updated); // getting the date from the updated field
    return time.toLocaleDateString() + " " + time.toLocaleTimeString(); // getting the date and time
  }

  return (
    <div>
      <Link to={`note/${id}`}>
        <div className="notes-list-item">
          <h3>{title}</h3>
          <p>
            <span>{getTime()}</span> {/* adding the getTime function */}
          </p>
        </div>
      </Link>
    </div>
  );

};

export default ListItem;

```

- we added a new function named `getTime` that gets the date and time from the `updated` field.

Now if you goto the `localhost:3000` and create a new note you should see the date and time in the `NotesListPage` component.

and we are done With this `REACT + DJANGO` project now time to FULLY CONNNECT THE `REACT` APP WITH THE `DJANGO` APP.

# Connecting the React App with the Django App

We were using 2 server for the porject. 1. the React server 2. the django server. 

They were in `localhost:3000` and `localhost:8000` respectively and we were using the `proxy` to get the data from the `localhost:8000` server. But we want to do all that in a single server. So, we will use the `django` server to do all that. So, lets get started.

If you remember the home page for the `django` server is not set, We will make the `react` the home page for the `django` server.

## Steps

1. Take the `whole Frontend` folder and Cut it and paste it inside the `backend` folder. 
the foler structure should look like this:

```
project folder
    |
    |__backend
    |   |__notes
    |   |__backend
    |   |__frontend
    |   |   |
    |   |   |__public
    |   |   |__src
    |   |   |__package.json
    |   |   |__package-lock.json
    |   |   |__README.md
    |   |   |__etc...
    |   |__manage.py
    |   |__db.sqlite3
    |   |__etc...
    |
    |__etc...
```

2. stop all servers.
3. open the `backend/frontend` folder in terminal and type:
  
  ```bash
  backend/frontend$ npm run build
  ```
  this will create a `build` folder in the `backend/frontend` folder. 
  > build folder is the production build of the react app. it complies all the reatc code to raw javascript , html and css code. you can have a look at the `build` folder if you want to. There will be a lot of files in the `build` folder. But we don't need to worry about that. Just go to the `build/index.html` file and you will see the `html` code for the `react` app.

4. now open the `backend/backend/settings.py` and edit the `templates` variable:
  
```python
    
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            BASE_DIR / "frontend/build", # adding the frontend/build folder
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                .....
            ],
        },
    },
]

```
we added the `frontend/build` folder to the `DIRS` variable. This will tell the `django` server to look for the `index.html` file in the `frontend/build` folder.

now `djnago` knows there are some `templates` in the `frontend/build` folder. 

There is also some static files too so,

5. goto the `backend/backend/settings.py` file and edit the `STATICFILES_DIRS` variable:

```python
STATICFILES_DIRS = [
    BASE_DIR / "frontend/build/static", # adding the frontend/build/static folder
]
```

we added the `frontend/build/static` folder to the `STATICFILES_DIRS` variable. This will tell the `django` server to look for the `static` folder in the `frontend/build` folder.

6. now make a url for the react app. So, goto the `backend/backend/urls.py` file and type:

```python
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView # importing the TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('notes.urls')),
    path('', TemplateView.as_view(template_name='index.html')), # adding the url for the react app
]
```

we added a new url that will render the `index.html` file from the `frontend/build` folder and also handle all the urls for the `react` app.

But the issue is when we search for a specific url or hard reload the page we get a `404` error. This is because the `django` server is handling all the urls. So, we need to tell the `django` server to handle all the urls except the `react` app urls. So, goto the `backend/backend/urls.py` file and type:

```python
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('notes.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))] # adding the url for the react app
```