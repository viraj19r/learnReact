import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay'
import Spinner from "./Spinner";
class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { lat: null, errMessage: "" }; // initially we will assign null because we don't have any value
//     // after initializing the state we can only change it using the setState function
//   }
// we can also define state here like

  state = {lat: null, errMessage: ""};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }
  renderContent(){
    if (this.state.errMessage && !this.state.lat) {
        return <div>Error: {this.state.errMessage}</div>;
      }
      if (this.state.lat && !this.state.errMessage) {
        return <SeasonDisplay lat={this.state.lat}/>
      }
  
      return <Spinner message="Please accept a message request"/>;
    
  }
  // React says we need to define the render function
  render() {
    return (  // we always try that we don't have multiple return statements inside the render function
  <div className="red border">
  {this.renderContent()}
  </div>
    );
};
}
ReactDOM.render(<App />, document.querySelector("#root"));
