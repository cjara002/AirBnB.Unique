import ContactCleaners from "./ContactCleaners";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactStyles.css";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="content-wrapper">
            <ContactCleaners history={this.props.history}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
