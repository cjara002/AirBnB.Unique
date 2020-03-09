import React from "react";
import "../../ReactComponents/Contacts/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";

const ProfileHome = props => {


  return (
      <React.Fragment>
             <div className="col-8 py-3 rounded-right" id="profileHouseContainer">
              <div>
                <img
                  src={props.profile && props.profile.houseImage}
                  alt=""
                  className="houseImage"
                />
              </div>
              <div className="houseDetialsInner">
                <span className="ProfileHouseDetails">
                  {" "}
                  <strong>House Type: </strong> {props.profile && props.profile.HouseType}
                </span>{" "}
                <br />
                <span className="ProfileHouseDetails">
                  <strong>Description: </strong> { props.profile && props.profile.Description}
                </span>{" "}
                <br />
                <span className="ProfileHouseDetails">
                  <strong>City: </strong> {props.profile && props.profile.City}
                </span>
                <em> </em>
              </div>
            </div>
      </React.Fragment>
  )  
}

export default ProfileHome;
