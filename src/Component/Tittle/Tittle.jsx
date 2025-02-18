import React from "react";
import "./Tittle.css";

const Tittle = ({ subtittle, tittle }) => {
  return (
    <div className="tittle">
      <p>{subtittle}</p>
      <h1>{tittle}</h1>
    </div>
  );
};

export default Tittle;
