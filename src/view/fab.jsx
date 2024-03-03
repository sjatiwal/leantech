import React, { useState, useRef, useEffect } from "react";
//import icon
import { ReactComponent as Close } from "../icon/close.svg";
import { ReactComponent as Contact } from "../icon/contact.svg";
import { ReactComponent as Feedback } from "../icon/feedback.svg";
import { ReactComponent as Open } from "../icon/open.svg";
import { ReactComponent as OpenSmall } from "../icon/openSmall.svg";
import { ReactComponent as Report } from "../icon/report.svg";
import { ReactComponent as Suggestion } from "../icon/suggestion.svg";

//import components
import FeedbackModel from "./feedbackModel";
import FeedbackThanks from "./feedbackThanks";
import ReportModel from "./reportModel";
import ReportThanks from "./reportThanks";
import SuggestionModel from "./suggestionModel";
import SuggestionThanks from "./suggestionThanks";
import QueriesModel from "./queriesModel";
import QueriesThanks from "./queriesThanks";

// to get data from authContext
import { useData } from "../helper/authContext";

const FAB = () => {
  const modelRef = useRef(null);
  const { setClickOpacity } = useData();
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(false);
  const [clickedIcon, setClickedIcon] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [position, setPosition] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    //to move icons above modles
    if (modelRef.current) {
      const modelHeight = modelRef.current.clientHeight;
      console.log("Height of the div:", modelHeight);
      setPosition(modelHeight);
    }
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [clickedIcon, screenWidth]);

  // handleclick on Report icons
  const handleReport = () => {
    setEditText(false);
    setClickOpacity(false);
    setClickedIcon("report");
  };

  // handleclick on feedback icons
  const handleFeedback = () => {
    setEditText(false);
    setClickOpacity(false);
    setClickedIcon("feedback");
  };

  // handleclick on suggestion icons
  const handleSuggestion = () => {
    setEditText(false);
    setClickOpacity(false);
    setClickedIcon("suggestion");
  };

  // handleclick on contactUs icons
  const handleContactUs = () => {
    setEditText(false);
    setClickOpacity(false);
    setClickedIcon("quries");
  };

  const data = [
    {
      text: "Report an Issue",
      icon: <Report className="max-[360px]:h-[48px] max-[360px]:w-[48px]" />,
      onclick: handleReport,
    },
    {
      text: "Share Feedback",
      icon: <Feedback className="max-[360px]:h-[48px] max-[360px]:w-[48px]" />,
      onclick: handleFeedback,
    },
    {
      text: "Give Suggestion",
      icon: (
        <Suggestion className="max-[360px]:h-[48px] max-[360px]:w-[48px]" />
      ),
      onclick: handleSuggestion,
    },
    {
      text: "Contact Us",
      icon: <Contact className="max-[360px]:h-[48px] max-[360px]:w-[48px]" />,
      onclick: handleContactUs,
    },
  ];

  //handle Close button
  const handleClose = () => {
    setEdit(false);
    setEditText(false);
    setClickedIcon("");
    setClickOpacity(false);
  };
  return (
    <div className="relative">
      <div
        ref={modelRef}
        className="fixed bottom-[104px] right-[32px] max-[360px]:absolute max-[360px]:bottom-0 max-[360px]:right-0"
      >
        {/* show respective model on clicking icon */}
        {clickedIcon === "report" && (
          <ReportModel
            setEdit={setEdit}
            setEditText={setEditText}
            setClickedIcon={setClickedIcon}
            setSubmitted={setSubmitted}
          />
        )}
        {clickedIcon === "feedback" && (
          <FeedbackModel
            setEdit={setEdit}
            setEditText={setEditText}
            setClickedIcon={setClickedIcon}
            setSubmitted={setSubmitted}
          />
        )}
        {clickedIcon === "suggestion" && (
          <SuggestionModel
            setEdit={setEdit}
            setEditText={setEditText}
            setClickedIcon={setClickedIcon}
            setSubmitted={setSubmitted}
          />
        )}
        {clickedIcon === "quries" && (
          <QueriesModel
            setEdit={setEdit}
            setEditText={setEditText}
            setClickedIcon={setClickedIcon}
            setSubmitted={setSubmitted}
          />
        )}
      </div>
      <div
        className={`fixed min-[360px]:bottom-[32px] min-[360px]:right-[32px] max-[360px]:right-[10px] ${
          editText ? "w-[256px]" : "flex"
        } max-[360px]:bottom-[10px]
      `}
        style={{
          bottom:
            clickedIcon !== "" && screenWidth <= 360
              ? `${position}px`
              : clickedIcon !== "" && screenWidth > 360
              ? "32px"
              : "10px",
        }}
      >
        <div
          className={`${
            editText
              ? "h-[312px] w-[256px] max-[360px]:h-[246px]"
              : "h-0 mt-[24px] max-[360px]:mt-[18px]"
          } float-right `}
        >
          {edit &&
            data.map((item, index) => {
              return (
                <div
                  className={`flex items-center float-right ${
                    index && editText > 0 ? "mt-[24px]" : "mt-0"
                  }  `}
                  key={item.text}
                >
                  {editText && (
                    <div className="border-[1px] border-[#CCCCCC] rounded-[4px] px-[16px] py-[8px] bg-[#F8F8F8] mr-[8px] font-[poppins] font-[500] text-[18px] leading-[18px] text-[#0F0F0F] ">
                      {item.text}
                    </div>
                  )}
                  <button onClick={item.onclick}>{item.icon}</button>
                </div>
              );
            })}
        </div>
        <div
          className={`relative float-right mt-[24px] max-[360px]:mt-[18px] mr-[2px]`}
        >
          <div>
            {/* show thanks model on respective submission */}
            {submitted === "reportSubmitted" && <ReportThanks />}
            {submitted === "fedbackSubmitted" && <FeedbackThanks />}
            {submitted === "suggestionSubmitted" && <SuggestionThanks />}
            {submitted === "queriesSubmitted" && <QueriesThanks />}
          </div>
          {edit ? (
            <Close
              onClick={handleClose}
              className="max-[360px]:h-[48px] max-[360px]:w-[48px]"
            />
          ) : (
            <>
              {/* for desktop screen */}
              <div className="max-[360px]:hidden">
                <Open onClick={() => [setEdit(true), setEditText(true)]} />
              </div>
              <div className="min-[360px]:hidden">
                {/* for mobile screen */}
                <OpenSmall
                  onClick={() => [
                    setEdit(true),
                    setEditText(true),
                    setClickOpacity(true),
                  ]}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAB;
