import React from "react";
import { Link } from "react-router-dom";

const NoFound = () => {
  return (
    <>
      <Link to="/">
        <div className="d-flex justify-content-center">
          <button className="btn btn-success m-5"> ESTA RUTA NO EXISTE </button>
        </div>
      </Link>
    </>
  );
};

export default NoFound;
