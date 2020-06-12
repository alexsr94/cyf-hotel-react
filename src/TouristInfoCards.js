import React from "react";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card">
        <img
          src="https://www.hola.com/imagenes/viajes/20180222120721/glasgow-escocia-reino-unido/0-544-57/Buchanan-Street-glasgow-t.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Visit Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://diario16.com/wp-content/uploads/2019/04/Manchester.pg_.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Visit Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://lp-cms-production.imgix.net/2019-06/55425108.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitlondon.com" className="btn btn-primary">
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
