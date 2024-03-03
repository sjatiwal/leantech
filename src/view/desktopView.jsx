import React from "react";
//import icon
import { ReactComponent as BackArrow } from "../icon/backArrow.svg";

// import components
import Answer from "./answer";
import Question from "./question";
import User from "./user";

const DesktopView = () => {
  return (
    <div className="h-screen overflow-scroll max-[360px]:hidden">
      <div className="flex w-full h-[48px] ml-[67px] pt-[40px]">
        <div>
          <BackArrow />
        </div>
        <div className=" text-[24px] font-[500] font-[poppins] leading-[38px] text-[#F8F8F8] w-[217px] h-[36px] ml-[28px]">
          Back to Questions
        </div>
      </div>
      <Question />
      <Answer />
      <User />
    </div>
  );
};

export default DesktopView;
