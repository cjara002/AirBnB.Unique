import { createStore } from "redux";

function reducer(store, action) {
  if (!store) {
    return {
      profiles: [
        {
          id: 1,
          name: "Ofelia Hernandez",
          yearsInOperation: 1,
          HouseType: "House",
          Description:
            "Provide eco-friendly solutions to your cleaning problems.",
          City: "Long Beach",
          userImage:
            "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          houseImage:
            "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          id: 2,
          name: "Anita Smith",
          yearsInOperation: 8,
          HouseType: "House",
          Description: "Fast and reliant service all year long.",
          City: "Downey",
          userImage:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          houseImage:
            "https://images.pexels.com/photos/139115/pexels-photo-139115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 no-repeat"
        },
        {
          id: 3,
          name: "Harry Max",
          yearsInOperation: 2,
          HouseType: "Apartment",
          Description: "I am ok at cleaing.",
          City: "Cerritos",
          userImage:
            "https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg",
          houseImage:
            "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 no-repeat"
        },
        {
          id: 4,
          name: "Jo Kondo",
          yearsInOperation: 2,
          HouseType: "Apartment",
          Description: "Let me help you become a super star host.",
          City: "Torrance",
          userImage:
            "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          houseImage:
            "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 no-repeat"
        },
        {
          id: 5,
          name: "Red Dragon",
          yearsInOperation: 2,
          HouseType: "Apartment",
          Description: "Will leave your place smoking clean.",
          City: "Torrance",
          userImage:
            "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          houseImage:
            "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 no-repeat"
        }
      ]
    };
  }
}

export default createStore(reducer);
