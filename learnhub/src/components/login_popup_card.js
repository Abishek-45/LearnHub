import React from "react";
import { useState } from "react";
import { TbSchool } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import axios from "axios";

function LOGIN_POPUP({ setPopup, setIsRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordText, setPasswordText] = useState(false);

  const [rollno,setRollno]=useState("");
  const [Password,setPassword]=useState("");

  const handleRollno =(e) =>{
    setRollno(e.target.value) ;
  }

  const handlePassword=(e)=>{
    setPassword(e.target.value) ;
  }

  const handleLogin = async () => {
    const body = {
      rollno: rollno,
      Password: Password,
    };
    try {
      const res = await axios.post(
        "http://localhost:3001/Authentication/login",
        body
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col gap-[10px]">
      <MdOutlineClose
        className="h-[20px] w-[20px] ml-auto hover:cursor-pointer"
        onClick={() => setPopup(false)}
      />
      <div className="flex flex-col gap-[10px] justify-center items-center w-[550px] h-[525px] bg-[#ffffff] rounded-[10px]">
        <img
          src="/assets/SU.png"
          alt="su"
          className="h-[60px] rounded-[65px] "
        />
        <div className="flex flex-col justify-center items-center">
          <TbSchool className="h-[25px] w-[25px] relative top-[12px] right-[35px] -rotate-[25deg]" />
          <p className="font-sans font-extrabold text-[#ED8B00] text-[24px]">
            Login
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-[5px]">
          <p className="font-sans font-bold text-[#000000] text-[15px]">
            New to LearnHub ?
          </p>
          <p 
            className="text-[#ED8B00] text-[15px] cursor-pointer"
            onClick={() => setIsRegister(true)}
          >
            Create Account
          </p>
        </div>
        <div className="flex flex-col w-[450px] h-[100px] bg-[#ffffff] my-[10px] rounded-[7.5px] border-[0.5px] border-[#d0d0d0] py-[130px] gap-[20px] justify-center items-center">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[13px]">
              USER ID / ROLL NO <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              placeholder="Enter Roll No"
              onChange={handleRollno}
              value={rollno}
              className="border-[0.5px] border-[#d0d0d0] rounded-[5px] px-[10px] py-[6px] w-[350px] text-[13px] outline-none focus:border-[#ED8B00] focus:ring-2 focus:ring-[#ED8B00]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-[13px]">
              PASSWORD <span className="text-red-500">*</span>
            </p>
            <div className="flex flex-row items-center w-[350px] border-[0.5px] border-[#d0d0d0] rounded-[5px] py-[2px]">
              <input
                type={passwordText ? "text" : "password"}
                placeholder="Enter Password"
               onChange={handlePassword}
               value={Password}
                className="border-r-[0.5px] rounded-l-[5px] border-[#d0d0d0] px-[10px] py-[6px] w-[280px] text-[13px] outline-none focus:border-[#ED8B00] focus:ring-2 focus:ring-[#ED8B00]"
              />
              {showPassword ? (
                <FaRegEye
                  className="w-[18px] h-[18px] ml-[20px] hover:cursor-pointer"
                  onClick={() => {
                    setPasswordText(false);
                    setShowPassword(false);
                  }}
                />
              ) : (
                <FaRegEyeSlash
                  className="w-[18px] h-[18px] ml-[21px] hover: cursor-pointer"
                  onClick={() => {
                    setPasswordText(true);
                    setShowPassword(true);
                  }}
                />
              )}
            </div>
          </div>
          <button 
           onClick={handleLogin}
            className="mx-[2.5px] my-[2.5px] px-[30px] py-[6px] bg-[#4d4d4d] border-[0.5px] text-white rounded-[5px] font-bold text-[15px] hover:bg-[#ffffff] hover:text-[#4d4d4d] hover:border-[0.5px] hover:border-[#4d4d4d]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LOGIN_POPUP;
