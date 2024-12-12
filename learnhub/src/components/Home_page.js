import { IoSearchOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiEditLine } from "react-icons/ri";
import { useState } from "react";

function Home({ handlePopup }) {
  const [clickHome, setClickhome] = useState(true);
  const [clickAddquestion, setClickaddquestion] = useState(false);
  const [clickNotification, setClicknotification] = useState(false);

  return (
    <>
      <div className="flex flex-col  w-[100%] h-[100%] bg-[#ffffff] mt-[0rem]">
        <div className="flex flex-row gap-[2rem] justify-between h-[12%] w-[100%] border-b-[1px] border-[#e1e1e1]">
          <div className="flex flex-row gap-[1.5rem] px-[0.75rem] py-[0.75rem] gap-[1rem] justify-center items-center h-[100%] w-[18%]">
            <img
              src="assets\SU.png"
              className="w-[3.5rem] h-[3.5rem] rounded-[1.75rem]"
            />
            <p className="font-extrabold font-sans text-[#ED8B00] text-[1.5rem]">
              Learn
              <span className="font-extrabold font-sans text-[#000000] text-[1.5rem]">
                Hub
              </span>
            </p>
          </div>

          <div className="flex flex-row justify-center items-center h-[100%] gap-[1.5rem] px-[0.75rem]">
            <IoSearchOutline className="h-[1.5rem] w-[2rem] relative left-[4rem]" />
            <input
              type="text"
              placeholder="Search"
              className="h-[60%] w-[30rem] border-[1px] border-[#b8b6b6] px-[3.5rem] rounded-[2rem] bg-[#f2f2f2] outline-none"
            />
          </div>

          <div className="flex flex-row gap-[1.5rem] px-[0.75rem] py-[0.75rem] gap-[0.90rem] justify-center items-center h-[100%] w-[18%]">
            <button className="mx-[2.5px] my-[2.5px] px-[30px] py-[6px] bg-[#4d4d4d] border-[0.5px] text-white rounded-[5px] font-bold text-[15px] hover:bg-[#ffffff] hover:text-[#4d4d4d] hover:border-[0.5px] hover:border-[#4d4d4d]">
              Login
            </button>
            <img
              src="assets\profile.png"
              className="w-[3.5rem] h-[3.5rem] rounded-[1.75rem]"
            />
          </div>
        </div>
        <div className="h-full w-[20%]  border-[#e1e1e1] border-r-[1px] flex flex-col gap-[2rem] justify-center items-center">
          <div className="flex flex-col h-[35%] w-[100%] gap-[1rem] py-[1rem] justify-center items-center">
            <button
              onClick={() => {
                setClickhome(true);
                setClickaddquestion(false);
                setClicknotification(false);
              }}
              className={`flex flex-row items-center  gap-[1rem] text-black  text-[14px] h-[2.5rem] w-[12rem] pl-[1.5rem] ${
                clickHome && "bg-[#d9d9d9]"
              }`}
            >
              <GoHome className="h-[1.6rem] w-[1.6rem]" />
              Home
            </button>

            <button
              onClick={() => {
                setClickhome(false);
                setClickaddquestion(true);
                setClicknotification(false);
              }}
              className={`flex flex-row items-center  gap-[1rem] text-black  text-[14px] h-[2.5rem] w-[12rem] pl-[1.5rem] ${
                clickAddquestion && "bg-[#d9d9d9]"
              } `}
            >
              <RiEditLine className="h-[1.6rem] w-[1.6rem]" />
              Add Question
            </button>

            <button
              onClick={() => {
                setClickhome(false);
                setClickaddquestion(false);
                setClicknotification(true);
              }}
              className={`flex flex-row items-center  gap-[1rem] text-black text-[14px] h-[2.5rem] w-[12rem] pl-[1.5rem] ${
                clickNotification && "bg-[#d9d9d9]"
              }`}
            >
              <IoMdNotificationsOutline className="h-[1.6rem] w-[1.6rem]" />
              Notification
            </button>
          </div>
          <div className="flex flex-col h-[35%] w-[100%]"></div>
          <div className="flex flex-col h-[30%] w-[100%]"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
