import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

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
      <div className="wrapper">
        <Header triggershowSidebar={this.showSidebar} />

        <SideBar showSidebar={this.state.setSidebar} />
        <section className="section-container">{this.props.children}</section>
        <Footer />
      </div>
    );
  }
}
export default Base;
