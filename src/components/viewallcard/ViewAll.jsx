import React from "react";

const ViewAll = () => {
  return (
    <div className="md:mx-48">
      <div className="bg-cover   bg-[url('https://images.pexels.com/photos/7750100/pexels-photo-7750100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-96 bg-no-repeat w-[100%] rounded-md  flex my-12 items-center bg-opacity-">
        <div className="my-auto p-4 ml-8  rounded  ">
          <span className="text-white ">SPAALON</span>
          <h1 className="text-3xl text-white font-bold mt-2">
            More than 3000 Spas & Salons
          </h1>
          <p className="text-xl text-white font-bold ">
            Book an appointment now within seconds
          </p>
          <button className="bg-orange-600 rounded font-semibold text-white mt-4 py-1 px-4">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
