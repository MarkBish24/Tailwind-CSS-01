import React from "react";
import {
  BsPersonCheckFill,
  BsPersonFillAdd,
  BsFillPeopleFill,
} from "react-icons/bs";

export default function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <BsPersonCheckFill className="text-6xl text-[#00df9a] mb-4 mt-[-3rem] bg-white p-2 rounded-full shadow-md mx-auto" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB of Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}
