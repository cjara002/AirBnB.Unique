import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
// import ProfileContact from "./ProfileContact";
import ContactHeading from "./ContactHeading";
import ContactCleaners from "./ContactCleaners";

class Contact extends React.Component {
  state = {
    //Can do image loading thing once you connect to the backend.
    imageLoaded: false,
  };

  //   contact = (aContact) => (
  //  <ProfileContact key={aContact} profile={aContact} />
  //   )

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
          <ContactHeading />
          {/* <div className="row"> */}
            <ContactCleaners />
          {/* </div> */}
        </div>
      </React.Fragment>
    );
  }
}


export default Contact;
