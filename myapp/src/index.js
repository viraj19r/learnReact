// import the react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
// create a react component
const App = function () {
    const buttonText = "click me";
  return <div>
  <label className="label" htmlFor="name">Enter Name:</label>  
  <input id="name" type="text" />
  <button style={{backgroundColor:'green',color: 'white'}}>{buttonText}</button>
  </div>; // here we will use the htmlFor instead of using the for because in this case there will be an warning form the browser console -->
  // opening tag for element should be on the same line in which we use the return statement,otherwise undefined will be returned by the return statement
};// another thing we can do is we can wrap our code inside the parenthesis.
// take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector("#root") // this element with id is in the index.html file in public folder
);
