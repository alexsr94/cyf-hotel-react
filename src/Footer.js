import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.lista.map((x, index) => {
        return <li key={index}>{x}</li>;
      })}
    </ul>
  );
};

export default Footer;
