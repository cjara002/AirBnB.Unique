import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
// import ProfileContact from "./ProfileContact";
import { connect } from "react-redux";

class Contact extends React.Component {
  state = {
    //Can do image loading thing once you connect to the backend.
    imageLoaded: false,
    optionsOpen: false
  };

  //   contact = (aContact) => (
  //  <ProfileContact key={aContact} profile={aContact} />
  //   )

  showMenu = () => {
    //Need to find a way to only open one menu at a time. Not all.
    this.setState(prevState => ({
      optionsOpen: !prevState.optionsOpen
    }));
  };

  // componentDidMount (){
  //   this.setMenu();
  // }

  // setMenu = () => {
  //   //Need to find a way to only open one menu at a time. Not all.
  //   const menu = ["Open", "Close"]
  //   this.setState(() => ({
  //     optionsOpen: menu.map(menuType => ({
  //       // menuType,
  //       isActive: false
  //     }))
  //   }))
  // }

  // activeMenu = item => {
  // this.setState(menu => ({
  //   optionsOpen: menu.optionsOpen.map(activeItem => {
  //     if(activeItem.menuType === item){
  //       activeItem.isActive = !activeItem.isActive
  //     }
  //     return activeItem;
  //   })
  // }))
  // }

  render() {
    return (
      <React.Fragment>
        <div className="content-wrapper">
          <div className="content-heading">
            Cleaners
            <div className="ml-auto">
              <em
                className="fa-1x mr-2 fas fa-search"
                id="searchProfiles"
                // onClick={this.toggleAddQuestion}
                style={{ cursor: "pointer" }}
                data-toggle="tooltip"
                title="Search Cleaners"
              ></em>
              <em
                className="fa-1x mr-2 fas fa-user-plus"
                // onClick={this.toggleAddQuestion}
                style={{ cursor: "pointer" }}
                data-toggle="tooltip"
                title="Add Cleaner"
              ></em>
            </div>
          </div>
          {/* End of heading  */}

          {/*Menu to add, delte, share cleaner */}
          <div className="row">
            {this.props &&
              this.props.cleaners.map(profile => (
                <div className="col-sm-6 col-lg-4" key={profile.id}>
                  <div className="card-default card">
                    <div className="ml-auto">
                      <div className="dropdown">
                        <button
                          type="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                          className="btn btn-outline-secondary"
                          onClick={this.showMenu}
                          // onClick={this.activeMenu}
                        >
                          <em className="fa fa-ellipsis-h fa-lg" />
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
                        >
                          <button
                            type="button"
                            tabIndex={0}
                            className="dropdown-item"
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
                            className="dropdown-item"
                          >
                            <em className="fa-fw fas fa-minus mr-2" />
                            <span>Delete contact</span>
                          </button>
                          <button
                            type="button"
                            tabIndex={0}
                            className="dropdown-item"
                          >
                            <em className="fa-fw fas fa-share mr-2" />
                            <span>Share contact</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* End of Menu */}

                    {/* Start of Card */}

                    <div className="text-center card-body">
                      <img
                        className=" mb-2 rounded-circle-thumb32"
                        src={profile.userImage}
                        alt="Contact"
                        id="profilePhoto"
                      />
                      <h4>{profile.name}</h4>
                      <h5 className="text-muted">{profile.City}</h5>
                      {/* <p>{profile.Description}</p> */}
                      <span>
                        Years in operation: {profile.yearsInOperation}
                      </span>
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
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {
    cleaners: store.profiles
  };
}

export default connect(mapStateToProps)(Contact);
