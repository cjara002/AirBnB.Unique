import React from "react";
import { connect } from "react-redux";

class ContactCleaners extends React.Component {
  state = {
    optionsOpen: false
  };

  showMenu = () => {
    //Need to find a way to only open one menu at a time. Not all.
    this.setState(prevState => ({
      optionsOpen: !prevState.optionsOpen
    }));
  };

  render() {
    return (
      <React.Fragment>
          <div className="row"> 
        {this.props &&
          this.props.cleaners.map(profile => (
           <div className="col-sm-6 col-lg-4" key={profile.id}>
              <div className="card-default card" id="contactMenu">
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
                      <em className="fa fa-ellipsis-h fa-lg" id="toggleButton"/>
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
                        transform: "translate3d(-106px, 31px, 0px)"
                      }}
                      data-placement="bottom-start"
                      id="subMenu"
                    >
                      <button
                        type="button"
                        tabIndex={0}
                        className="dropdown-item" id="subMenuIcon"
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
                      </button> */}

                      <button
                        type="button"
                        tabIndex={0}
                        className="dropdown-item" id="subMenuIcon"
                      >
                        <em className="fa-fw fas fa-minus mr-2" />
                        <span>Delete contact</span>
                      </button>
                      <button
                        type="button"
                        tabIndex={0}
                        className="dropdown-item" id="subMenuIcon"
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
                    src={profile.userImage}
                    alt="Contact"
                    id="profilePhoto"
                  />
                  <h4>{profile.name}</h4>
                  <h5> City: {profile.City}</h5>
                  {/* <p>{profile.Description}</p> */}
                  <span>Years in operation: {profile.yearsInOperation}</span>
                </div>
                <div className="d-flex card-footer">
                  {/* <div> */}
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-lg btn-block"
                  >
                    View Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
      </React.Fragment>
    );
  }
}

function mapStateToPros(store) {
  return {
    cleaners: store.profiles
  };
}

export default connect(mapStateToPros)(ContactCleaners);
