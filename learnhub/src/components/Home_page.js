import { IoSearchOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiEditLine } from "react-icons/ri";
import { useRef, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";

function Home({ handlePopup }) {
  const [clickHome, setClickhome] = useState(true);
  const [clickAddquestion, setClickaddquestion] = useState(false);
  const [clickNotification, setClicknotification] = useState(false);
  const [preferences, setPreferences] = useState([
    "CSE",
    "EEE",
    "ECE",
    "ELC",
    "CCE",
    "ABC",
    "CDE",
  ]);
  const [newpreference, setNewpreference] = useState("");
  const scrollcontainer = useRef();

  const handleLeftscroll = () => {
    if (scrollcontainer.current) {
      scrollcontainer.current.scrollBy({
        left: -70,
        behavior: "smooth",
      });
    }
  };
  const handleRightscroll = () => {
    if (scrollcontainer.current) {
      scrollcontainer.current.scrollBy({
        left: 70,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="flex flex-col  w-[100%] h-[100%] bg-[#ffffff] overflow-hidden">
        <div className="flex flex-row gap-[2rem] justify-between h-[10.5%] w-[100%] border-b-[1px] border-[#e1e1e1] overflow-y-none">
          <div className="flex flex-row gap-[1.5rem] px-[0.75rem] py-[0.25rem] gap-[1rem] justify-center items-center h-[100%] w-[15%]">
            <img
              src="assets\SU.png"
              className="w-[3rem] h-[3rem] rounded-[1.75rem]"
            />
            <p className="font-extrabold font-sans text-[#ED8B00] text-[1.2rem]">
              Learn
              <span className="font-extrabold font-sans text-[#000000] text-[1.2rem]">
                Hub
              </span>
            </p>
          </div>

          <div className="flex flex-row justify-center items-center h-[100%] w-[50%] gap-[1.5rem] px-[0.75rem]">
            <IoSearchOutline className="h-[1.2rem] w-[1.8rem] relative left-[4rem]" />
            <input
              type="text"
              placeholder="Search"
              className="h-[55%] w-[60%] border-[1px] border-[#b8b6b6] px-[3.5rem] rounded-[2rem] text-[14px] bg-[#f2f2f2] outline-none"
            />
          </div>

          <div className="flex flex-row gap-[1.5rem] px-[0.75rem] py-[0.75rem] gap-[0.90rem] justify-center items-center h-[100%] w-[18%]">
            <button className="mx-[2.5px] my-[2.5px] px-[30px] py-[5px] bg-[#4d4d4d] border-[0.5px] text-white rounded-[5px] font-bold text-[15px] hover:bg-[#ffffff] hover:text-[#4d4d4d] hover:border-[0.5px] hover:border-[#4d4d4d]">
              Login
            </button>
            <img
              src="assets\profile.png"
              className="w-[3rem] h-[3rem] rounded-[1.75rem]"
            />
          </div>
        </div>
        <div className="h-full w-[18%]  border-[#e1e1e1] border-r-[1px] flex flex-col gap-[0rem] justify-center items-center">
          <div className="flex flex-col h-[34%] w-[100%] gap-[1rem] justify-center items-center">
            <button
              onClick={() => {
                setClickhome(true);
                setClickaddquestion(false);
                setClicknotification(false);
              }}
              className={`flex flex-row items-center  gap-[1rem] text-black  text-[13px] h-[2.5rem] w-[12rem] pl-[1.5rem] ${
                clickHome && "bg-[#e1e1e1] "
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
              className={`flex flex-row items-center  gap-[1rem] text-black  text-[13px] h-[2.5rem] w-[12rem] pl-[1.5rem] ${
                clickAddquestion && "bg-[#e1e1e1]"
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
              className={`flex flex-row items-center  gap-[1rem] text-black text-[13px] h-[2.5rem] w-[12rem] pl-[1.5rem] ${
                clickNotification && "bg-[#e1e1e1] "
              }`}
            >
              <IoMdNotificationsOutline className="h-[1.6rem] w-[1.6rem]" />
              Notification
            </button>
          </div>
          <hr className="w-[70%] border-t-1 border-gray-300" />

          <div className="flex flex-col h-[42%] w-[100%] justify-center items-center gap-[1rem]">
            <p className="text-[14px]">Preferences</p>
            <div className="flex flex-row h-[35%] w-[90%] justify-center items-center gap-[0.5rem]">
              <FaAngleLeft
                onClick={handleLeftscroll}
                className="cursor-pointer h-[0.8rem]"
              />
              <div
                ref={scrollcontainer}
                className="h-[100%] w-[100%] flex flex-col justify-center itmes-center gap-[0.6rem] flex-wrap overflow-x-auto scrollbar-none "
              >
                {preferences.map((pref, index) => (
                  <div
                    key={index}
                    className="w-[40%] h-[32%] mx-[0.25rem] justify-center items-center flex flex-row gap-[0.7rem] bg-[#e1e1e1] rounded-[5px]"
                  >
                    <p className="text-[13px]">{pref}</p>
                    <MdOutlineCancel className="cursor-pointer" />
                  </div>
                ))}
              </div>
              <FaAngleRight
                onClick={handleRightscroll}
                className="cursor-pointer h-[0.8rem]"
              />
            </div>
            <button className="mx-[2.5px] my-[2.5px] px-[30px] py-[0.3rem] bg-[#333333] border-[0.5px] text-white rounded-[1rem] font-medium text-[13px] hover:bg-[#ffffff] hover:text-[#4d4d4d] hover:border-[0.5px] hover:border-[#4d4d4d]">
              Add preference
            </button>
          </div>
          <div className="flex flex-col h-[24%] w-[100%] bg-[#333333] justify-center items-center">
            <button
              className={`flex flex-row items-center  gap-[1rem] text-white  text-[13px] h-[2.5rem] w-[12rem] pl-[1.5rem] ${
                clickAddquestion && "bg-[#e1e1e1]"
              } `}
            >
              <HiMiniQuestionMarkCircle className="h-[1.5rem] w-[1.5rem]" />
              Help
            </button>
            <button
              className={`flex flex-row items-center  gap-[1rem] text-white  text-[13px] h-[2.5rem] w-[12rem] pl-[1.5rem] ${
                clickAddquestion && "bg-[#e1e1e1]"
              } `}
            >
              <RiEditLine className="h-[1.6rem] w-[1.6rem]" />
              About us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
