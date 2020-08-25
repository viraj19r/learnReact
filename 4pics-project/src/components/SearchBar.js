import React from "react";

class SearchBar extends React.Component {
  //   onInputChange(event) { // this is uncontrolled way of handling events so we will not use it
  //     // we can name it anything we want to
  //     // this event will get when the input is changed
  //     console.log(event.target.value);
  //   } // we can also pass this method to the onChange method in the input
  //   // using the arrow function as
  //   //  onChange={(e)=>console.log(e.target.value)}
  //   // both are correct
  state = { term: "" }; // we can set a default value here, that will always render whenever the page is rendered
  //controlled way of handling event is to use the state and whenever the input is changes, set the state using a arrow function inside the onChange method
  onFormSubmit =(event)=> {
    // to prevent the page to submit and refresh the page automatically we use the preventDefault() function
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <div className="ui segment ">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
          </div>{" "}
          {/*onChange is called every time the input is changed.*/}
        </form>
      </div> // the value attribute re-renders the value to the input after changing the state
    );
  }
}
export default SearchBar;
