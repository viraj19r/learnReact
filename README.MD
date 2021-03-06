# Notes
- **React is a JavaScript library created by Facebook**.
- **React is a tool for building UI components**.

- In react we use two libraries React and ReactDOM. React(also called reconciler(kind of mediator)) knows how to work with compilers and ReactDOM(also called a renderer) knows how to take instructions on what we want to show in html
>how does react work ?
  - React creates a VIRTUAL DOM in memory.
  - Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
  - React finds out what changes have been made, and changes only what needs to be changed.





>how to start with react ?
  1. Install/Update node js
  2. Install create-react-app(package) - on command line-- `npm install -g create-react-app`
  3. Generate a project - on command line --`create-react-app name of project`
  4. Build project


>Is there any way that we can create react project in one command ?
  - The recommended method for generating a project is now (one command for above two commands):
   `npx create-react-app myapp`
  - If we get any errors about missing templates or how a global Create React App install is no longer supported even when using this command, we likely need to remove the global package from our system:
   `npm uninstall -g create-react-app`


>what is Babel ?
  - Babel is a javascript compiler basically. react package also includes Babel(a dependency). Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines or the browser which don't have the support of newly added versions of javascript.
  - Babel is also used for JSX. All the JSX code is converted into normal javascript during compile time because browser only understands javascript
  - [Babel website](https://babeljs.io/docs/en/)


>How to run/start react project ? 
  - To run the react project we use `npm start` in the project directory and to stop we use *control+c*  and once the app is started we can visit at localhost:3000.
  - we can have the error current port is in use then we can simply use yes command to go to another port and we can also use on your network address(like http://192.168.18.9:3000 ) to visit out page instead of localhost(like http://localhost:3000 )


>What and how will we do practice react and jsx ? 
  - Now we will delete all the code in the src folder to start from scratch and create a new .js file


>what is difference between `import` and `require` statements ?
  - If we want to use the ES2015 modules then we will use the `import` statement and if we want to use the commonjs modules we will use the `require` statement

## React components
>what is a react component ?
  - In react a component is a function or class that produces html to show the user (using JSX) and handles feedback from user using event handlers

>Can we put the same html code(including inline styling) that we write separately inside the react component/jsx ?
>JSX vs HTML ?
 - styling in jsx uses the different syntax jsx
   - syntax for html - `<div style="background-color: white; color: green "> </div>` 
   - syntax for jsx - `<div style={{backgroundColor: 'white', color: 'green'}}> </div> ` Here we use camelCase in property name and a couple of curly braces
 - adding a class to an element uses different syntax in jsx
   - In jsx `class` keyword is replaced by `className`, we use this keyword to avoid collision with the javascript `Class` keyword. Today we can use `class` keyword also as the compilers are smart enough to understand the difference.
> Is jsx is able to reference javascript variables ?
 - Yes, jsx can use the created javascript variable to take the reference of its value inside the curly braces. we can also use a function call as a reference to the jsx, the output of the function will be taken as the value for jsx

> What different types of variables we can reference inside jsx ?
> Can we use javascript objects as a value to variable and reference that variable to jsx ?
> Where can we use javascript object reference in jsx ?
 - Strings,numbers,array
 - we cannot use javascript object it will throw errors --- objects are not valid as a react child. But we can reference to the javascript object value using its property name{object.property} 
 - we can use javascript object in a place where we don't need the values of the object but the whole object, as we use in the style attribute, in style attribute we can reference a object.
>what is a react component  ?
 - a component is a function or class that produces html to the user using jsx and handles feedback from user using the event handlers.


>what is the difference between the function component and class component?
>what are hooks and how they are related with function components?
 - function component can only produce the jsx to show content to the user. on the other hand class component can also use the lifecycle method system to run the code at a specific points of time and can use the state system to update the content on the screen.

 - today the hooks are used along with the function components to run the code at a specific point of time and can use hooks to access state system and update content on the screen. 

>which components are used over the time?
 - companies with established projects are using class based components
 - companies with newer projects may be using the function based or class based components

>how to use react components ?
 - react component should can be nested if required
 - react component should be reusable 
 - react component should be configurable
To practice all that we will now create a new react project named - components

>Should i always use the css from scratch to design the jsx elements ?
 - we can use css libraries. Like one of them is *[semantic ui](https://semantic-ui.com/)* form which we can choose our styles, we can either install it or use it with its CDN by linking that to the html file - [semantics cdn](https://cdnjs.com/libraries/semantic-ui) 
  
>what should i use to insert a image(just to practice) in the react app ?
>should i always download an image and save it in the main html folder ?
>how do i practice adding images and all in react app when i don't have any real data ?
 -  there is a github repo named [Faker.js](https://github.com/marak/Faker.js/) which we can use to generate the fake data to practice the react app.
 -  command to install faker is - `npm install --save faker`
 -  we also need to import it in our components file.
 -  To access image we use in the image tag `src="faker.image.avatar()"`, avatar for the type of avatar.

>To make react component reusable what should we do ?
>How do we create a reusable and configurable component ?
  - steps to create
    - first identify the jsx that appears to be duplicated
    - identify the purpose of that jsx and think of a descriptive name for what it does
    - create a new file to store this component, file name should be same as of the component.
    - now create a new component in the file and paste the jsx into it
    - now make the new component configurable by using React's **props** system
    > now the question is how do we make the components to use each(to be nested) other as they are now in different files ?
      - we will create an export statement inside the component's file which we want to use and an import that file and component inside the file where it will be used.
      - basically the export statement makes that file available for all other files like `export default component name`.
      - we will import as `import component name from "relative path of file"`, and here in the filename we don't need to add any extension(like .js).
## React properties or props
>What are props(properties) ?
  - system for passing data from parent component to child component
  - main goal is to customize or configure a child component

## React state
- only usable with class component. state is a javascript object that contain data relevant to a component. It must be initialized when a component is created.
- State can be updated using the function useState
- updating the component will   cause the component to instantly re-render.
- state is different from props


## React component Lifecycle
- adding, updating and removing elements from a component is its lifecycle we usually define it in three keywords- Mounting, Updating, Unmounting.
- corresponding three functions are also used - componentDidMount, componentDidUpdate,componentWillUnmount. These functions are automatically called as their name indicates
- there are three more functions but we will not use them(shouldComponentUpdate,getDerivedStateFromProps,getSnapshotBeforeUpdate)

> what are the roles of these many functions inside the class component ?
 - constructor function is good place to do one time setup(like initializing state)
 - render function is only use to render jsx data
 - componentDidMount is good place to do data loading(like calling an api and getting geolocation)
 - componentDidUpdate is good place to do more data loading when state and props change(like making a network request)
 - componentWillUnmount is good place to do cleanup(specially for non react stuff)

>How can we use api or how can we call apis and handle requests from apis ?
 - we can use two things to handle so - axios(a third party package) or fetch(a built in method/function in all modern browsers)
 - but we will use the axios the most because its a third party package that provide many features. to install it in our project we run the command in our react app folder `npm install --save axios`


>what are React Ref's(references)?
 - gives access to a single dom element that is rendered by a component
 - we create ref's in constructor function, assign them to instance variables, then pass to a particular jsx element as a props.

>what is unsplash api?
 - Image api, we can do anything with the images like searching.
 - all we need to do is setting a project on unsplash website and call the api in our react app using axios 

> How make the input fields from uncontrolled to controlled?
  - we basically hook the input field with state, in this way they can be controlled using the state methods of react and hence are said controlled.
### use the youtube api
- https://console.developers.google.com/apis/credentials?project=videos-project-287507&supportedpurview=project
- https://developers.google.com/youtube/v3/docs/search/list#apps-script

## Hooks 

>what are hooks ?
 - hooks are a way to write reusable code, instead of more classic techniques like inheritance
 - some function to be used
   - `useState` - function that let us use state in a functional component


   - `useEffect` - function that let us use lifecycle methods in functional component
      -  first argument here will be an arrow function and second argument is an optional array.
      -  if the array is empty then the function(first argument) will run only after initial render
      -  if there is no second argument then it will run for the first and all other successive renderers 
      -  if the array contain any data then it will run for the first renderer and run after every renderer if data has changed since last render. This array can have multiple argument inside it.
      -  we cannot use the `async await` for the the function which is first argument. It will through errors. to use that we have three ways
        - we can define a another function(which is referencing a variable) or helper function inside it and mark that with `async await` and just after that function we can call it.(it is recommended method by browser and react)
        - we can use immediately invoked function inside it(which is invoked immediately after declaring it)
        - using normal promises by chaining `then`


   - `useRef` - function that let us create a ref in the functional component 
 - Primitive Hooks
   - `useState`
   - `useEffect` - can detect the change in the state or re-rendering the component
   - `useContext`
   - `useReducer`
   - `useCallback`
   - `useMemo`
   - `useRef`
   - `useImperativeHandle`
   - `useLayoutEffect`
   - `useDebugValue`
 - using these hooks we will also write our **custom hook**  


### Deploying react project
we can deploy our react project using **vercel** or **netlify**



## Redux 
>what is Redux ?
- It is a javascript library for managing application state
- It makes creating complex application easier

>What is Redux Cycle ?
It is basically the sequential chart of the steps that redux uses.

Action creator ---> action --> dispatch --> reducers --> state

- Action creator is a function that creates and return a plain javascript object
- This plain object is considered as action
- now the dispatch function takes the action object and make copies of the object and passes them off to the different places that required them inside our project - Reducers(functions). Now the reducers handles what to do with the data under different departments. Reducers are basically created on the basis of different departments required. Reducers(reduce the data as the name suggests) are function that at the end inspect the data, to be stored or deleted under the provided conditions.
- then the reducer create a central repository for all the data - named state, and store them there so that our whole application can access complete data at one place(not ask the reducers for data)

* To use react in redux a separate [library](https://react-redux.js.org/introduction/quick-start) is made named - **React-Redux**

>How to install and use redux in our react app ?
  - to use react-redux in library in our react app we first need to install redux library using `npm install redux ` or `yarn add redux`
  - and then install react-redux library as `npm install react-redux` or `yarn add react-redux`
  - or we can do it in one command as `npm install --save redux react-redux`