import React from "react";

class ContactHeading extends React.Component {

  submitNewCleaner = () => {
    const path = "/cleanersform";
    this.props.history.push(path);
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
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              title="Search Cleaners"
            ></em>
            {" "}
            <em
              className="fa-1x mr-2 fas fa-user-plus"
              onClick={this.submitNewCleaner}
              style={{ cursor: "pointer" }}
              data-toggle="tooltip"
              title="Add Cleaner"
            ></em>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactHeading;
