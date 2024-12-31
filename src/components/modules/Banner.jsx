import React from "react";
import bannerImage from "../../assets/bannercoin.png";
import { VscTriangleRight } from "react-icons/vsc";

function Banner() {
  return (
    <div className="h-110 mt-20 flex items-center justify-between">
      <div>
        <h1 className="font-serif text-5xl font-bold mb-8 w-4/6 leading-normal">
          Best place buy and sell{" "}
          <span className="text-bluePrimary">crypto currency</span> asset
        </h1>
        <p className="text-gray-300 text-lg w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          accusamus optio alias molestiae, quia facere fugiat inventore nostrum
          quidem accusantium repellendus cumque qui. Suscipit culpa corrupti,
          placeat obcaecati ea et.
        </p>
        <div className="mt-6 flex">
          <button
            className="w-36 bg-bluePrimary py-2.5 rounded-md mt-8 hover:transition hover:duration-200 ease-out hover:bg-blue-700"
            type="button"
          >
            Get started
          </button>
          <span className="flex items-center relative">
            <span className=" w-40 ml-10 py-2.5 pl-4 rounded-md mt-8 hover:transition duration-200 ease-out border border-bluePrimary cursor-pointer hover:text-bluePrimary">
              Watch Tutorial
            </span>
            <VscTriangleRight className="text-2xl absolute right-3 bottom-3 text-bluePrimary" />
          </span>
        </div>
      </div>
      <img className="h-80" src={bannerImage} alt="banner-logo" />
    </div>
  );
}

export default Banner;
