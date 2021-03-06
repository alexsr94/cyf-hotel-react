import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me.").then(res => {
      res.json().then(datos => {
        setData(datos);
      });
    });
  });

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={data} />
      </div>
    </div>
  );
};

export default Bookings;
