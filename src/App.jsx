import React from "react";
import { withRouter } from "react-router-dom";
import AppRoutes from "./start/AppRoutes";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";

class App extends React.Component {

  render() {
    // console.log("Starting App from App.jsx");
    return (
      <React.Fragment>
        <Provider store={store}>
          {/* <div className="App"> */}
          <AppRoutes />
          {/* </div> */}
        </Provider>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
