import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UniqueTest from "./images/UniqueLogoTest.jpg";
import "./layoutStyle.css"
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
      <header className="topnavbar-wrapper" id="appHeader">
        {/* START Top Navbar */}
        <nav className="navbar-header">
          <div className="navbar-brand">
            <span>
              {/* do on click */}
              <div className="brand-logo text-black">
                <img
                style={{"width": "10%", "borderRadius": "50%"}}
                  className="img-fluid"
                  src={UniqueTest}
                  alt="App Logo"
                />
                <small className="ml-2 text-white"> Making every expierence UNIQUE</small>
              </div>
            </span>

            {/* <div className="brand-logo-collapsed">
                <img
                  className="img-fluid"
                  src={UniqueTest}
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
                style={{ cursor: "pointer", color: "black" }}
                href="/"
              data-toggle="tooltip"
              title="Log Out"
              >
                {/* <em className="fa-1x mr-2 fas fa-search" /> */}
                <em className="fas fa-sign-out-alt text-white" />
              </a>
            </li>
          </ul>

        </nav>
      </header>
    );
  }
}

export default (withRouter(Header));
