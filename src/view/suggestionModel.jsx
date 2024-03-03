import React, { useState, useEffect, useRef } from "react";

//import icon
import { ReactComponent as Attach } from "../icon/attach.svg";
import { ReactComponent as Asterisk } from "../icon/asterisk.svg";
import { ReactComponent as SelectArrowDown } from "../icon/selectArrowDown.svg";
import { ReactComponent as SelectArrowUp } from "../icon/selectArrowUp.svg";

// import data from authContext
import { useData } from "../helper/authContext";

const SuggestionModel = ({
  setEdit,
  setEditText,
  setClickedIcon,
  setSubmitted,
}) => {
  const [value, setValue] = useState("Select");
  const [showList, setShowList] = useState(false);
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

  const data = [
    {
      name: "Concept Cards",
    },
    {
      name: "Interview Questions",
    },
    {
      name: "Practice Questions",
    },
    {
      name: "Quizzes",
    },
    {
      name: "Others",
    },
  ];

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
      className={`flex relative justify-center ${
        !loggedIn
          ? "h-[632px] max-[360px]:h-[582px]"
          : "h-[536px] max-[360px]:h-[494px]"
      } w-[430px] rounded-[8px] px-[16px] py-[24px] bg-[#F8F8F8] max-[360px]:w-full max-[360px]:px-[12px] max-[360px]:rounded-t-[20px] max-[360px]:rounded-b-[0px] `}
    >
      <div>
        <div className="font-[600] font-[poppins] text-[20px] leading-[24px] text-center px-[24px] w-[398px] pb-[24px] border-b-[2px] border-[#CCCCCC]  max-[360px]:text-[18px] max-[360px]:leading-[22px] max-[360px]:w-[336px] max-[360px]:pb-[16px]">
          Share your suggestions with us for a chance to earn rewards!
        </div>
        <div className="h-[384px] mt-[32px] max-[360px]:w-[336px]">
          <div className="relative">
            <div className="leading-[18px] font-[poppins] font-[500] text-[18px] text-[#4D4D4D] max-[360px]:text-[16px] max-[360px]:leading-[16px]">
              Chose a section
            </div>
            <div
              className="flex items-center mt-[12px] h-[48px] rounded-[8px] border-[1px] border-[#CCCCCC] px-[16px] py-[12px] bg-[#E0E0E0] max-[360px]:h-[36px]"
              onClick={() => setShowList(!showList)}
            >
              <div className="font-[poppins] font-[500] text-[18px] leading-[18px] text-[#333333] w-[334px] mr-[8px]  max-[360px]:text-[16px] max-[360px]:leading-[16px] max-[360px]:w-[292px]">
                {value}
              </div>
              <div>
                {!showList ? (
                  <SelectArrowDown className="max-[360px]:w-[16px] max-[360px]:h-[16px]" />
                ) : (
                  <SelectArrowUp className="max-[360px]:w-[16px] max-[360px]:h-[16px]" />
                )}
              </div>
            </div>
            <div className="absolute mt-[2px] z-10 h-[216px] overflow-scroll max-[360px]:h-[176px]">
              {showList &&
                data.map((item, index) => {
                  return (
                    <div
                      key={item.name}
                      onClick={() => [setValue(item.name), setShowList(false)]}
                      className={`font-[poppins] font-[400] text-[18px] leading-[18px] text-[#333333] px-[16px] py-[18px] bg-[#E0E0E0] w-[398px] border-b-[4px] border-[#CCCCCC] max-[360px]:w-[336px] max-[360px]:text-[16px] max-[360px]:leading-[16px] max-[360px]:py-[12px] max-[360px]:border-b-[2px]
                      ${index === 0 && "rounded-t-[8px]"} 
                      ${index === data.length - 1 && "rounded-b-[8px]"}
                          `}
                    >
                      {item.name}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="mt-[12px]">
            <div className="leading-[18px] font-[poppins] font-[500] text-[18px] text-[#4D4D4D] flex max-[360px]:text-[16px] max-[360px]:leading-[16px]">
              <div>Describe the suggestion in detail</div>
              <Asterisk />
            </div>
            <div className="mt-[12px] relative">
              <textarea
                placeholder="Write here..."
                rows={9}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                className="bg-[#E0E0E0] w-[398px] h-[180px] rounded-[8px] border-[1px] border-[#CCCCCC] px-[16px] py-[8px] leading-[18px] font-[poppins] font-[500] text-[18px] text-[#808080] focus:outline-none max-[360px]:w-[336px] max-[360px]:rounded-[4px] max-[360px]:px-[12px] max-[360px]:text-[16px] max-[360px]:leading-[16px]"
              />
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="absolute flex items-end justify-between w-[374px] left-[16px] bottom-[16px] max-[360px]:w-[316px] ">
                <div
                  onClick={handleAttachButtonClick}
                  className="flex items-center justify-between w-[102px] h-[32px] rounded-[4px] px-[10px] py-[4px] bg-[#C7C7C7]"
                >
                  <Attach />
                  <div className="leading-[19px] font-[poppins] font-[500] text-[19px]">
                    Attach
                  </div>
                </div>
                <div className="flex max-w-[120px] overflow-x-scroll">
                  {selectedImages.map((item, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(item)}
                      alt={`Attaching soon ${index + 1}`}
                      className="w-[60px] h-[60px] rounded-[8px] mt-[8px] max-[360px]:w-[40px] max-[360px]:h-[40px]"
                    />
                  ))}
                </div>
              </div>
            </div>
            {!loggedIn && (
              <div className="mt-[24px]">
                <div className="flex font-[poppins] font-[500] text-[18px] leading-[18px] text-[#4D4D4D] max-[360px]:text-[16px] max-[360px]:leading-[16px]">
                  <div className="ml-[2px]">
                    Enter your email to receive an update
                  </div>
                  <Asterisk />
                </div>
                <input
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-[1.5px]  border-[#999999] rounded-[8px] px-[16px] py-[12px] h-[42px] w-[398px] mt-[12px] max-[360px]:w-[336px] max-[360px]:h-[36px] max-[360px]:px-[10px]"
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
      </div>
    </div>
  );
};

export default SuggestionModel;
