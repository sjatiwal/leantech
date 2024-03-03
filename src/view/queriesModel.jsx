import React, { useState, useEffect } from "react";

//import icon
import { ReactComponent as Asterisk } from "../icon/asterisk.svg";

// import data from authContext
import { useData } from "../helper/authContext";

const QueriesModel = ({
  setEdit,
  setEditText,
  setClickedIcon,
  setSubmitted,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [textValue, setTextValue] = useState("");
  const [disable, setDisable] = useState(true);
  const { loggedIn } = useData();

  useEffect(() => {
    // keep the submit button disable until all input are filled
    if (!loggedIn) {
      if (textValue !== "" && email !== "" && name !== "") {
        setDisable(false);
      }
    } else {
      if (textValue !== "") {
        setDisable(false);
      }
    }
  }, [loggedIn, textValue, email, name]);

  const handleSubmit = () => {
    setSubmitted("queriesSubmitted");
    setEdit(false);
    setEditText(false);
    setClickedIcon("");
    setTimeout(() => {
      setSubmitted("");
    }, 5000);
  };
  return (
    <div
      className={`flex justify-center ${
        !loggedIn
          ? "h-[662px] max-[360px]:h-[602px]"
          : "h-[476px] max-[360px]:h-[431px]"
      } w-[430px] rounded-[8px] px-[16px] py-[24px] bg-[#F8F8F8] max-[360px]:w-[360px] max-[360px]:rounded-t-[20px] max-[360px]:rounded-b-[0px]`}
    >
      <div>
        <div className="font-[600] font-[poppins] text-[20px] leading-[24px] text-center px-[24px] w-[398px] pb-[24px] border-b-[2px] border-[#CCCCCC] max-[360px]:w-[336px] max-[360px]:text-[18px] max-[360px]:leading-[22px] max-[360px]:pb-[16px]">
          Let us know what your queries are!
        </div>
        <div>
          <div className="mt-[24px]">
            <div className="flex font-[poppins] font-[500] text-[18px] leading-[18px] text-[#4D4D4D] max-[360px]:text-[16px] max-[360px]:leading-[16px]">
              <div className="mr-[2px]">Your Name</div>
              {!loggedIn && <Asterisk />}
            </div>
            <input
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="font-[poppins] font-[500] text-[18px] leading-[18px] text-[#808080] bg-[#E0E0E0] border-[1px] border-[#CCCCCC] px-[16px] py-[12px] h-[42px] w-[398px] rounded-[8px] mt-[12px] mb-[6px] focus:outline-none max-[360px]:w-[336px] max-[360px]:h-[36px] max-[360px]:text-[16px] max-[360px]:leading-[16px]"
            />
          </div>
          {!loggedIn && (
            <>
              <div className="mt-[24px]">
                <div className="flex font-[poppins] font-[500] text-[18px] leading-[18px] text-[#4D4D4D] max-[360px]:text-[16px] max-[360px]:leading-[16px]">
                  <div className="mr-[2px]">Your Email</div>
                  {!loggedIn && <Asterisk />}
                </div>
                <input
                  placeholder="Enter your Eamil"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="font-[poppins] font-[500] text-[18px] leading-[18px] text-[#808080] bg-[#E0E0E0] border-[1px] border-[#CCCCCC] px-[16px] py-[12px] h-[42px] w-[398px] rounded-[8px] mt-[12px] mb-[6px] focus:outline-none max-[360px]:w-[336px]  max-[360px]:h-[36px] max-[360px]:text-[16px] max-[360px]:leading-[16px]"
                />
              </div>
              <div className="mt-[24px]">
                <div className="font-[poppins] font-[500] text-[18px] leading-[18px] text-[#4D4D4D] max-[360px]:text-[16px] max-[360px]:leading-[16px]">
                  Your Mobile Number
                </div>
                <input
                  placeholder="Enter your Name"
                  value={mobileNo}
                  type="number"
                  onChange={(e) => setMobileNo(e.target.value)}
                  className="font-[poppins] font-[500] text-[18px] leading-[18px] text-[#808080] bg-[#E0E0E0] border-[1px] border-[#CCCCCC] px-[16px] py-[12px] h-[42px] w-[398px] rounded-[8px] mt-[12px] mb-[6px] focus:outline-none max-[360px]:w-[336px]  max-[360px]:h-[36px] max-[360px]:text-[16px] max-[360px]:leading-[16px]"
                />
              </div>
            </>
          )}
          <div className="mt-[24px]">
            <div className="flex font-[poppins] font-[500] text-[18px] leading-[18px] text-[#4D4D4D] max-[360px]:text-[16px] max-[360px]:leading-[16px]">
              <div className="mr-[2px] max-[360px]:text-[16px] max-[360px]:leading-[16px]">
                What would you like to ask?
              </div>
              <Asterisk />
            </div>
            <textarea
              rows={5}
              placeholder="Write here..."
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              className="bg-[#E0E0E0] rounded-[8px] border-[1px] border-[#CCCCCC] px-[16px] py-[12px] font-[poppins] font-[500] text-[18px] leading-[18px] text-[#4D4D4D] w-[398px] mt-[12px] focus:outline-none max-[360px]:w-[336px]  max-[360px]:text-[16px] max-[360px]:leading-[16px]"
            />
          </div>
        </div>
        <div className="float-right mt-[32px]">
          <button
            className={`text-[#F8F8F8] font-[poppins] font-[600] text-[20px] leading-[20px] px-[20px] py-[10px] ${
              !loggedIn
                ? textValue !== "" && name !== "" && email !== ""
                  ? "opacity-[100%]"
                  : "opacity-[60%]"
                : textValue !== "" && name !== ""
                ? "opacity-[100%]"
                : "opacity-[60%]"
            } bg-[#0F0F0F] rounded-[4px] max-[360px]:text-[18px] max-[360px]:leading-[18px]`}
            onClick={handleSubmit}
            disabled={disable}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueriesModel;
