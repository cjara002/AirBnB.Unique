import React from "react";

const SingleCleanerProfile = props => {
    return (
        <React.Fragment>
              <div className="col-sm-6 col-lg-4">
                <div className="card-default card" id="contactMenu">
                 
                  {/* Start of Card */}

                  <div className="text-center card-body" id="contactCard">
                    <img
                      className=" mb-2 rounded-circle-thumb32"
                      src={props.pagCleaner.imageUrl}
                      alt="Contact"
                      id="profilePhoto"
                    />
                    <h4>{props.pagCleaner.name}</h4>
                    <h5 className="text-white">  {props.pagCleaner.city}</h5>
                    {/* <p>{profile.description}</p>
                    <span>Years in operation: {profile.yearsInOperation}</span> */}
                  </div>
                  <div className="d-flex card-footer">
                    <button
                      type="button"
                      className="btn btn-dark btn-lg btn-block"
                      onClick={() => props.triggershowModal(props.pagCleaner.id)}
                    >
                      View Contact
                    </button>
                  </div>
                </div>
              </div>
        </React.Fragment>
    )
}

export default SingleCleanerProfile;