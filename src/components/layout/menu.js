// const getMenu = role => {
const getMenu = () => {
    // let dashboard;
    // switch (role) {
    //   case "admin":
    //     dashboard = {
    //       name: "Dashboard",
    //       icon: "icon-home",
  
    //       path: "/dashboard/admin",
    //       roles: "admin"
    //     };
    //     break;
    //   case "Small Business":
    //     dashboard = {
    //       name: "Dashboard",
    //       icon: "icon-home",
  
    //       path: "/dashboard/smallbusiness",
    //       roles: "Small Business"
    //     };
    //     break;
    //   case "Government Official":
    //     dashboard = {
    //       name: "Dashboard",
    //       icon: "icon-home",
  
    //       path: "/dashboard/gov",
    //       roles: "Government Official"
    //     };
    //     break;
    //   default:
    //     dashboard = {};
    //     break;
    // }
  
    // let forum;
    // switch (role) {
    //   case "admin":
    //     forum = {
    //       name: "Forums",
    //       icon: "icon-bubble",
    //       path: "/admin/forums"
    //     };
    //     break;
    //   default:
    //     forum = {
    //       name: "Forums",
    //       icon: "icon-bubble",
    //       path: "/forums"
    //     };
    //     break;
    // }
  
    let menuArray = [
      {
        heading: "Main Menu"
      },
      {
        heading: "Sections"
      },
      {
        name: "Cleaners",
        icon: "fas fa-hand-sparkles",
        path: "/cleaners"
      },
      // {
      //   name: "Courses",
      //   icon: "icon-note",
      //   // path: "/courses"
      // },
      // {
      //   name: "Funding Opportunities",
      //   icon: "icon-grid",
      //   // path: "/funding"
      // },
      // {
      //   name: "Events",
      //   icon: "icon-location-pin",
      //   // path: "/events"
      // },
      // {
      //   name: "Venues",
      //   icon: "icon-map",
      //   // path: "/venues"
      // },
      // {
      //   heading: "More"
      // },
      // {
      //   name: "FAQs",
      //   icon: "icon-question",
      //   // path: "/faqs"
      // },
      // {
      //   name: "Resources",
      //   icon: "icon-notebook",
      //   // path: "/resources"
      // }
    ];
  
    // menuArray.splice(1, 0, dashboard);
    // menuArray.splice(5, 0, forum);
  
    // if (!currentUser.hasProfile) {
    //   menuArray = [
    //     {
    //       heading: "Main Navigation"
    //     }
    //   ];
    // }
  
    return menuArray;
  };
  
  export default getMenu;
  