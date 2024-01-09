import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
  

  // Body Component for body section: It contain all restaurant cards
  // We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
  const Body = () => {
    const [listOfResaurants,setListOfResaurant] = useState(restaurantList);
    const [filteredResaurant,setFilteredRestaurant] = useState(restaurantList);

    const [searchText, setSearchText] = useState("");

   useEffect(() => {
    fetchData();
   },[]);

   const fetchData = async() => {
    const data = await fetch(
      "https://corsproxy.org/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1445007&lng=75.8638941&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_L ISTING"
    );
    const json = await data.json();


    // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    // setListOfResaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };
   

    // conditional rendering
   if(listOfResaurants.length === 0){
    return <Shimmer />;
   }

  //   let listOfResaurants = [
  //     {
  //         data: {
  //           id: "410474",
  //           name: "The Brooklyn Creamery",
  //           uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
  //           city: "21",
  //           area: "althan bhatar",
  //           totalRatingsString: "100+ ratings",
  //           cloudinaryImageId: "ldtibwymvzehvmdwl8la",
  //           cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
  //           costForTwoString: "₹200 FOR TWO",
  //           deliveryTime: 31,
  //           minDeliveryTime: 30,
  //           maxDeliveryTime: 40,
  //           lastMileTravelString: "6.3 kms",
  //           hasSurge: false,
  //           promoted: false,
  //           avgRating: "4.4",
           
  //         },
  //         subtype: "basic",
  //       },
  //       {
  //         data: {
  //           id: "410476",
  //           name: "The Brooklyn Creamery - Healthy Ice Cream",
  //           uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
  //           city: "21",
  //           area: "althan bhatar",
  //           totalRatingsString: "100+ ratings",
  //           cloudinaryImageId: "ldtibwymvzehvmdwl8la",
  //           cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
  //           costForTwoString: "₹200 FOR TWO",
  //           deliveryTime: 31,
  //           minDeliveryTime: 30,
  //           maxDeliveryTime: 40,
  //           lastMileTravelString: "6.3 kms",
  //           hasSurge: false,
  //           promoted: false,
  //           avgRating: "3.4",
           
  //         },
  //         subtype: "basic",
  //       },
  //       {
  //         data: {
  //           id: "410478",
  //           name: "\Healthy Ice Cream",
  //           uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
  //           city: "21",
  //           area: "althan bhatar",
  //           totalRatingsString: "100+ ratings",
  //           cloudinaryImageId: "ldtibwymvzehvmdwl8la",
  //           cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
  //           costForTwoString: "₹200 FOR TWO",
  //           deliveryTime: 31,
  //           minDeliveryTime: 30,
  //           maxDeliveryTime: 40,
  //           lastMileTravelString: "6.3 kms",
  //           hasSurge: false,
  //           promoted: false,
  //           avgRating: "4.4",
           
  //         },
  //         subtype: "basic",
  //       },
  // ];
    return (
      <div className="body">
       <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText}
           onChange={(e) => {
            setSearchText(e.target.value);
           }} />
          <button className="search-box" onClick={() => {
             console.log(searchText);

             const filteredResaurant =listOfResaurants.filter(
              (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())); 

              setFilteredRestaurant(filteredResaurant);
          }}
          
          >Search</button>
        </div>
            <button className="filter-btn" onClick={() =>{
              const filteredList = listOfResaurants.filter(
                (res) => res.data.avgRating>4
              );
              setListOfResaurant(filteredList);
             }}>Top Rated Restaurant </button> 
       </div> 
      
      <div className="restaurant-list">
        {filteredResaurant.map((restaurant) => (
          <Link key={restaurant.data.id} to={"/restaurants/" + restaurant.data.id} style={{textDecoration : 'none'}}><RestaurantCard {...restaurant.data} /></Link>
        ))}
         {/* {listOfResaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })} */}
      </div>
    </div> 
    );
  };


  export default Body;