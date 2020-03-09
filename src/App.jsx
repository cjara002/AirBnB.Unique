import React from "react";
// import Profiles from "./components/Profile/Profiles.jsx.js.js.js";
import Contact from "./components/Contacts/Contact";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";

class App extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <div className="App">
            {/* <header className="App-header"> */}
            {/* <Profiles /> */}
            <Contact />
            {/* </header> */}
          </div>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
