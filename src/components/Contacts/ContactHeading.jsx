import React from "react";
import ContactForm from "./ContactForm";

class ContactHeading extends React.Component {
  state = {
    modal: false,
    isEditing: false,
    // form: {
    //   name: "",
    //   yearsInOperation: "",
    //   imageURL: "",
    //   city: "",
    //   description: ""
    // }
  };

  // handleSubmit = values => {
  //   console.log("handleSubmit:", this.state)
  // }
  toggle = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
      modal: !prevState.modal,
    }));
  };

  toggleAddCleaner = () => {
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
              onClick={this.toggleAddCleaner}
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              title="Add Cleaner"
            ></em>
          </div>
        </div>
        < ContactForm  
        // form={this.state.form}
        // submit={this.handleSubmit}
        isEditing={this.state.isEditing}
        isModal={this.state.modal}
        toggle={this.toggle}
        toggleAddCleaner={this.toggleAddCleaner}
         />
      </React.Fragment>
    );
  }
}

export default ContactHeading;
