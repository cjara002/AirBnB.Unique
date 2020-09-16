import React from "react";
import { connect } from "react-redux";
import { 
  //  getCleaners,
   GetSingleCleaner,
   deleteCleaner,
   getPaginatedCleaners
   } from "../../Redux/Actions/Cleaners/cleanerAction";
import SingleCleanerView from "./SingleCleanerView";
import Swal from "sweetalert2";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import localeInfo from "rc-pagination/lib/locale/en_US";
import SingleCleanerProfile from "./SingleCleanerProfile";

class ContactCleaners extends React.Component {

  componentDidMount() {
    // this.props.getCleaners();
    var cleaners= this.props.getPaginatedCleaners;
    cleaners(this.state.pageIndex, this.state.pageSize);
    // .then(this.getPaginatedCleanersSuccess)
    // this.getPaginatedCleanersSuccess()
  }

  state = {
    modal: false,
    pageIndex: 0,
    pageSize: 3,
    totalCount: 4,
    totalPages: 0,
    // mappedCleaners: []
  };

  showModal = profile => {
    this.props.GetSingleCleaner(profile);
  var single = this.props.singleCleaner
  this.setState(
    prevState => {
      return {
    modal: !prevState.modal,
    singleCleaner: single
  };
},
console.log("showModal:", this.state.singleCleaner)
);
};

toggle = () => {
  this.setState((prevState) => ({
    modal: !prevState.modal,
  }));
};

updateSingleContact = id => {
  this.props.history.push(`/cleanersform/${id}/edit`);
}

deleteContactUserConfirmation = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonColor: "#042A38",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.value) {
      this.deleteSingleCleaner(id);
    }
  });
};

deleteSingleCleaner = (id) => {
this.props.deleteCleaner(id)
// .then(this.onDeleteSuccess)
// .catch(this.onDeleteError)
Swal.fire("Deleted!");
};

onDeleteSuccess = () => {
  //   debugger;
  // Swal.fire("Cleaner Updated.", "success");
  this.props.getCleaners();
};

onDeleteError = () => {
  Swal.fire("Something is not right. Please try again.", "error");
};

// getPaginatedCleanersSuccess = () => {
//   debugger;
//   const cleanersProfile = this.props.paginatedCleaners;
//   this.setState(() => {
//     return {
//     cleanersProfile, 
//     mappedCleaners: cleanersProfile.map(this.mappedCleanersProfile)
//     }
//   })
// }

mappedCleanersProfile = mappedCleaners => {
  return (
    <SingleCleanerProfile 
    pagCleaner={mappedCleaners}
    key={mappedCleaners.id}
    triggershowModal={this.showModal}
    />
  )
}

onChange = current => {
let paged = current - 1;
this.setState({
  pageIndex: current + 1
},
this.getNextPage(paged)
);
};

getNextPage = paged => {
  this.props.getPaginatedCleaners(paged, this.state.pageSize)
}
// getNextPage = paged => {
//   businessProfilesService
//     .getPaginated(paged, this.state.pageSize)
//     .then(this.nextSuccess)
//     .catch(this.nextFail);
// };
// nextSuccess = response => {
//   this.setState({
//     busProfile: response.item.pagedItems,
//     mappedProfile: response.item.pagedItems.map(this.mapBusProfile),
//     pageIndex: response.item.pageIndex,
//     pageSize: response.item.pageSize,
//     totalCount: response.item.totalCount,
//     totalPages: response.item.totalPages
//   });
// };

  render() {
    return (
      <React.Fragment>
        <div className="row">
                 {/* {this.state.mappedCleaners} */}
                 {this.props.paginatedCleaners.map(this.mappedCleanersProfile)}
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
    paginatedCleaners: store.paginatedCleaners
  };
}

export default connect(mapStateToPros, 
  { 
    // getCleaners,
    getPaginatedCleaners,
    GetSingleCleaner,
    deleteCleaner
   })(ContactCleaners);
