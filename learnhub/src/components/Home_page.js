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
      <div className="flex flex-col w-full h-full bg-gray-100 overflow-hidden">
        <div className="flex flex-row gap-6 justify-between h-16 w-full border-b border-gray-300 bg-white shadow-md">
          <div className="flex flex-row gap-6 px-4 py-2 items-center h-full w-1/5">
            <img src="assets\SU.png" className="w-10 h-10 rounded-full" />
            <p className="font-extrabold text-orange-600 text-xl">
              Learn
              <span className="font-extrabold text-black text-xl">Hub</span>
            </p>
          </div>

          <div className="flex flex-row justify-center items-center h-full w-1/2 gap-6 px-4">
            <IoSearchOutline className="h-6 w-6 relative left-10" />
            <input
              type="text"
              placeholder="Search"
              className="h-10 w-3/4 border border-gray-400 px-10 text-sm bg-gray-200 outline-none focus:border-black"
            />
          </div>

          <div className="flex flex-row gap-6 px-4 py-2 items-center h-full w-1/5">
            <button
              onClick={handlePopup}
              className="px-6 py-2 bg-gray-800 text-white rounded-md font-bold text-sm hover:bg-white hover:text-gray-800 hover:border hover:border-gray-800 transition duration-150"
            >
              Login
            </button>
            <img src="assets\profile.png" className="w-10 h-10 rounded-full" />
          </div>
        </div>
        <div className="w-full h-full flex flex-row">
          <div className="h-full w-1/5 border-r border-gray-300 flex flex-col gap-4 justify-center items-center shadow-lg bg-white">
            <div className="flex flex-col h-1/2 w-full gap-4 justify-center items-center">
              <button
                onClick={() => {
                  setClickhome(true);
                  setClickaddquestion(false);
                  setClicknotification(false);
                }}
                className={`flex flex-row items-center gap-4 ${
                  clickHome ? "text-black" : "text-gray-600"
                } text-sm h-10 w-3/4 pl-6 ${
                  clickHome &&
                  "bg-gray-300 font-medium rounded-md scale-105 transition duration-300 ease-in-out"
                }`}
              >
                {clickHome ? (
                  <GoHomeFill className="h-6 w-6" />
                ) : (
                  <GoHome className="h-6 w-6" />
                )}
                Home
              </button>

              <button
                onClick={() => {
                  setClickhome(false);
                  setClickaddquestion(true);
                  setClicknotification(false);
                }}
                className={`flex flex-row items-center gap-4 ${
                  clickAddquestion ? "text-black" : "text-gray-600"
                } text-sm h-10 w-3/4 pl-6 ${
                  clickAddquestion &&
                  "bg-gray-300 rounded-md font-medium scale-105 transition duration-300"
                }`}
              >
                <BsPencilSquare className="h-6 w-6" />
                Add Question
              </button>

              <button
                onClick={() => {
                  setClickhome(false);
                  setClickaddquestion(false);
                  setClicknotification(true);
                }}
                className={`flex flex-row items-center gap-4 ${
                  clickNotification ? "text-black" : "text-gray-600"
                } text-sm h-10 w-3/4 pl-6 ${
                  clickNotification &&
                  "bg-gray-300 rounded-md font-medium scale-105 transition duration-300"
                }`}
              >
                {clickNotification ? (
                  <BsBellFill className="h-6 w-6" />
                ) : (
                  <BsBell className="h-6 w-6" />
                )}
                Notification
              </button>
            </div>
            <hr className="w-3/4 border-t border-gray-400" />

            <div className="flex flex-col h-1/2 gap-6 w-full justify-center items-center">
              <div className="flex flex-row w-full px-6">
                <div className="text-sm font-medium text-gray-600 flex flex-row w-full items-center">
                  <p>Preferences</p>
                </div>
              </div>
              <div className="flex flex-row h-1/2 w-3/4 justify-center items-center gap-2">
                <FaAngleLeft
                  onClick={handleLeftscroll}
                  className="cursor-pointer h-4"
                />
                <div
                  ref={scrollcontainer}
                  className="h-full w-3/4 flex flex-col flex-wrap items-center gap-2 overflow-x-auto scrollbar-none"
                >
                  {preferences.map((pref, index) => (
                    <div
                      key={index}
                      className="w-auto h-8 px-2 justify-center items-center flex flex-row gap-2 bg-gray-300 rounded-full"
                    >
                      <p className="text-sm">{pref}</p>
                      <MdCancel
                        className="cursor-pointer h-5 w-5"
                        onClick={() => handleDeletepreference(pref)}
                      />
                    </div>
                  ))}
                </div>
                <FaAngleRight
                  onClick={handleRightscroll}
                  className="cursor-pointer h-4"
                />
              </div>
            </div>
            <div className="flex flex-col h-1/3 w-full bg-gray-800 justify-center items-center">
              <button
                onClick={() => {
                  setAbout(false);
                  setHelp(true);
                }}
                className={`flex flex-row items-center gap-4 text-white text-sm h-10 w-3/4 pl-6 ${
                  clickHelp && "bg-gray-600 rounded-md"
                }`}
              >
                <HiMiniQuestionMarkCircle className="h-6 w-6" />
                Help
              </button>
              <button
                onClick={() => {
                  setAbout(true);
                  setHelp(false);
                }}
                className={`flex flex-row items-center gap-4 text-white text-sm h-10 w-3/4 pl-6 ${
                  clickAbout && "bg-gray-600 rounded-md"
                }`}
              >
                <IoAlertOutline className="h-6 w-6 rotate-180" />
                About us
              </button>
            </div>
          </div>
          <div className="flex flex-col h-full gap-2 w-3/5 items-center overflow-y-auto scrollbar-none py-4">
            {doubts.map((doubt, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="h-80 w-4/5 flex flex-col py-8 px-10 gap-6 bg-white shadow-md hover:bg-gray-100 hover:rounded-lg transition delay-100 duration-120 ease-in-out"
                  >
                    <div className="h-1/3 w-full flex flex-row justify-between items-center">
                      <div className="h-full w-full flex flex-row items-center gap-4">
                        <img
                          src={profiles[index]}
                          className="rounded-full h-12 w-12"
                        />
                        <div>
                          <div className="flex flex-row gap-2 items-center">
                            <p className="text-base font-bold">
                              {users[index]}
                            </p>
                            <p className="text-blue-600 text-sm">
                              {updatetime[index]}
                            </p>
                          </div>
                          <p className="text-sm text-gray-600">
                            {department[index]}
                          </p>
                        </div>
                      </div>
                      {bookMark ? (
                        <FaBookmark
                          onClick={handlebookmark}
                          className="cursor-pointer hover:scale-110 transition delay-100"
                        />
                      ) : (
                        <FaRegBookmark
                          onClick={handlebookmark}
                          className="cursor-pointer hover:scale-110 transition delay-100"
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-sm">{doubt}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <a
                        href="#_"
                        className="px-3 py-2 text-sm relative rounded group overflow-hidden font-medium bg-purple-50 text-blue-900 inline-block border border-blue-900"
                      >
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-900 group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white flex flex-row gap-2 justify-center items-center">
                          <FaComment className="h-5 w-5" />
                          Give Solution
                        </span>
                      </a>
                      <button className="flex flex-row items-center justify-center gap-2 text-black font-medium text-sm h-10 w-16 bg-gray-300 rounded-full">
                        <MdPersonOutline className="h-4 w-4" />
                        {solutioncount[index]}
                      </button>
                    </div>
                  </div>
                  <hr className="w-3/4 border-t border-gray-300" />
                </>
              );
            })}
          </div>
          <div className="w-1/4 h-full bg-white flex flex-col border-l border-gray-300">
            <div className="mt-32 w-full h-1/2 bg-white flex flex-col justify-center items-center gap-4 rounded-t-lg relative overflow-hidden shadow-md">
              <img src="assets\discussing_img2.jpg" className="h-36 w-48" />
              <h2 className="font-medium text-black">
                Discuss and exchange your ideas!
              </h2>
              <button
                onClick={handlePopup}
                className="px-6 py-2 bg-gray-800 text-white rounded-md font-bold text-sm hover:bg-white hover:text-gray-800 hover:border hover:border-gray-800 transition duration-150"
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
