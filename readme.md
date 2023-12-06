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
import './App.css';

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
import React from 'react'

const Header = () => {
    return (
        <div>
            <h1>Notes App</h1>
        </div>
    )
}

export default Header
```

this will not render anything in the browser because we have not imported the `Header` component in the `App.js` file. So, goto the `src/App.js` file and import the `Header` component like this:

```js

import './App.css';
import Header from './components/Header'

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
import React from 'react'

const NotesListPage = () => {
    return (
        <div>
            <h1>Notes List Page</h1>
        </div>
    )
}

export default NotesListPage
```

Then again goto the `src/App.js` file and import the `NotesListPage` component like this:

```js
import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'

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
        "id": 1,
        "body": "Todays Agenda\n\n- Walk Dog\n- Feed fish\n- Play basketball\n- Eat a salad",
        "updated": "2021-07-14T13:49:02.078653Z",
        "created": "2021-07-13T21:54:16.235392Z"
    },
    {
        "id": 2,
        "body": "Bob from bar down the \n\n- Take out trash\n- Eat food",
        "updated": "2021-07-13T20:43:18.550058Z",
        "created": "2021-07-13T00:17:13.289897Z"
    },
    {
        "id": 3,
        "body": "Wash car",
        "updated": "2021-07-13T19:46:12.187306Z",
        "created": "2021-07-13T00:16:22.399841Z"
    }
]


export default notes;
```

Before copying this data make a new folder named `assets` inside the `src` folder and make a new file named `data.js` inside that file copy the above data and paste it.

Now we have some dummy data to use in the project. So, lets render the data in the `NotesListPage` component. To do that first import the `notes` data in the `NotesListPage` component like this:

```js

import React from 'react'

import notes from '../assets/data' // importing the data

