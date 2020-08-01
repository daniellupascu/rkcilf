## How to run the app

Clone repo and run:

### `npm install`

Installs all the dependencies required by the app

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to run tests

### `npm test`

This will run all the available tests (.test.js files)<br />
Launches the test runner in the interactive watch mode.<br />

## Tech choices

**React**

React is a JavaScript library for building complex user interfaces<br />
Enables developers to build encapsulated components that have and manage their own state<br />
Provides a very efficient rendering engine, which update only the components that suffer changes<br />

**App styling**

**Styled components**

Automatically injects styles based on the rendered compoents. This removes extra styling being loaded<br />
Removes class name clashes and helps developers spend time on what's important, not on finding good class names<br />
Enables dynamic styling of a component based on its props or global theme<br />

**State management**

**Redux**

Redux helps the app behave consistently
It provides a global state that is accesible from any place of the app, making it the source of truth of the app<br />
Enables us to move the data fetching logic from the component level to the action. This means that all requests happen in one place, making the developer experience much smoother.<br />

**Unit Testing**

**Jest**

By using snapshot Testing provided by Jest we make share the UI does not change unexpectedly<br />

**SVG for icons**

Having SVG as an alternative to png or other format makes the app load faster because we do not have big files that need to be loaded by the client<br />
Can be easily manipulated with JavaScript or CSS which means there is less code to be written<br />

## Architectural choices

**Some of the components created**

In order to make our components testable and as reusable as possible all the elements of the Dropdown are separated and can be used in multiple circumstances<br />

**UserSearchForm**

contains the logic for input interaction and triggers the request when the user is done typing<br />

**UserResult**

renders the user result if a user is found. It combines multiple components<br />

**Input**

Renders an input and its label if provided<br />

**UserProfilePicture**

Expects an url to the user avatar and renders the image on the screen<br />

**DetailTile**

Component that renders a tile that has a title and a value<br />
