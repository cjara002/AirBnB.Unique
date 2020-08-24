import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UniqueTest from "./images/UniqueLogoTest.jpg";
// import {
//   UncontrolledDropDown,
//   DropdownMenu,
//   DropdownItem,
//   ListGroup,
//   ListGroupItem,
// } from "reactstrap";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import Swal from "sweetalert2";

class Header extends Component {
  render() {
    return (
      <header className="topnavbar-wrapper">
        {/* START Top Navbar */}
        <nav className="navbar-header">
          <div className="navbar-brand">
            <span>
              {/* do on click */}
              <div className="brand-logo text-black">
                <img
                style={{"width": "10%", "border-radius": "50%"}}
                  className="img-fluid"
                  src={UniqueTest}
                  alt="App Logo"
                />
                <small className="ml-2"> Making every expierence UNIQUE</small>
              </div>
            </span>

            {/* <div className="brand-logo-collapsed">
                <img
                  className="img-fluid"
                  src={ImperioTransXS}
                  alt="App Logo"
                />
              </div> */}
          </div>
          {/* END navbar header */}
          <ul className="navbar-nav flex-row">
          <li className="nav-item">
              <a
                className="nav-link"
                // onClick={this.logOut}
                style={{ cursor: "pointer", color: "#FFF" }}
                href="/"
              >
                <em className="icon-logout" />
              </a>
            </li>
          </ul>

        </nav>
      </header>
    );
  }
}

export default (withRouter(Header));
