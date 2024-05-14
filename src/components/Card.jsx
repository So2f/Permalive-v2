import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import trash from "../../public/trash.png";

const Card = () => {
  return (
    <div className="w-[450px] card shadow-xl transform transition duration-300 hover:-translate-y-6 pt-2">
      <div className="text-white font-dmmono font-light text-2xl space-y-5">
        <div className="flex justify-between items-center px-8">
          <div className="">
            <Image src={logo} width={50} height={50} />
          </div>
          <div className="">
            <p className="text-sm font-bold">...</p>
          </div>
        </div>
        <div className="flex justify-evenly px-12">
          <Image src={trash} />
        </div>
        <div className="px-7 pb-4">
          <div className="flex justify-between font-dmmono">
            <div className="flex flex-col items-center space-y-3 ">
              <p className="text-base">Pet Blue</p>
              <p className="text-xl font-extralight">Section</p>
            </div>
            <div className="flex flex-col items-center space-y-3 ">
              <p className="text-base">volume</p>
              <p className="text-xl font-extralight">10 L</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <p className="text-base">price</p>
              <p className="text-xl font-extralight">1.3 Eth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
