import React from "react";
import { connect } from "react-redux";
import {
  //  getCleaners,
  GetSingleCleaner,
  deleteCleaner,
  getPaginatedCleaners,
} from "../../Redux/Actions/Cleaners/cleanerAction";
import SingleCleanerView from "./SingleCleanerView";
import Swal from "sweetalert2";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import localeInfo from "rc-pagination/lib/locale/en_US";
import SingleCleanerProfile from "./SingleCleanerProfile";

class ContactCleaners extends React.Component {
  componentDidMount() {
    this.fetchPaginatedCleaners();
  }

  state = {
    modal: false,
    pageIndex: 0,
    pageSize: 3,
    totalCount: 9,
    totalPages: 9,
    imageLoaded: false,
    mappedCleaners: []
  };

  fetchPaginatedCleaners = () => {
     this.props.getPaginatedCleaners(this.state.pageIndex, this.state.pageSize)
      .then(this.getPaginatedCleanersSuccess)
      .catch(this.getPaginatedCleanersError)
  };

  getPaginatedCleanersSuccess = () => {
    const cleanersProfile = this.props.paginatedCleaners;
    this.setState(() => ({
        imageLoaded: true,
        mappedCleaners: cleanersProfile
      }
  ));
  };

  getPaginatedCleanersError = (e) => {
    console.log("getPaginatedCleanersErrors:", e);
  };

  showModal = (profile) => {
    this.props.GetSingleCleaner(profile);
    var single = this.props.singleCleaner;
    this.setState((prevState) => {
      return {
        modal: !prevState.modal,
        singleCleaner: single,
      };
    }, console.log("showModal:", this.state.singleCleaner));
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
      html: 
      `Are you sure you want to delete <b>${single.name}</b> from <b>${single.city}</b>?`,
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
    this.props.deleteCleaner(id)
    .then(this.onDeleteSuccess(id))
    .catch(this.onDeleteError);
  };

  onDeleteSuccess = id => {
       Swal.fire({
        icon: "deleted",
        title: "Cleaner Deleted", 
        showConfirmButton: false,
        timer: 1500,
      })
      const cleanersProfile = this.props.paginatedCleaners.filter(
        cleanersProfile => cleanersProfile.id !== id
       )
      this.setState(() => ({
        mappedCleaners: cleanersProfile,
        modal: false
      }
  ));    
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
        isProfileLoaded={this.state.imageLoaded}
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
    this.props.getPaginatedCleaners(paged, this.state.pageSize)
    .then(this.nextSuccess);
  };
 
  nextSuccess = () => {
    const cleanersProfile = this.props.paginatedCleaners;
    this.setState({
      // imageLoaded: false,
      mappedCleaners: cleanersProfile
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          {this.state.mappedCleaners.map(this.mappedCleanersProfile)}
          <SingleCleanerView
            single={this.props.singleCleaner}
            isModal={this.state.modal}
            toggle={this.toggle}
            updateContact={this.updateSingleContact}
            deleteContact={this.deleteContactUserConfirmation}
          />
        </div>
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

function mapStateToPros(store) {
  return {
    cleaners: store.cleaners,
    singleCleaner: store.singleCleaner,
    paginatedCleaners: store.paginatedCleaners,
  };
}

export default connect(mapStateToPros, {
  // getCleaners,
  getPaginatedCleaners,
  GetSingleCleaner,
  deleteCleaner,
})(ContactCleaners);
