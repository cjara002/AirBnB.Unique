import React from "react";
import {Input, Button, InputGroup, 
    // InputGroupAddon
 } from "reactstrap";

class SearchContacts extends React.Component {
  render() {
    return (
      <React.Fragment>
          {this.props.searchStarted ?
           <React.Fragment>
          <InputGroup>
               <Input type="text" value={this.props.initialQuery} onChange={this.props.onChangeSearch} placeholder="Search Contacts..."/>
              {/* <InputGroupAddon> */}
                   <Button onClick={this.props.toggleSearch}>
                       <em
                      className="fa-1x mr-2 fas fa-window-close"
                      id="searchProfiles"
                      style={{ cursor: "pointer" }}
                      data-toggle="tooltip"
                      title="Cancel Search"
                      
                    ></em>
                   </Button>
              {/* </InputGroupAddon> */}
               {/* <InputGroupAddon> */}
                   <Button onClick={this.props.handleClickSearch}>
                       <em
                      className="fa-1x mr-2 fas fa-search"
                      id="searchProfiles"
                      style={{ cursor: "pointer" }}
                      data-toggle="tooltip"
                      title="Search"
                    ></em>
                   </Button>
               {/* </InputGroupAddon> */}
          </InputGroup>
           
           </React.Fragment>
          :
          <em
          className="fa-1x mr-2 fas fa-search"
          id="searchProfiles"
          style={{ cursor: "pointer" }}
          data-toggle="tooltip"
          title="Search Cleaners"
          onClick={this.props.toggleSearch}
        ></em> }
        
      </React.Fragment>
    );
  }
}

export default SearchContacts;
