import React from "react";

//import icon
import { ReactComponent as ThanksBg } from "../icon/thanksbg.svg";

const ReportThanks = () => {
  return (
    <div className="absolute right-0 top-[-100px] max-[360px]:top-[-80px]">
      <div className="relative">
        <ThanksBg className="max-[360px]:w-[328px] max-[360px]:h-[66px]" />
        <div className="absolute text-[#0F0F0F] font-[poppins] font-[600] text-[18px] leading-[27px] top-[11px] left-[8px] text-center max-[360px]:text-[12px] max-[360px]:leading-[18px] max-[360px]:top-[10px]">
          Thanks for bringing the issue to our attention.
          <br />
          We'll review it shortly and provide an update soon!
        </div>
      </div>
    </div>
  );
};

export default ReportThanks;
