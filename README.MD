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

