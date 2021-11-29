import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let url = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(url).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [url]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center text-white">{name}</h1>
        <img className="img-fluid" src={image} alt="" />
        <div className="content">
          <div className="text-white">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div className="text-white">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div className="text-white">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="text-white">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
        {(() => {
          if (status === "Dead") {
            return <div className="badge purple-color fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className=" badge green-color fs-5">{status}</div>;
          } else {
            return <div className="badge black-color fs-5">{status}</div>;
          }
        })()}
      </div>
    </div>
  );
};

export default CardDetails;
