import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

import Bookings from "./Bookings";
import "./App.css";
let props = {
  lista: [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ]
};

const App = () => {
  return (
    <div className="App">
      <Heading />

      <Bookings />
      <Restaurant />
      <TouristInfoCards className="card" />
      <Footer className="footer" lista={props.lista} />
    </div>
  );
};

export default App;
