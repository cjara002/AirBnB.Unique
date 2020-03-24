import React from "react";
import ContactForm from "./ContactForm";

class ContactHeading extends React.Component {
  state = {
    modal: false
  };

  AddCleaner = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div className="content-heading">
          Cleaners
          <div className="ml-auto">
            <em
              className="fa-1x mr-2 fas fa-search"
              id="searchProfiles"
              // onClick={this.toggleAddQuestion}
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              title="Search Cleaners"
            ></em>
            {" "}
            <em
              className="fa-1x mr-2 fas fa-user-plus"
              onClick={this.AddCleaner}
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              title="Add Cleaner"
            ></em>
          </div>
        </div>
        < ContactForm  isModal={this.state.modal} />
      </React.Fragment>
    );
  }
}

export default ContactHeading;
