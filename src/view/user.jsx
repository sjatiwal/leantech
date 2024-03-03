import React from "react";

//import icon
import { ReactComponent as Comment } from "../icon/comment.svg";
import { ReactComponent as EditIcon } from "../icon/editIcon.svg";
import { ReactComponent as Like } from "../icon/like.svg";
import { ReactComponent as UserProfile } from "../icon/userProfile.svg";

const User = () => {
  return (
    <div className="flex justify-center h-[43px] mt-[24px]">
      <div className="flex justify-center w-[832px] h-[317px] rounded-[6px] border-[1px] border-[#979595] py-[16px] bg-[#DEE7FF] ">
        <div className="w-[750px] h-[285px]">
          <div className="flex justify-between">
            <div className="flex">
              <div>
                <UserProfile />
              </div>
              <div className="ml-[16px]">
                <div className="flex items-center">
                  <div className="font-[poppins] font-[700] text-[20px] leading-[30px] text-[#0F0F0F]">
                    Neha Bhat
                  </div>
                  <div className="font-[poppins] font-[500] text-[20px] leading-[30px] text-[#0F0F0F]">
                    (You)
                  </div>
                </div>
                <div className="font-[poppins] font-[500] text-[18px] leading-[27px] text-[#0F0F0F]">
                  Jun 27, 2023
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <EditIcon />
              <div className="font-[poppins] font-[500] text-[20px] leading-[30px] text-[#0F0F0F] ml-[17px]">
                Edit
              </div>
            </div>
          </div>
          <div className="font-[poppins] font-[500] text-[18px] leading-[27px] text-[#0F0F0F] mt-[18px]">
            Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum
            enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat
            fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus
            sit pel sit elit morbi. Mi sed mauris aenean odio egestas
            ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus
            ipsum interdum ut velit quam. Bibendum amet mi....
            <span className="font-[700]">Show more</span>
          </div>
          <div className="flex mt-[18px] p-[8px] items-center">
            <div className="flex items-center ml-[16px] ">
              <Like />
              <div className="font-[poppins] font-[500] text-[20px] leading-[30px] text-[#0F0F0F] ml-[10px]">
                Like
              </div>
            </div>
            <div className="flex items-center ml-[16px]">
              <div>
                <Comment />
              </div>
              <input
                className="w-[478px] rounded-[6px] border-[1px] border-[#0F0F0F] h-[34px] p-[10px] text-[#979595] bg-[#DEE7FF] ml-[10px]"
                placeholder="Add a Comment"
              />
              <div className="font-[poppins] font-[500] text-[18px] leading-[18px] text-[#000000] opacity-50 px-[16px] py-[8px] bg-[#F5F5F5] rounded-[6px] border-[1px] border-[#000000] ml-[10px]">
                Post
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
