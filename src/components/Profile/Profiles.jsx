import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import ProfileContact from "./ProfileContact";

class Profiles extends React.Component {
  state = {
    profile: [
      {
        name: "Ofelia Hernandez",
        yearsInOperation: 1,
        HouseType: "House",
        Description: "Need home cleaned 3x weekly.",
        City: "Long Beach",
        userImage:
          "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        houseImage:
          "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
      ,
      {
        name: "Anita Smith",
        yearsInOperation: 8,
        HouseType: "House",
        Description: "Small home in need of cleaning 2x weekly.",
        City: "Downey",
        userImage:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        houseImage:
          "https://images.pexels.com/photos/139115/pexels-photo-139115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 no-repeat"
      },
      {
        name: "Harry Max",
        yearsInOperation: 2,
        HouseType: "Apartment",
        Description: "Need Laundry and beds done daily.",
        City: "Cerritos",
        userImage:
          "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
        houseImage:
        "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 no-repeat"
      }
    ],
    //Can do image loading thing once you connect to the backend.
    imageLoaded: false
  };

  contact = (aContact) => ( 
 <ProfileContact key={aContact} profile={aContact} />
  )

  render() {
    return (
      <React.Fragment>
        <div className="profileHeader">
          <em className="fa-1x mr-2 fas fa-search" id="searchProfiles"
                    // onClick={this.toggleAddQuestion}
                    style={{cursor: "pointer" }}
                    data-toggle="tooltip"
                    title="Search Homes"
                  >
                  </em>
          <h1>Home Owners</h1>
                  
        </div>
            {this.state.profile.map(this.contact)}
      </React.Fragment>
    );
  }
}

export default Profiles;
