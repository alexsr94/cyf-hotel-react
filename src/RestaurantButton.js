import React, { useState } from "react";
import Restaurant from "./Restaurant";

function RestaurantButton(props) {
  return (
    <button onClick={props.addPizza} className="btn btn-primary">
      Add
    </button>
  );
}

export default RestaurantButton;
