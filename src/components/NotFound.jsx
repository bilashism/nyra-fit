import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  let error = useRouteError();
  console.dir(error);
  return (
    <div className="text-center">
      <h2>Opps!!! Something went wrong.</h2>

      <div className="">{error?.message && error.message}</div>

      <p>
        <Link to="/">Go back to homepage</Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
