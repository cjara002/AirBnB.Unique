import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import "bootstrap/dist/css/bootstrap.min.css";

class Base extends React.Component {
  state = {
    setSidebar: false,
  };

  showSidebar = () => {
    this.setState((prevState) => {
      return {
        setSidebar: !prevState.setSidebar,
      };
    });
  };
  render() {
    return (
      <div className="main-wrapper">
        {/* <div className="container"> */}
          <Header triggershowSidebar={this.showSidebar} />
        {/* </div> */}

        <SideBar showSidebar={this.state.setSidebar} />
        <section className="section-container">{this.props.children}</section>
        <Footer />
      </div>
    );
  }
}
export default Base;
