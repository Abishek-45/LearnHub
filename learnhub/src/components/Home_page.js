import { IoSearchOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { RiEditLine } from "react-icons/ri";
import { useRef, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { IoAlertOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

function Home({ handlePopup }) {
  const [clickHome, setClickhome] = useState(true);
  const [clickAddquestion, setClickaddquestion] = useState(false);
  const [clickNotification, setClicknotification] = useState(false);
  const [clickHelp, setHelp] = useState(false);
  const [clickAbout, setAbout] = useState(false);
  const [messageicon, setMessageicon] = useState(false);
  const [updatetime, setUpdatetime] = useState(["5h ago", "2h ago", "25h ago"]);
  const [preferences, setPreferences] = useState([
    "CSE",
    "EEE",
    "ECE",
    "ELC",
    "CCE",
    "ABC",
    "CDE",
  ]);
  const [department, setDepartment] = useState([
    "Computer Science",
    "Electronics and Communication Engineering",
    "Artificial Intelligence",
  ]);
  const [users, setUsers] = useState(["Thilak_10", "chandru__", "steve_ty"]);
  const [profiles, setProfiles] = useState([
    "assets/profile_1.avif",
    "assets/profile_4webp.webp",
    "assets/profile_3.avif",
  ]);
  const [solutioncount, setSolutioncound] = useState([2, 6, 0]);
  const [doubts, setDoubts] = useState([
    "What is the difference between recursion and iteration? Provide examples . Write a program to reverse a linked list iteratively and recursively.",
    "What are the phases of the Software Development Life Cycle (SDLC)?Explain the Agile methodology and its benefits.What is the difference between white-box and black-box testing?",
    "What are the phases of the Software Development Life Cycle (SDLC)?",
  ]);
  const [newpreference, setNewpreference] = useState("");
  const [bookMark, setBookmark] = useState(false);
  const scrollcontainer = useRef();

  const handlenewpreference = (e) => {
    setNewpreference(e.target.value);
  };

  const handleAddpreference = () => {
    setPreferences([...preferences, newpreference]);
  };

  const handleDeletepreference = (pref) => {
    setPreferences((preferences) =>
      preferences.filter((items) => items != pref)
    );
  };
  const handlebookmark = () => {
    setBookmark(!bookMark);
  };
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
        <div className="flex flex-row gap-[1.5rem] justify-between h-[10%] w-[100%] border-b-[1px] border-[#e1e1e1] overflow-y-none">
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
              className="h-[55%] w-[70%] border-[1px] border-[#b8b6b6] px-[3.5rem] rounded-[0.1rem] text-[14px] bg-[#f2f2f2] outline-none focus:border-black"
            />
          </div>

          <div className="flex flex-row gap-[1.5rem] px-[0.75rem] py-[0.75rem] gap-[0.90rem] justify-center items-center h-[100%] w-[18%]">
            <button
              onClick={handlePopup}
              className="mx-[2.5px] my-[2.5px] px-[30px] py-[5px] bg-[#4d4d4d] border-[0.5px] text-white rounded-[5px] font-bold text-[15px] hover:bg-[#ffffff] hover:text-[#4d4d4d] hover:border-[0.5px] hover:border-[#4d4d4d] transition duration-150"
            >
              Login
            </button>
            <img
              src="assets\profile.png"
              className="w-[3rem] h-[3rem] rounded-[1.75rem]"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-row">
          <div className="h-[90%] w-[18%]  border-[#e1e1e1] border-r-[1px] flex flex-col gap-[0rem] justify-center items-center">
            <div className="flex flex-col h-[40%] w-[100%] gap-[0.6rem] justify-center items-center">
              <button
                onClick={() => {
                  setClickhome(true);
                  setClickaddquestion(false);
                  setClicknotification(false);
                }}
                className={`flex flex-row items-center  gap-[1rem] ${
                  clickHome ? "text-black" : "text-[#585858]"
                }  text-[13px] h-[2.5rem] w-[12rem] pl-[1.5rem] ${
                  clickHome &&
                  " bg-[#e1e1e1] font-medium rounded-[0.2rem] scale-[1.1] transition duration-300 ease-in-out"
                }`}
              >
                {clickHome ? (
                  <GoHomeFill className="h-[1.4rem] w-[1.6rem]" />
                ) : (
                  <GoHome className="h-[1.4rem] w-[1.6rem]" />
                )}
                Home
              </button>

              <button
                onClick={() => {
                  setClickhome(false);
                  setClickaddquestion(true);
                  setClicknotification(false);
                }}
                className={`flex flex-row items-center  gap-[1rem] ${
                  clickAddquestion ? "text-black" : "text-[#585858]"
                }  text-[13px] h-[2.5rem] w-[12rem] pl-[1.5rem] ${
                  clickAddquestion &&
                  "bg-[#e1e1e1] rounded-[0.2rem] font-medium scale-[1.1] transition duration-300"
                } `}
              >
                <BsPencilSquare className="h-[1.4rem] w-[1.6rem]" />
                Add Question
              </button>

              <button
                onClick={() => {
                  setClickhome(false);
                  setClickaddquestion(false);
                  setClicknotification(true);
                }}
                className={`flex flex-row items-center  gap-[1rem] ${
                  clickNotification ? "text-black" : "text-[#585858]"
                } text-[13px] h-[2.5rem] w-[12rem] pl-[1.5rem] ${
                  clickNotification &&
                  " bg-[#e1e1e1] rounded-[0.2rem] font-medium scale-[1.1] transition duration-300"
                }`}
              >
                {clickNotification ? (
                  <BsBellFill className="h-[1.4rem] w-[1.6rem]" />
                ) : (
                  <BsBell className="h-[1.4rem] w-[1.6rem]" />
                )}
                Notification
              </button>
            </div>
            <hr className="w-[60%] border-t-1 border-gray-400" />

            <div className="flex flex-col h-[40%] gap-[1.5rem] w-[100%] justify-center items-center ">
              <div className="flex flex-row pr-auto">
                <div className="text-[14px] font-medium text-[#585858] flex flex-row pr-[6.5rem] items-center">
                  <p>Prefernces</p>
                </div>
              </div>
              <div className="flex flex-row h-[40%] w-[90%] justify-center items-center gap-[0.5rem]">
                <FaAngleLeft
                  onClick={handleLeftscroll}
                  className="cursor-pointer h-[0.8rem]"
                />
                <div
                  ref={scrollcontainer}
                  className="h-[100%] w-[80%] flex flex-col flex-wrap items-center gap-[1rem]  overflow-x-auto scrollbar-none "
                >
                  {preferences.map((pref, index) => (
                    <div
                      key={index}
                      className="w-auto h-[35%]  px-[0.6rem] justify-center items-center flex flex-row gap-[0.8rem] bg-[#e1e1e1] rounded-[2rem]"
                    >
                      <p className="text-[13px]">{pref}</p>
                      <MdCancel
                        className="cursor-pointer h-[1.2rem] w-[1.2rem]"
                        onClick={() => handleDeletepreference(pref)}
                      />
                    </div>
                  ))}
                </div>
                <FaAngleRight
                  onClick={handleRightscroll}
                  className="cursor-pointer h-[0.8rem]"
                />
              </div>
            </div>
            <div className="flex flex-col h-[30%] w-[100%] bg-[#333333] justify-center items-center">
              <button
                onClick={() => {
                  setAbout(false);
                  setHelp(true);
                }}
                className={`flex flex-row items-center  gap-[1rem] text-white  text-[13px] h-[2.5rem] w-[12rem] pl-[1.5rem] ${
                  clickHelp && "bg-[#5c5c5c] rounded-[0.5rem]"
                } `}
              >
                <HiMiniQuestionMarkCircle className="h-[1.5rem] w-[1.5rem]" />
                Help
              </button>
              <button
                onClick={() => {
                  setAbout(true);
                  setHelp(false);
                }}
                className={`flex flex-row items-center  gap-[1rem] text-white  text-[13px] h-[2.5rem] w-[12rem] pl-[1.5rem] ${
                  clickAbout && "bg-[#5c5c5c] rounded-[0.5rem]"
                } `}
              >
                <IoAlertOutline className="h-[1.6rem] w-[1.6rem] rotate-[180deg]" />
                About us
              </button>
            </div>
          </div>
          <div className="flex flex-col h-[90%] gap-[0.5rem] w-[60%]  items-center overflow-y-auto scrollbar-none py-[1rem]">
            {doubts.map((doubt, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="h-[20rem] w-[80%] flex flex-col py-[2rem] px-[2.5rem] gap-[1.8rem] hover:bg-[#f2f2f2] hover:rounded-[1rem] transition delay-100 duration-120 ease-in-out"
                  >
                    <div className="h-[30%] w-[100%] flex flex-row justify-between justify-center itmes-center">
                      <div className="h-[100%] w-[100%] flex flex-row items-center gap-[1rem]">
                        <img
                          src={profiles[index]}
                          className="rounded-[1.5rem] h-[3rem] w-[3rem]"
                        />
                        <div>
                          <div className="flex flex-row gap-[0.8rem] items-center">
                            <p className="text-[15px] font-bold font-sans">
                              {users[index]}
                            </p>
                            <p className="text-[#2a2eff] text-[13px]">
                              {updatetime[index]}
                            </p>
                          </div>
                          <p className="text-[13px] text-[#585858]">
                            {department[index]}
                          </p>
                        </div>
                      </div>
                      {bookMark ? (
                        <FaBookmark
                          onClick={handlebookmark}
                          className="cursor-pointer hover:scale-[1.1] transition delay-100"
                        />
                      ) : (
                        <FaRegBookmark
                          onClick={handlebookmark}
                          className="cursor-pointer hover:scale-[1.1] transition delay-100"
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-[14px]">{doubts[index]}</p>
                    </div>
                    <div className="flex flew-row justify-between items-center">
                      <a
                        href="#_"
                        class="px-3 text-sm py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-[#03346E] inline-block border-[1px] border-[#03346E]"
                      >
                        <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#03346E] group-hover:h-full opacity-90 "></span>
                        <span class="relative group-hover:text-white flex flex-row gap-[0.5rem] justify-center items-center">
                          <FaComment className="h-[1.2rem] w-[1.2rem]" />
                          Give Solution
                        </span>
                      </a>
                      <button
                        className={`flex flex-row items-center justify-center gap-[0.5rem] text-black font-medium  text-[13px] h-[2.5rem] w-[4rem]  
                       bg-[#cccccc] rounded-[2rem]
                      `}
                      >
                        <MdPersonOutline className="h-[1rem] w-[1rem] " />
                        {solutioncount[index]}
                      </button>
                    </div>
                  </div>
                  <hr className="w-[70%] border-t-1 border-gray-300" />
                </>
              );
            })}
          </div>
          <div className="w-[28%] h-[100%] bg-[#ffffff] flex flex-row ">
            <div className="ml-[10%] mt-[25%] w-[90%] h-[45%] bg-[#333333] flex flex-col justify-center items-center gap-[1rem] rounded-l-[3rem] relative overflow-hidden ">
              {messageicon ? (
                <AiFillMessage className="w-[1.8rem] h-[2rem] text-white" />
              ) : (
                <AiOutlineMessage className="w-[1.8rem] h-[2rem] text-white" />
              )}
              <h2 className="font-medium text-white">
                Discuss and exchange your ideas
              </h2>
              <button
                onClick={handlePopup}
                className="mx-[2.5px] my-[2.5px] px-[30px] py-[5px] bg-[#4d4d4d] border-[0.5px] text-white rounded-[1rem]  font-bold text-[15px] hover:bg-[#ffffff] hover:text-[#4d4d4d] hover:border-[0.5px] hover:border-[#ffffff]  transition duration-150"
              >
                Discuss
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
