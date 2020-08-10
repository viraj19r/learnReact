# Notes

- In react we use two libraries React and ReactDOM. React(also called reconciler(kind of mediator)) knows how to work with compilers and ReactDOM(also called a renderer) knows how to take instructions on what we want to show in html
  

- how to start with react ?
  1. Install/Update node js
  2. Install create-react-app(package) - on command line-- `npm install -g create-react-app`
  3. Generate a project - on command line --`create-react-app name of project`
  4. Build project


- Is there any way that we can create react project in one command ?
  - The recommended method for generating a project is now (one command for above two commands):
   `npx create-react-app myapp`
  - If we get any errors about missing templates or how a global Create React App install is no longer supported even when using this command, we likely need to remove the global package from our system:
   `npm uninstall -g create-react-app`


- what is Babel ?
  - react package also includes Babel. Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines or the browser which don't have the support of newly added versions of javascript.


- How to run/start react project ? 
  - To run the react project we use `npm start` in the project directory and to stop we use *control+c*  and once the app is started we can visit at localhost:3000.
  - we can have the error current port is in use then we can simply use yes command to go to another port and we can also use on your network address(like http://192.168.18.9:3000 ) to visit out page instead of localhost(like http://localhost:3000 )


- What and how will we do practice react and jsx ? 
  - Now we will delete all the code in the src folder to start from scratch


- what is difference between `import` and `require` ?
  - If we want to use the ES2015 modules then we will use the `import` statement and if we want to use the commonjs modules we will use the `require` statement


- what is a react component ?
  - In react a component is a function or class that produces html to show the user (using JSX) and handles feedback from user using event handlers