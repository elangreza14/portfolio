import React from "react";
// import "./styles/Proggres.css";

const Progressbar = ({ color, value }) => {
  return (
    <div className="container-progres">
      <p className="text-progres">{value}%</p>
      <div className="container-custom">
        <div
          className={`progresbar-custom`}
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default Progressbar;
