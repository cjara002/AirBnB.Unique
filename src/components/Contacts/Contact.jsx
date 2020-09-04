import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactStyles.css";
// import ProfileContact from "./ProfileContact";
import ContactHeading from "./ContactHeading";
import ContactCleaners from "./ContactCleaners";

class Contact extends React.Component {
  state = {
    imageLoaded: false,
   
  };

  render() {
    return (
      <React.Fragment>
        <div className="content-wrapper">
          <ContactHeading history={this.props.history}/>
            <ContactCleaners />
        </div>
      </React.Fragment>
    );
  }
}


export default Contact;
