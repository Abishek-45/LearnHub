import React from "react";
import { useState, useEffect } from "react";
import { TbSchool } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import axios from "axios";

function REGISTER_POPUP({
  setPopup,
  setIsotp,
  setIsRegister,
  resend,
  setResend,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordText, setPasswordText] = useState(false);
  const [otpstatus, setOtpstatus] = useState(false);
  const [otpmsg, setOtpmsg] = useState("");
  const [nameerr, setNameerr] = useState("");
  const [rollnoerr, setRollnoerr] = useState("");

  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleOtp = () => {};

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleRollno = (e) => {
    setRollno(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (resend) {
      handleRegister();
      setResend(false);
    }
  }, [resend, setResend]);

  const handleRegister = async () => {
    setNameerr("");
    setOtpmsg("");
    setRollnoerr("");

    const body = {
      name: name,
      rollno: rollno,
      email: mail,
      Password: password,
    };

    try {
      const res = await axios.post(
        "http://localhost:3001/Authentication/Register",
        body
      );

      console.log(res.data);

      if (res.data.message === "OTP sent ") {
        setOtpmsg(res.data.message);
        setOtpstatus(true);
        setIsotp(true);
        setIsRegister(false);
      }
    } catch (err) {
      console.log(err.response);
      if (err.response.data.name === "name has been taken") {
        setNameerr(err.response.data.name);
      }

      if (err.response.data.rollno === "rollno has been taken") {
        setRollnoerr(err.response.data.rollno);
      }
    }
  };

  return (
    <div className="flex flex-col gap-[5px]">
      <MdOutlineClose
        className="h-[18px] w-[18px] ml-auto hover:cursor-pointer"
        onClick={() => setPopup(false)}
      />
      <div className="flex flex-col gap-[5px] justify-center items-center w-[550px] h-[80ev] bg-[#ffffff] rounded-[10px] py-[3%]">
        <img
          src="/assets/SU.png"
          alt="su"
          className="h-[60px] rounded-[65px] "
        />
        <div className="flex flex-col justify-center items-center">
          <TbSchool className="h-[25px] w-[25px] relative top-[12px] right-[45px] -rotate-[25deg]" />
          <p className="font-sans font-extrabold text-[#ED8B00] text-[24px]">
            Register
          </p>
        </div>
        <div className="flex flex-col w-[450px] h-[380px] bg-[#ffffff] my-[5px] rounded-[7.5px] border-[0.5px] border-[#d0d0d0] py-[5px] gap-[12px] justify-center items-center">
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row w-[100%] justify-between">
              <p className="text-[13px]">
                NAME <span className="text-red-500">*</span>
              </p>
              <p className="text-[13px] text-[#ff0000]">{nameerr}</p>
            </div>

            <input
              type="text"
              placeholder="Enter a Username"
              onChange={handleName}
              value={name}
              className="border-[0.5px] border-[#d0d0d0] rounded-[5px] px-[10px] py-[6px] w-[350px] text-[13px] outline-none focus:border-[#ED8B00] focus:ring-2 focus:ring-[#ED8B00]"
            />
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row w-[100%] justify-between">
              <p className="text-[13px]">
                USER ID / ROLL NO <span className="text-red-500">*</span>
              </p>
              <p className="text-[13px] text-[#ff0000]">{rollnoerr}</p>
            </div>

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
              COLLEGE MAIL <span className="text-red-500">*</span>
            </p>
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={handleMail}
              value={mail}
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
                value={password}
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

          <div className="flex flex-row gap-[10px] w-[80%] justify-center items-center">
            <div className="w-[70%] flex">
              <button
                onClick={handleRegister}
                className="ml-[50%] my-[1px] px-[30px] py-[6px] bg-[#4d4d4d] border-[0.5px] text-white rounded-[5px] font-bold text-[15px] hover:bg-[#ffffff] hover:text-[#4d4d4d] hover:border-[0.5px] hover:border-[#4d4d4d]"
              >
                Register
              </button>
            </div>
            <div className="flex flex-row justify-center items-center w-[30%] gap-[5px]">
              {otpstatus ? (
                <button
                  className="text-[#53977c] text-[14px] flex flex-row justify-center items-center gap-[4px]"
                  onClick={handleOtp}
                >
                  {otpmsg}
                  <RiVerifiedBadgeFill className="text-[#53977c] text-[18px]" />
                </button>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default REGISTER_POPUP;
