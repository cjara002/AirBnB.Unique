import React from "react";
import Fade from "react-reveal/Fade";

const SingleCleanerProfile = (props) => {
  const { isProfileLoaded, pagCleaner } = props;
  return (
    <React.Fragment>
      {isProfileLoaded ? (
        <Fade top>
          <div className="col-sm-6 col-lg-4">
            <div className="card-default card" id="contactCardButtonArea">
              <div className="text-center card-body" id="contactCard">
                <div className="imageContainer">
                  <img
                    className="mb-2 rounded-circle-thumb32"
                    src={pagCleaner.imageUrl}
                    alt="Cleaner"
                    id="profilePhoto"
                  />
                </div>

                <h4>{pagCleaner.name}</h4>

                <h5 className="text-white"> {pagCleaner.city}</h5>
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
        </Fade>
      ) : (
        <Fade top>
          <div className="col-sm-6 col-lg-4">
            <div className="card-default card" id="contactCardButtonArea">
              <div className="text-center card-body" id="contactCard">
                <div className="imageContainer">
                  <img
                    className="mb-2 rounded-circle-thumb32"
                    src={`https://bit.ly/2qp36ol`}
                    alt="Cleaner"
                    id="profilePhoto"
                  />
                </div>

                <h4>...Name</h4>

                <h5 className="text-white"> ...City</h5>
              </div>
              <div className="d-flex card-footer">
                <button
                  type="button"
                  className="btn btn-dark btn-lg btn-block"
                  // onClick={() => props.triggershowModal(props.pagCleaner.id)}
                >
                  View Contact
                </button>
              </div>
            </div>
          </div>
        </Fade>
      )}
    </React.Fragment>
  );
};

export default SingleCleanerProfile;
