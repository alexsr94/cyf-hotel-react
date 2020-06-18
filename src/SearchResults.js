import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table className="table">
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>First Name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Room ID</th>
        <th>Check-in Date</th>
        <th>Check-out Date</th>
        <th>Days</th>
      </tr>
      {props.results.map(x => {
        return (
          <tr>
            <td>{x.id}</td>
            <td>{x.title}</td>
            <td>{x.firstName}</td>
            <td>{x.surname}</td>
            <td>{x.email}</td>
            <td>{x.roomId}</td>
            <td>{x.checkInDate}</td>
            <td>{x.checkOutDate}</td>
            <td>
              {moment(x.checkOutDate).diff(moment(x.checkInDate), "days")}
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default SearchResults;
