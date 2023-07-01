import React from "react";

function NotFound() {
  return (
    <React.Fragment>
      <div className="container my-40  w-full relative sm:left-36">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-7xl font-semibold text-blue-500">404</h2>
          <p>Oopps Your Destination Is Missing In Path...</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
