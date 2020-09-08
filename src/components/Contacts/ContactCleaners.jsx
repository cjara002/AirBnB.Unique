import React from "react";
import { connect } from "react-redux";
import { getCleaners, GetSingleCleaner, deleteCleaner } from "../../Redux/Actions/Cleaners/cleanerAction";
import SingleCleanerView from "./SingleCleanerView";
import Swal from "sweetalert2";

class ContactCleaners extends React.Component {

  componentDidMount() {
    this.props.getCleaners();
  }

  state = {
    modal: false,
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

  render() {
    return (
      <React.Fragment>
        <div className="row">
          {this.props &&
            this.props.cleaners.map((profile) => (
              <div className="col-sm-6 col-lg-4" key={profile.id}>
                <div className="card-default card" id="contactMenu">
                  {/*
                  <div className="ml-auto" id="menuShortcut">
                    <div className="dropdown">
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="btn btn-outline-secondary"
                        onClick={this.showMenu}
                        // onClick={this.activeMenu}
                      >
                        <em
                          className="fa fa-ellipsis-h fa-lg"
                          id="toggleButton"
                        />
                      </button>
                      <div
                        tabIndex={-1}
                        role="menu"
                        aria-hidden="true"
                        className={
                          this.state.optionsOpen
                            ? "dropdown-menu-right-forced animated fadeInLeft dropdown-menu show"
                            : "dropdown-menu-right-forced animated fadeInLeft dropdown-menu"
                        }
                        x-placement="bottom-start"
                        style={{
                          position: "absolute",
                          willChange: "transform",
                          top: 0,
                          left: 0,
                          transform: "translate3d(-106px, 31px, 0px)",
                        }}
                        data-placement="bottom-start"
                        id="subMenu"
                      >
                        <button
                          type="button"
                          tabIndex={0}
                          className="dropdown-item"
                          id="subMenuIcon"
                        >
                          <em className="fa-fw fa fa-plus mr-2" />
                          <span>Edit contact</span>
                        </button>

                        {/* <button
                        type="button"
                        tabIndex={0}
                        className="dropdown-item"

                      >
                        <em className="fa-fw fa fa-plus mr-2" />
                        <span>New contact</span>
                      </button> 

                        <button
                          type="button"
                          tabIndex={0}
                          className="dropdown-item"
                          id="subMenuIcon"
                        >
                          <em className="fa-fw fas fa-minus mr-2" />
                          <span>Delete contact</span>
                        </button>
                        <button
                          type="button"
                          tabIndex={0}
                          className="dropdown-item"
                          id="subMenuIcon"
                        >
                          <em className="fa-fw fas fa-share mr-2" />
                          <span>Share contact</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* End of Menu */}

                  {/* Start of Card */}

                  <div className="text-center card-body" id="contactCard">
                    <img
                      className=" mb-2 rounded-circle-thumb32"
                      src={profile.imageUrl}
                      alt="Contact"
                      id="profilePhoto"
                    />
                    <h4>{profile.name}</h4>
                    <h5 className="text-white">  {profile.city}</h5>
                    {/* <p>{profile.description}</p>
                    <span>Years in operation: {profile.yearsInOperation}</span> */}
                  </div>
                  <div className="d-flex card-footer">
                    <button
                      type="button"
                      className="btn btn-dark btn-lg btn-block"
                      onClick={() => this.showModal(profile.id)}
                    >
                      View Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <SingleCleanerView  
            single={this.props.singleCleaner}
            isModal={this.state.modal}
            toggle={this.toggle}
            updateContact={this.updateSingleContact}
            deleteContact={this.deleteContactUserConfirmation}
            />
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToPros(store) {
  return {
    cleaners: store.cleaners,
    singleCleaner: store.singleCleaner
  };
}

export default connect(mapStateToPros, { getCleaners, GetSingleCleaner, deleteCleaner })(ContactCleaners);
