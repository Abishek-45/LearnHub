import { MdOutlineClose } from "react-icons/md";
import React from "react";

function Otp_popup({ setPopup, setIsotp }) {
  return (
    <>
      <div className="flex flex-col w-[50%] h-[40%] bg-[#000000]">
        <MdOutlineClose
          className="h-[18px] w-[18px] ml-auto hover:cursor-pointer"
          onClick={() => setPopup(false)}
        />
        <div></div>
      </div>
    </>
  );
}
export default Otp_popup;
