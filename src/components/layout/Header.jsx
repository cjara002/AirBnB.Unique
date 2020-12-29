import React from "react";
// import { withRouter } from "react-router-dom";
import UniqueTest from "./images/UniqueLogoTest.jpg";
import "./layoutStyle.css";
import { Link, withRouter } from "react-router-dom";
// import {connect} from "react-redux";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import Swal from "sweetalert2";

const Header = (props) => {
  return (
    <header className="topnavbar-wrapper" id="appHeader">
      <nav className="navbar-header">
        <div className="navbar-brand">
          <span>
            <div className="brand-logo">
              <img
                className="img-fluid"
                src={UniqueTest}
                alt="App Logo"
                id="logoAirBnB"
              />
              <small className="ml-2 text-white">
                {" "}
                Making every expierence &nbsp;
                <span className="headerRainbow">UNIQUE</span>
              </small>
              &nbsp;
              {/* Start Hamburger Menu */}
              <Link to="#">
                <em
                  className="fas fa-bars"
                  onClick={() => props.triggershowSidebar()}
                  id="menuBars"
                  data-toggle="tooltip"
                  title="Menu"
                />
              </Link>
              {/* End Hamburger Menu */}
            </div>
          </span>
        </div>
        {/* Start Log Out */}
        <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <a
              className="nav-link"
              // onClick={this.logOut}
              style={{ cursor: "pointer" }}
              href="/"
              data-toggle="tooltip"
              title="Log Out"
            >
              <em className="fas fa-sign-out-alt text-white" />
            </a>
          </li>
        </ul>
        {/* End Log Out */}
      </nav>
    </header>
  );
  // }
};

export default withRouter(Header);

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(actions, dispatch)
// });

// const mapStateToProps = state => {
//   return {
//     title: state.title
//   };
// };
// export default connect(
//   // mapStateToProps
//   // mapDispatchToProps
//   )(withRouter(Header));
