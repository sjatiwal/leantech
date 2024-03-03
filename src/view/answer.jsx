import React from "react";
//import icon
import { ReactComponent as Sort } from "../icon/sort.svg";

const Answer = () => {
  return (
    <div className="flex justify-center h-[43px] mt-[24px]">
      <div className="w-[832px] flex justify-between">
        <div className="font-[poppins] font-[700] text-[24px] leading-[36px] text-[#F8F8F8] w-[163px]">
          Answers (23)
        </div>
        <div className="flex items-center">
          <div className="font-[inter] font-[500] text-[18px] leading-[22px] text-[#F8F8F8]">
            Sort By:
          </div>
          <div className="flex bg-[#F8F8F8] px-[16px] py-[8px] rounded-[6px] w-[128px] items-center justify-between ml-[10px]">
            <button className="font-[poppins] font-[500] text-[18px] leading-[27px] text-[#2A2A2A]">
              Popular
            </button>
            <Sort />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
