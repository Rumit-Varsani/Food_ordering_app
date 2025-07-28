import { useEffect, useState } from "react";
import reshomepagemenu from "../mocks/reshomepagemenu.json";

const useRestroCard = () => {
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const cards = reshomepagemenu?.data?.cards || [];

    let restaurants = [];

    for (const card of cards) {
      const restList =
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (restList) {
        restaurants = restList;
        break;
      }
    }

    setData(restaurants);
    setFilteredResturant(restaurants);
  }, []);
  return {
    data,
    filteredResturant,
    setFilteredResturant,
  };
};

export default useRestroCard;
