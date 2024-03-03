import React from "react";

//import icons
import { ReactComponent as Info } from "../icon/info.svg";
import { ReactComponent as StartUp } from "../icon/startUp.svg";
import { ReactComponent as Views } from "../icon/views.svg";

const Question = () => {
  return (
    <div className="flex justify-center mt-[80px] gap-[24px]">
      <div className="bg-[#F8F8F8] w-[832px] h-[351px] rounded-[6px] border-[0.4px] border-[#717171] px-[32px] py-[16px] gap-[16px] ">
        <div className="w-[778px] h-[70px] flex justify-between">
          <div className="w-[261px] h-[40px] flex gap-[18px]">
            <div>
              <button className="w-[99px] rounded-[6px] px-[16px] py-[8px] gap-[10px] bg-[#A9D9FF] font-[500] font-[inter] text-[20px] leading-[24.2px] text-[#2A2A2A]">
                Design
              </button>
            </div>
            <div>
              <button className="w-[144px] rounded-[6px] px-[16px] py-[8px] gap-[10px] bg-[#A9D9FF] font-[500] font-[inter] text-[20px] leading-[24.2px] text-[#2A2A2A]">
                Technology
              </button>
            </div>
          </div>
          <div>
            <div className="ml-[10px]">
              <StartUp />
            </div>
            <div className="font-[500] font-[poppins] text-[18px] leading-[27px] text-[#171717]">
              StartUp
            </div>
          </div>
        </div>
        <div className="mt-[8px] w-[778px]">
          <div className="font-[500] font-[poppins] text-[20px] leading-[30px] py-[1px] text-[#0F0F0F]">
            A travel startup wants Amazon to pre-install their personal travel
            agent bot on existing Amazon Echos. What is the value of the
            partnership to the travel startup?
          </div>
          <div className="font-[400] font-[poppins] text-[18px] leading-[27px] text-[#0F0F0F] mt-[8px]">
            Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
            viverra tincidunt ? Amet ullamcorper velit tristique scelerisque
            donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices
            magna cursus se?
          </div>
        </div>
        <div className="w-[778px] mt-[8px] flex justify-between">
          <div className="flex items-center">
            <div>
              <Views />
            </div>
            <div className="font-[500] font-[poppins] text-[16px] leading-[24px] text-[#2A2A2A] ml-[10px]">
              100 Views
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <Info />
            </div>
            <div className="font-[500] font-[poppins] text-[16px] leading-[24px] text-[#2A2A2A] ">
              How should you word your answer?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
