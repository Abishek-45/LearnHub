import { MdOutlineClose } from "react-icons/md";
import React, { useState } from "react";
import { useRef } from "react";
import axios from "axios";

function Otp_popup({ setPopup, setIsotp, setResend, resend }) {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleInputChange = (e, nextRef) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      e.target.value = value;
      if (nextRef) {
        nextRef.current.focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handleKeyDown = (e, prevRef) => {
    if (e.key === "Backspace" && !e.target.value && prevRef) {
      prevRef.current.focus();
    }
  };

  const handleResend = () => {
    setResend(true);
  };

  const handleOtpverification = async () => {
    const body = Number(otp.join(""));
    console.log(body);
    try {
      const res = await axios.post(
        "http://localhost:3001/Authentication/Otp",
        body
      );
      console.log(res.data.otp);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col w-[100%] h-[100%] justify-center items-center">
        <div className="flex flex-col gap-[0.5rem] w-[34%] h-[60%] justify-center items-center">
          <MdOutlineClose
            className="h-[18px] w-[18px] ml-auto hover:cursor-pointer"
            onClick={() => {
              setPopup(false);
              setIsotp(false);
            }}
          />
          <div className="flex flex-col w-[100%] h-[90%] gap-[1.2rem] bg-[white] rounded-[0.6rem] justify-center items-center">
            <p className="font-sans font-extrabold text-[#ED8B00] text-[24px]">
              Verify Your Account
            </p>
            <div className="flex flex-col justify-center items-center">
              <p className="font-sans  text-[#000000] text-[13px]">
                We've sent a 4-digit OTP to your registered email. Please{" "}
              </p>
              <p className="font-sans  text-[#000000] text-[13px]">
                enter it below.
              </p>
            </div>
            <div className="flex flex-row gap-[1.5rem]">
              <input
                ref={input1Ref}
                value={otp[0]}
                onChange={(e) => {
                  handleInputChange(e, input2Ref);
                  setOtp((prevOtp) => {
                    const newOtp = [...prevOtp];
                    newOtp[0] = e.target.value;
                    return newOtp;
                  });
                }}
                onKeyDown={(e) => handleKeyDown(e, null)}
                type="text"
                maxLength="1"
                className="w-[50px] h-[50px]  text-center outline-none border-[1px] border-[#4d4d4d] border-opacity-[60%] text-[18px] rounded-[50%] focus:border-[#ED8B00]"
              />
              <input
                ref={input2Ref}
                value={otp[1]}
                onChange={(e) => {
                  handleInputChange(e, input3Ref);
                  setOtp((otp) => {
                    const newOtp = [...otp];
                    newOtp[1] = e.target.value;
                    return newOtp;
                  });
                }}
                onKeyDown={(e) => handleKeyDown(e, input1Ref)}
                type="text"
                maxLength="1"
                className="w-[50px] h-[50px]  text-center outline-none border-[1px] border-[#4d4d4d] border-opacity-[60%] text-[18px] rounded-[50%] focus:border-[#ED8B00]"
              />
              <input
                ref={input3Ref}
                value={otp[2]}
                onChange={(e) => {
                  handleInputChange(e, input4Ref);
                  setOtp((otp) => {
                    const newOtp = [...otp];
                    newOtp[2] = e.target.value;
                    return newOtp;
                  });
                }}
                onKeyDown={(e) => handleKeyDown(e, input2Ref)}
                type="text"
                maxLength="1"
                className="w-[50px] h-[50px]  text-center outline-none border-[1px] border-[#4d4d4d] border-opacity-[60%] text-[18px] rounded-[50%] focus:border-[#ED8B00]"
              />
              <input
                ref={input4Ref}
                value={otp[3]}
                onChange={(e) => {
                  handleInputChange(e, null);
                  setOtp((otp) => {
                    const newOtp = [...otp];
                    newOtp[3] = e.target.value;
                    return newOtp;
                  });
                }}
                onKeyDown={(e) => handleKeyDown(e, input3Ref)}
                type="text"
                maxLength="1"
                className="w-[50px] h-[50px]  text-center outline-none border-[1px] border-[#4d4d4d] border-opacity-[60%] text-[18px] rounded-[50%] focus:border-[#ED8B00]"
              />
            </div>
            <p className="font-sans text-[#000000] text-[12px]">
              If you don't receive the OTP{" "}
              <span
                className="text-[blue] ml-[0.5rem] underline hover:cursor-pointer"
                onClick={handleResend}
              >
                Resend OTP
              </span>
            </p>
            <button
              className="px-[30px] py-[6px] bg-[#4d4d4d] border-[0.5px] text-white rounded-[5px] font-bold text-[15px] hover:bg-[#ffffff] hover:text-[#4d4d4d] hover:border-[0.5px] hover:border-[#4d4d4d]"
              onClick={handleOtpverification}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Otp_popup;
