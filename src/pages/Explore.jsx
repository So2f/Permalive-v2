import React from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

const Explore = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="text-center">
          <div className="font-dmmono text-white text-3xl pb-10">
            Nos Offres:
          </div>
          <div className="flex justify-center space-x-28">
            <div className="mx-4">
              <Card />
            </div>
            <div className="mx-4">
              <Card />
            </div>
            <div className="mx-4">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
