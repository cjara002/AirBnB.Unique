import AppRoutes from "./start/AppRoutes";
import { Provider } from "react-redux";
import store from "./Store";
import React from "react";
import { withRouter } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
