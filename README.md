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





