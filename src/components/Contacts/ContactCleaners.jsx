import { connect } from "react-redux";
import localeInfo from "rc-pagination/lib/locale/en_US";
import Pagination from "rc-pagination";
import React from "react";
import SearchContacts from "./SearchContacts";
import SingleCleanerProfile from "./SingleCleanerProfile";
import SingleCleanerView from "./SingleCleanerView";
import Swal from "sweetalert2";
import {
  GetSingleCleaner,
  deleteCleaner,
  getPaginatedCleaners,
  getSearchPaginatedCleaners,
} from "../../Redux/Actions/Cleaners/cleanerAction";
import "rc-pagination/assets/index.css";

class ContactCleaners extends React.Component {
  componentDidMount() {
    this.fetchPaginatedCleaners();
  }

  state = {
    modal: false,
    pageIndex: 0,
    pageSize: 3,
    totalCount: 0,
    totalPages: 0,
    profileLoaded: false,
    initiatedSearch: false,
    query: "",
    searchBarShown: false,
    mappedCleaners: [],
  };

  fetchPaginatedCleaners = () => {
    this.state.query.length > 0 && this.state.initiatedSearch
      ? this.props
          .getSearchPaginatedCleaners(
            this.state.pageIndex,
            this.state.pageSize,
            this.state.query
          )
          .then(this.getSearchPaginatedCleanersSuccess)
          .catch(this.getSearchPaginatedCleanersError)
      : this.props
          .getPaginatedCleaners(this.state.pageIndex, this.state.pageSize)
          .then(this.getPaginatedCleanersSuccess)
          .catch(this.getPaginatedCleanersError);
  };

  getPaginatedCleanersSuccess = () => {
    const cleanersProfile = this.props.paginatedCleaners;
    this.setState(() => ({
      profileLoaded: true,
      totalCount: cleanersProfile.totalCount,
      totalPages: cleanersProfile.totalPages,
      pageIndex: cleanersProfile.pageIndex,
      pageSize: cleanersProfile.pageSize,
      mappedCleaners: cleanersProfile.pagedItems,
    }));
  };

  getPaginatedCleanersError = (e) => {
    console.log("getPaginatedCleanersErrors:", e);
  };

  getSearchPaginatedCleanersSuccess = () => {
    const searchedQuery = this.props.searchedQuery;
    this.setState(() => ({
      profileLoaded: true,
      totalCount: searchedQuery.totalCount,
      totalPages: searchedQuery.totalPages,
      pageIndex: searchedQuery.pageIndex,
      pageSize: searchedQuery.pageSize,
      mappedCleaners: searchedQuery.pagedItems,
    }));
  };

  getSearchPaginatedCleanersError = (e) => {
    console.log("getSearchPaginatedCleanersError:", e);
  };

  showModal = (profile) => {
    this.props.GetSingleCleaner(profile);
    var single = this.props.singleCleaner;
    this.setState((prevState) => {
      return {
        modal: !prevState.modal,
        singleCleaner: single,
      };
    });
    // , console.log("showModal:", this.state.singleCleaner));
  };

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  updateSingleContact = (id) => {
    this.props.history.push(`/cleanersform/${id}/edit`);
  };

  deleteContactUserConfirmation = (single) => {
    Swal.fire({
      icon: "warning",
      html: `Are you sure you want to delete <b>${single.name}</b> from <b>${single.city}</b>?`,
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        this.deleteSingleCleaner(single.id);
      }
    });
  };

  deleteSingleCleaner = (id) => {
    this.props
      .deleteCleaner(id)
      .then(this.onDeleteSuccess(id))
      .catch(this.onDeleteError);
  };

  onDeleteSuccess = (id) => {
    Swal.fire({
      icon: "deleted",
      title: "Cleaner Deleted",
      showConfirmButton: false,
      timer: 1500,
    });
    const cleanersProfile = this.props.paginatedCleaners.filter(
      (cleanersProfile) => cleanersProfile.id !== id
    );
    this.setState(() => ({
      mappedCleaners: cleanersProfile.pagedItems,
      modal: false,
    }));
  };

  onDeleteError = () => {
    Swal.fire({
      icon: "error",
      title: "Cleaner not deleted. Please try again...",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  mappedCleanersProfile = (mappedCleaners) => {
    return (
      <SingleCleanerProfile
        pagCleaner={mappedCleaners}
        key={mappedCleaners.id}
        triggershowModal={this.showModal}
        isProfileLoaded={this.state.profileLoaded}
      />
    );
  };

  onChange = (current) => {
    let paged = current - 1;
    this.setState(
      {
        pageIndex: current + 1,
      },
      this.getNextPage(paged)
    );
  };

  getNextPage = (paged) => {
    this.props
      .getPaginatedCleaners(paged, this.state.pageSize)
      .then(this.nextSuccess);
  };

  nextSuccess = () => {
    const cleanersProfile = this.props.paginatedCleaners;
    this.setState({
      // profileLoaded: false,
      mappedCleaners: cleanersProfile.pagedItems,
    });
  };

  submitNewCleaner = () => {
    const path = "/cleanersform";
    this.props.history.push(path);
  };

  toggleSearch = () => {
    this.setState({
      searchBarShown: !this.state.searchBarShown,
    });
  };

  searchWithQuery = (event) => {
    var value = event.target.value;
    this.setState(
      () => ({ query: value }),
      () =>
        value === ""
          ? this.setState({ pageIndex: 0 }, () => {
              this.fetchPaginatedCleaners();
            })
          : "is 0"
    );
  };

  handleClickSearch = () => {
    this.setState(
      () => {
        return {
          initiatedSearch: true,
        };
      },
      () => this.fetchPaginatedCleaners()
    );
  };

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
              onChangeSearch={this.searchWithQuery}
              handleClickSearch={this.handleClickSearch}
            />
            {this.state.searchBarShown ? null : (
              <em
                className="fa-1x mr-2 fas fa-user-plus"
                onClick={this.submitNewCleaner}
                style={{ cursor: "pointer" }}
                data-toggle="tooltip"
                title="Add Cleaner"
              ></em>
            )}
          </div>
        </div>

        <div className="row">
          {this.state.mappedCleaners.map(this.mappedCleanersProfile)}
        </div>
        <SingleCleanerView
          single={this.props.singleCleaner}
          isModal={this.state.modal}
          toggle={this.toggle}
          updateContact={this.updateSingleContact}
          deleteContact={this.deleteContactUserConfirmation}
        />
        <div style={{ padding: 25 }}>
          <Pagination
            onChange={this.onChange}
            currentPage={this.state.pageIndex}
            total={this.state.totalCount}
            pageSize={this.state.pageSize}
            locale={localeInfo}
          />
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {
    cleaners: store.cleaners,
    singleCleaner: store.singleCleaner,
    paginatedCleaners: store.paginatedCleaners,
    searchedQuery: store.searchedQuery,
  };
}

export default connect(mapStateToProps, {
  getPaginatedCleaners,
  GetSingleCleaner,
  deleteCleaner,
  getSearchPaginatedCleaners,
})(ContactCleaners);
