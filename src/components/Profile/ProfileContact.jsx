import React from "react";
import "../../ReactComponents/Contacts/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import ProfileHome from "./ProfileHome";

class ProfileContact extends React.Component {

home = (ahome) => (
<ProfileHome key={ahome} profile={ahome} />
)
       
render() {
  return (
      <React.Fragment>
<div style={{padding: "5px"}}>
  <div className="col-9">
               <div
                className="card flex-row align-items-stretch border-0"
                style={{ background: "black" }}
              >
     <div className="col-4 d-flex bg-primary-dark justify-content-center rounded-left"
                id="profileContainer">
                  <div>
                    <section className="photoFloated">
                      <img
                        id="clientPhoto"
                        className={"img-thumbnail rounded-circle"}
                        src={ this.props.profile && this.props.profile.userImage}
                        alt="Client"
                      />
                    </section>
                  </div>
                  
                  <div className="profileCaption">
                    <p className="profileP">
                      {" "}
                      <strong> Name: </strong> { this.props.profile && this.props.profile.name}{" "}
                    </p>
                    <p className="profileP">
                      {" "}
                      <strong>Years in Business: </strong> {this.props.profile && this.props.profile.yearsInOperation}
                    </p>
                  </div>
  
                </div>

                {[this.props.profile].map(this.home)}
  
    </div>
  </div>
</div>
      </React.Fragment>
  )  
}
}

export default ProfileContact;
