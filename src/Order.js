import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [pizzas, setOrders] = useState(0);
  const addPizza = () => {
    setOrders(pizzas + 1);
  };
  return (
    <li key={props.orderType}>
      {props.orderType}: {pizzas} <RestaurantButton addPizza={addPizza} />
    </li>
  );
};
export default Order;
