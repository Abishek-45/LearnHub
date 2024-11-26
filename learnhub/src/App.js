import { useState } from "react";
import "./App.css";
import LOGIN_POPUP from "./components/login_popup_card";
import REGISTER_POPUP from "./components/register_popup_card";
function App() {
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup(true);
  };
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <button
        className="mx-[5px] my-[5px] px-[15px] py-[8px] bg-[#4d4d4d] text-white rounded-[3px] font-bold text-[35px]"
        onClick={handlePopup}
      >
        Login
      </button>
      {popup && <LOGIN_POPUP setPopup={setPopup} />}
    </div>
  );
}

export default App;
