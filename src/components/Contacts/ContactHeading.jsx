import React from "react";
import SearchContacts from "./SearchContacts";

class ContactHeading extends React.Component {
  state={
    searchBarShown: false,
    query: ""
  }

  submitNewCleaner = () => {
    const path = "/cleanersform";
    this.props.history.push(path);
  };

  toggleSearch = () => {
    this.setState({
      searchBarShown: !this.state.searchBarShown
    })
  }

  searchWithQuery = event => {
    console.log("searchWithQuery:", event.target.value );
    var value = event.target.value;
    this.setState({
      query: value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="content-heading">
          Cleaners
          <div className="ml-auto">
           <SearchContacts 
           searchStarted={this.state.searchBarShown} 
           toggleSearch={this.toggleSearch}
           initialQuery={this.state.query}
           onChangeSearch={this.searchWithQuery}/>
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
