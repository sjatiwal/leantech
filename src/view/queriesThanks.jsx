import React from "react";

//import icon
import { ReactComponent as QueriesThanksBg } from "../icon/queriesThanks.svg";

const QueriesThanks = () => {
  return (
    <div className="absolute right-0 top-[-100px] max-[360px]:top-[-80px]">
      <div className="relative">
        <QueriesThanksBg className="max-[360px]:w-[280px] max-[360px]:h-[66px]" />
        <div className="absolute text-[#0F0F0F] font-[poppins] left-[8px] top-[11px] font-[600] text-[18px] leading-[27px] text-center max-[360px]:text-[12px] max-[360px]:leading-[18px] max-[360px]:top-[10px]">
          Thanks for reaching out to us! <br />
          We will get back to you as soon as possible
        </div>
      </div>
    </div>
  );
};

export default QueriesThanks;
