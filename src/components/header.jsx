import React from "react";
import { ReactComponent as DownArrow } from "../icon/downArrow.svg";
import { ReactComponent as Profile } from "../icon/profile.svg";

const Header = () => {
  return (
    <div className="flex items-center h-[122px] bg-[#0F0F0F] py-[10px] px-[16px] max-[360px]:h-[60px] max-[360px]:p-[5px] max-[360px]:bg-[#2A2A2A] ">
      <div className="flex items-center justify-between leading-[15.14px] tracking-[2.05px] h-[61px] px-[23px] w-full max-[360px]:h-[30px] max-[360px]:px-[10px]">
        <div className="flex gap-[8px] items-center w-[406px] h-[49px] max-[360px]:w-[100px] max-[360px]:h-[29px]">
          <div className="font-[600] font-[montserrat] h-[16px] w-[56px] text-center text-[#F8F8F8] text-[24.6px] max-[360px]:w-[20px] max-[360px]:text-[10px] ">
            THE
          </div>
          <div className="bg-[#F8F8F8] h-[29.32px] px-[6.66px] py-[4px] flex items-center  gap-[5.12px] max-[360px]:h-[15px] max-[360px]:px-[4px] ">
            <div className=" flex font-[600] w-[141px] h-[16px] font-[montserrat] text-[24.6px] text-[#0F0F0F] text-center max-[360px]:w-[64px] max-[360px]:text-[10px] max-[360px]:h-[15px] max-[360px]:items-center">
              PRODUCT
            </div>
          </div>
          <div className="font-[600] font-[montserrat] text-center text-[#F8F8F8] text-[24.6px] h-[16px] max-[360px]:w-[20px] max-[360px]:text-[10px]">
            PLATFORM
          </div>
        </div>
        <div className="flex h-[61px] w-[355.26px] leading-[29.6px] items-center max-[360px]:w-[20px] ">
          <div className="flex px-[20px] py-[16px] gap-[10px] items-center max-[360px]:hidden">
            <div className="font-[inter] font-[600] text-[#FEFEFE] opacity-50 text-[24px] ">
              Learn
            </div>
            <div className="w-[16px] h-[8px]">
              <DownArrow />
            </div>
          </div>
          <div className="flex px-[20px] py-[16px] gap-[10px] items-center max-[360px]:hidden">
            <div className="font-[inter] font-[600] text-[#FEFEFE] opacity-50 text-[24px]">
              Practice
            </div>
            <div>
              <DownArrow />
            </div>
          </div>
          <div>
            <Profile className="max-[360px]:w-[30px] max-[360px]:h-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
