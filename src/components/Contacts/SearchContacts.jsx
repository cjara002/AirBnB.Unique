import React from "react";
import { Input, Button, InputGroup } from "reactstrap";

class SearchContacts extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.searchStarted ? (
          <React.Fragment>
            <InputGroup className="SearchBarContactsBorder">
              <Input
                type="text"
                value={this.props.initialQuery}
                onChange={this.props.onChangeSearch}
                placeholder="e.g. name or location"
              />
              <Button
                className="btn btn-dark"
                onClick={this.props.toggleSearch}
              >
                <em
                  className="fa-1x mr-2 fas fa-window-close"
                  style={{ cursor: "pointer" }}
                  data-toggle="tooltip"
                  title="Cancel Search"
                />
              </Button>

              <Button
                className="btn btn-dark"
                onClick={this.props.handleClickSearch}
              >
                <em
                  className="fa-1x mr-2 fas fa-search"
                  style={{ cursor: "pointer" }}
                  data-toggle="tooltip"
                  title="Search"
                />
              </Button>
            </InputGroup>
          </React.Fragment>
        ) : (
          <em
            className="fa-1x mr-2 fas fa-search"
            style={{ cursor: "pointer" }}
            data-toggle="tooltip"
            title="Search Cleaners"
            onClick={this.props.toggleSearch}
          ></em>
        )}
      </React.Fragment>
    );
  }
}

export default SearchContacts;
