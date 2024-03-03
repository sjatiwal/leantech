import React from "react";

//import icon
import { ReactComponent as Sort } from "../icon/sort.svg";
import { ReactComponent as StartUp } from "../icon/startUp.svg";

// import data from authContext
import { useData } from "../helper/authContext";

const MobileView = () => {
  const { clickOpacity } = useData();
  const data = [
    { name: "Popular" },
    { name: "Complexity" },
    { name: "Industry Type" },
    { name: "Industry" },
    { name: "Company Type" },
  ];
  return (
    <div
      className={`min-[360px]:hidden  text-white p-[10px] ${
        clickOpacity && "opacity-[20%]"
      }`}
    >
      <div className="text-[#D9D9D9] text-[25px] font-[600]">
        Practice Interview Questions
      </div>
      <div className="flex justify-between items-end">
        <div className="text-[#D9D9D9] text-[14px]">
          Emabark on an Exploraton: <br />
          800 questions Awaits!
        </div>
        <div>
          <button className="bg-[#D9D9D9] text-[#2A2A2A] px-[5px] py-[3px] rounded-[6px]">
            FILTERS
          </button>
        </div>
      </div>
      <div className="mt-[10px]">
        {data.map((item) => {
          return (
            <div key={item.name} className="relative mt-[2px]">
              <div className="flex justify-center items-center bg-[#D9D9D9] text-[#2A2A2A] font-[500] h-[40px] w-full">
                {item.name}
              </div>
              <div className="absolute right-2 top-4">
                <Sort />
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full my-[10px] border-[1px] border-[##D9D9D9]"></div>
      <div className="bg-[#F8F8F8] px-[10px] py-[5px] rounded-[8px]">
        <div className="flex justify-between items-center">
          <div className="text-[#0F0F0F] text-[10px]">
            Posted on 28 Jun 2023
          </div>
          <div className="flex items-center">
            <StartUp className="w-[25px] h-[25px]" />
            <div className="text-[#0F0F0F] text-[10px] ml-[2px]">Startup</div>
          </div>
        </div>
        <div className="font-[400] font-[poppins] text-[18px] leading-[30px]  text-[#0F0F0F]">
          A travel startup wants Amazon to pre-install their personal travel
          agent bot on existing Amazon Echos. What is the value of the
          partnership to the travel startup?
        </div>
        <div className="flex justify-between">
          <div>
            <button className="bg-[#DBEFFF] text-[#2A2A2A] px-[10px] rounded-[5px]">
              Design
            </button>
            <button className="bg-[#DBEFFF] ml-[4px] text-[#2A2A2A] px-[10px] rounded-[5px]">
              UX
            </button>
          </div>
          <div>
            <button className="bg-[#98FD75] text-[#2A2A2A] px-[10px] rounded-[5px]">
              Easy
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-[#98FD75]">23 Answer</div>
          <div>
            <div className="text-[#2A2A2A]">100 Views</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
