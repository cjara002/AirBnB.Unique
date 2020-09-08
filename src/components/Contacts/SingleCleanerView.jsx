import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import "./ContactStyles.css";
// import { connect } from "react-redux";
// import { GetSingleCleaner } from "../../Redux/Actions/Cleaners/cleanerAction";

class SingleCleanerView extends React.Component {
  state = {
    optionsOpen: false,
  };

    showMenu = () => {
    this.setState((prevState) => ({
      optionsOpen: !prevState.optionsOpen,
    }));
  };



  render() {
    return (
      <React.Fragment>

              <Modal isOpen={this.props.isModal}>
                <ModalHeader
                  toggle={this.props.toggle}

                >
                  <div>
                  {this.props.single[0] && this.props.single[0].name}
                  </div>
                </ModalHeader>
                <ModalBody>
                  {/* Start of menu */}
                <div className="ml-auto" id="menuShortcut">
                    <div className="dropdown">
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="btn btn-outline-secondary"
                        onClick={this.showMenu}
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
                          onClick={() => this.props.updateContact(this.props.single[0].id)}
                        >
                          <em className="fa-fw fa fa-plus mr-2" />
                          <span
                         
                    // onClick={() => props.onUpdate(props.busProfile.id)}

                          >Edit contact</span>
                        </button>

                         {/* <button
                        type="button"
                        tabIndex={0}
                        className="dropdown-item"

                      >
                        <em className="fa-fw fa fa-plus mr-2" />
                        <span>New contact</span>
                      </button>  */}

                        <button
                          type="button"
                          tabIndex={0}
                          className="dropdown-item"
                          id="subMenuIcon"
                          onClick={() => this.props.deleteContact(this.props.single[0].id)}
                        >
                          <em className="fa-fw fas fa-minus mr-2" />
                          <span>Delete contact</span>
                        </button>
                        {/* <button
                          type="button"
                          tabIndex={0}
                          className="dropdown-item"
                          id="subMenuIcon"
                        >
                          <em className="fa-fw fas fa-share mr-2" />
                          <span>Share contact</span>
                        </button> */}
                      </div>
                    </div>
                  </div>
                        {/* End of menu */}
                <div className="container">
                  <div className="verticalCenter">
                  <img
                        className=" mb-2 rounded-circle-thumb32"
                        src={this.props.single[0] && this.props.single[0].imageUrl}
                        alt="Contact"
                        id="profilePhoto"
                      />
                      {/* <h4>{profile.name}</h4> */}
                      <h5> City: {this.props.single[0] && this.props.single[0].city}</h5>
                     <p>{this.props.single[0] && this.props.single[0].description}</p>
                      <span>Years in operation: {this.props.single[0] && this.props.single[0].yearsInOperation}</span> 
                      </div>
                </div>
                </ModalBody>
              </Modal>
      </React.Fragment>
    );
  }
}

// function mapStateToProps(store) {
//   return {
//     singleCleaner: store.singleCleaner
//   }
// }
// export default connect(mapStateToProps, { GetSingleCleaner })(SingleCleanerView);
export default SingleCleanerView;
