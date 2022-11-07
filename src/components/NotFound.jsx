import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h2>Opps!!! Something went wrong.</h2>
      <p>
        <Link to="/">Go back to homepage</Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
