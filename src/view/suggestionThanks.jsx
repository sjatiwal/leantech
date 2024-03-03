import React from "react";

//import icon
import { ReactComponent as SuggestionThanksBg } from "../icon/suggestionThanks.svg";

const SuggestionThanks = () => {
  return (
    <div className="absolute right-0 top-[-60px] max-[360px]:top-[-50px]">
      <div className="relative">
        <SuggestionThanksBg className="max-[360px]:w-[244px] max-[360px]:h-[42px]" />
        <div className="absolute text-[#0F0F0F] font-[poppins] left-[8px] font-[600] text-[18px] leading-[18px] top-[15px] text-center max-[360px]:text-[12px] max-[360px]:leading-[12px] max-[360px]:top-[12px]">
          Thanks for your valuable Suggestion!
        </div>
      </div>
    </div>
  );
};

export default SuggestionThanks;
