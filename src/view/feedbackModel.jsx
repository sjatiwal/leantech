import React, { useState, useRef, useEffect } from "react";

//import icon
import { ReactComponent as Attach } from "../icon/attach.svg";
import { ReactComponent as Asterisk } from "../icon/asterisk.svg";

// to get data from authContext
import { useData } from "../helper/authContext";

const FeedbackModel = ({
  setEdit,
  setEditText,
  setClickedIcon,
  setSubmitted,
}) => {
  const [textValue, setTextValue] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [email, setEmail] = useState("");
  const [disable, setDisable] = useState(true);
  const fileInputRef = useRef(null);
  const { loggedIn } = useData();

  useEffect(() => {
    // keep the submit button disable until all input are filled
    if (!loggedIn) {
      if (textValue !== "" && email !== "") {
        setDisable(false);
      }
    } else {
      if (textValue !== "") {
        setDisable(false);
      }
    }
  }, [loggedIn, textValue, email]);

  //to upload file
  const handleAttachButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const files = event.target.files;
    const newSelectedImages = [...selectedImages];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newSelectedImages.push(file);
    }

    setSelectedImages(newSelectedImages);
  };

  // handle submit button
  const handleSubmit = () => {
    setSubmitted("suggestionSubmitted");
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
        loggedIn
          ? "h-[448px] max-[360px]:h-[418px]"
          : "h-[500px] max-[360px]:h-[466px]"
      } w-[430px] rounded-[8px] px-[16px] py-[24px] bg-[#F8F8F8] max-[360px]:w-[360px] max-[360px]:px-[12px] max-[360px]:rounded-t-[20px] max-[360px]:rounded-b-[0px]`}
    >
      <div>
        <div className="w-[398px] border-b-[2px] border-[#CCCCCC] text-center font-[poppins] font-[600] text-[20px] leading-[24px] pb-[24px] max-[360px]:text-[18px] max-[360px]:leading-[22px] max-[360px]:pb-[16px] max-[360px]:w-[336px]">
          Let us know your Feedback <br /> about us!
        </div>
        <div className="mt-[32px]">
          <div className="mt-[12px] relative">
            <textarea
              placeholder="Write here..."
              rows={9}
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              className="bg-[#E0E0E0] w-[398px] h-[180px] rounded-[8px] border-[1px] border-[#CCCCCC] px-[16px] py-[8px] leading-[18px] font-[poppins] font-[500] text-[18px] text-[#808080] focus:outline-none max-[360px]:text-[16px] max-[360px]:leading-[16px] max-[360px]:w-[336px]"
            />
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="absolute flex items-end justify-between w-[374px] left-[16px] bottom-[16px] max-[360px]:w-[336px]">
              <div
                onClick={handleAttachButtonClick}
                className="flex items-center justify-between w-[102px] h-[32px] rounded-[4px] px-[10px] py-[4px] bg-[#C7C7C7]"
              >
                <Attach />
                <div className="leading-[19px] font-[poppins] font-[500] text-[19px] max-[360px]:text-[16px] max-[360px]:leading-[16px]">
                  Attach
                </div>
              </div>
              <div className="flex">
                {selectedImages.map((item, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(item)}
                    alt={`Attaching soon ${index + 1}`}
                    className="w-[60px] h-[60px] rounded-[8px] mt-[8px]"
                  />
                ))}
              </div>
            </div>
          </div>
          {loggedIn && (
            <div className="flex items-center mt-[24px]">
              <input
                type="checkbox"
                className="w-[20px] h-[20px] max-[360px]:w-[16px] max-[360px]:h-[16px]"
              />
              <div className="font-[poppins] font-[500] text-[16px] leading-[16px] ml-[8px] max-[360px]:text-[14px] max-[360px]:leading-[14px]">
                Send feedback anonymously
              </div>
            </div>
          )}
        </div>
        {!loggedIn && (
          <div className="mt-[20px]">
            <div className=" flex font-[poppins] font-[500] text-[18px] leading-[18px] text-[#4D4D4D] max-[360px]:text-[16px] max-[360px]:leading-[16px]">
              Enter your email to receive an update <Asterisk />
            </div>
            <input
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[1.5px]  border-[#999999] rounded-[8px] px-[16px] py-[12px] h-[42px]  w-[398px] mt-[12px] max-[360px]:w-[336px] max-[360px]:h-[36px]"
            />
          </div>
        )}
        <div className="float-right mt-[32px]">
          <button
            className={`text-[#F8F8F8] font-[poppins] font-[600] text-[20px] leading-[20px] px-[20px] py-[10px] ${
              !loggedIn
                ? textValue !== "" && email !== ""
                  ? "opacity-[100%]"
                  : "opacity-[60%]"
                : textValue !== ""
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

export default FeedbackModel;
