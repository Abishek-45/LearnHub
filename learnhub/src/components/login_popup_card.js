import React from "react";
import { useState } from "react";
import { TbSchool } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

function LOGIN_POPUP({ setPopup }) {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordText, setPasswordText] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="flex flex-col gap-[10px]">
        <MdOutlineClose
          className="h-[40px] w-[40px] ml-auto hover:cursor-pointer"
          onClick={() => setPopup(false)}
        />
        <div className="flex flex-col gap-[20px] justify-center items-center w-[1000px] h-[1050px] bg-[#ffffff] rounded-[20px]">
          <img
            src="/assets/SU.png"
            alt="su"
            className="h-[130px] rounded-[65px] "
          />
          <div className="flex flex-col justify-center items-center">
            <TbSchool className="h-[55px] w-[55px] relative top-[25px] right-[70px] -rotate-[25deg]" />
            <p className="font-sans font-extrabold text-[#ED8B00] text-[55px]">
              Login
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-[15px]">
            <p className="font-sans font-bold text-[#000000] text-[25px]">
              New to LearnHub ?
            </p>
            <p className="text-[#ED8B00] text-[25px]">CreateAccount</p>
          </div>
          <div className="flex flex-col w-[850px] h-[500px] bg-[#ffffff] my-[20px] rounded-[7.5px] border-[0.5px] border-[#d0d0d0] py-[250px] gap-[40px] justify-center items-center">
            <div className="flex flex-col gap-[18px]">
              <p className="text-[25px]">
                USER ID / ROLL NO <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                placeholder="Enter Roll No"
                className="border-[0.5px] border-[#d0d0d0] rounded-[10px] px-[30px] py-[12px] w-[600px] text-[25px] outline-none"
              />
            </div>
            <div className="flex flex-col gap-[18px]">
              <p className="text-[25px]">
                PASSWORD <span className="text-red-500">*</span>
              </p>
              <div className="flex flex-row  items-center w-[600px] border-[0.5px] border-[#d0d0d0] rounded-[10px]">
                <input
                  type={passwordText ? "text" : "password"}
                  placeholder="Enter Passowrd"
                  className="border-r-[0.5px] rounded-l-[10px] border-[#d0d0d0] px-[30px] py-[12px] w-[500px] text-[25px] outline-none"
                />
                {showPassword ? (
                  <FaRegEye
                    className="w-[30px] h-[30px] ml-[30px]"
                    onClick={() => {
                      setPasswordText(false);
                      setShowPassword(false);
                    }}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="w-[34px] h-[34px] ml-[28px]"
                    onClick={() => {
                      setPasswordText(true);
                      setShowPassword(true);
                    }}
                  />
                )}
              </div>
            </div>
            <button className="mx-[5px] my-[5px] px-[60px] py-[12px] bg-[#4d4d4d] text-white rounded-[5px] font-bold text-[30px]">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LOGIN_POPUP;
