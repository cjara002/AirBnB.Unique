import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactStyles.css";

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
          <ModalHeader toggle={this.props.toggle}></ModalHeader>
          <ModalBody>
            {/* Start of menu */}
            <div className="ml-auto">
              <div className="dropdown">
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="btn btn-outline-secondary"
                  onClick={this.showMenu}
                >
                  <em className="fa fa-ellipsis-h fa-lg" id="toggleButton" />
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
                    transform: "translate3d(10px, 31px, 0px)",
                  }}
                  data-placement="bottom-start"
                  id="subMenu"
                >
                  <button
                    type="button"
                    tabIndex={0}
                    className="dropdown-item"
                    id="subMenuIcon"
                    onClick={() =>
                      this.props.updateContact(this.props.single[0].id)
                    }
                  >
                    <em className="fa-fw fa fa-plus mr-2" />
                    <span>Edit Cleaner</span>
                  </button>

                  <button
                    type="button"
                    tabIndex={0}
                    className="dropdown-item"
                    id="subMenuIcon"
                    onClick={() =>
                      this.props.deleteContact(this.props.single[0])
                    }
                  >
                    <em className="fa-fw fas fa-minus mr-2" />
                    <span>Delete Cleaner</span>
                  </button>

                  <button
                    type="button"
                    tabIndex={0}
                    className="dropdown-item"
                    id="subMenuIcon"
                    // onClick={() =>
                    //   this.props.deleteContact(this.props.single[0])
                    // }
                  >
                    <em className="fa-fw fas fa-share mr-2" />
                    <span>Share Cleaner</span>
                  </button>
                </div>
              </div>
            </div>
            {/* End of menu */}

            <div className="row">
              <div className="col-2"></div>
              <div className="col-8" style={{ alignItems: "center" }}>
                <div className="d-flex align-items-center mb-3">
                  <img
                    className="mr-3 rounded-circle thumb48"
                    src={this.props.single[0] && this.props.single[0].imageUrl}
                    alt="Contact"
                    id="modalProfilePhoto"
                  />
                  <p className="m-0">
                    <a href>
                      <strong className="nameStrongModal">
                        {this.props.single[0] && this.props.single[0].name}
                      </strong>
                    </a>
                    <br />
                    Email here
                  </p>
                </div>

                  <div className="row row-flush">
                    <div
                      className="col-6 d-md-block py-2 text-center br"
                      id="itemSeparator"
                    >
                      <div className="text-muted text-md">
                        <em className="fas fa-map-pin" />
                      </div>
                      <div className="text-sm" id="innerModalDetailsText">
                        {this.props.single[0] && this.props.single[0].city}
                      </div>
                      <div className="text-muted">CITY</div>
                    </div>
  
                    <div
                      className="col-6  d-md-block py-2 text-center br"
                      // id="itemSeparator2"
                    >
                      <div className="text-muted text-md">
                        <em className="fas fa-user-check" />
                      </div>
                      <div className=" text-sm" id="innerModalDetailsText">
                        {this.props.single[0] &&
                          this.props.single[0].yearsInOperation}
                      </div>
                      <div className="text-muted">YEARS</div>
                    </div>
               </div>

                <p>
                  {this.props.single[0] && this.props.single[0].description}
                </p>
              </div>
              <div className="col-2"></div>
            </div>
          </ModalBody>
          <ModalFooter>
            {/* Button does not work for now */}
            <Button color="dark" type="submit">
              Book Now
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default SingleCleanerView;
