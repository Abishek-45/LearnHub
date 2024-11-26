import { useState } from "react";
import "./App.css";
import LOGIN_POPUP from "./components/login_popup_card";
import REGISTER_POPUP from "./components/register_popup_card";

function App() {
  const [popup, setPopup] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handlePopup = () => {
    setPopup(true);
  };

  const handleClosePopup = () => {
    setPopup(false);
    setIsRegister(false); // Reset isRegister when the popup is closed
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <button
        className="mx-[5px] my-[5px] px-[15px] py-[8px] w-[100px] h-[50px] bg-[#4d4d4d] text-white rounded-[3px] font-bold text-[15px]"
        onClick={handlePopup}
      >
        Login
      </button>
      {popup && (
        <div className="flex flex-col justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
          {isRegister ? 
            <REGISTER_POPUP setIsRegister={setIsRegister} setPopup={handleClosePopup} /> : 
            <LOGIN_POPUP setIsRegister={setIsRegister} setPopup={handleClosePopup} />}
        </div>
      )}
    </div>
  );
}

export default App;
