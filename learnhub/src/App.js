import { useState } from "react";
import "./App.css";
import LOGIN_POPUP from "./components/login_popup_card";
import REGISTER_POPUP from "./components/register_popup_card";
import Otp_popup from "./components/OTP_popup_card";
import Home from "./components/Home_page"

function App() {
  const [popup, setPopup] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIslogin] = useState(false);
  const [isOtp, setIsotp] = useState(false);
  const [resend, setResend] = useState(false);
  const [clickstatus,setClickstatus] = useState(false);
  
  const handlePopup = () => {
    setPopup(true);
    setIslogin(true);
    setIsRegister(false);
    setIsotp(false);
  };

  const handleClosePopup = () => {
    setPopup(false);
    setIsRegister(false);
    setIslogin(false);
    setIsotp(false); // Reset isRegister when the popup is closed
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <Home handlePopup={handlePopup}/>
      {popup && (
        <div className="flex flex-col justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
          {isRegister && (
            <REGISTER_POPUP
              setIsotp={setIsotp}
              setIsRegister={setIsRegister}
              setPopup={setPopup}
              resend={resend}
              setResend={setResend}
            />
          )}
          {isLogin && (
            <LOGIN_POPUP
              setIsRegister={setIsRegister}
              setIslogin={setIslogin}
              setPopup={setPopup}
            />
          )}
          {isOtp && (
            <Otp_popup
              setIsotp={setIsotp}
              setIsRegister={setIsRegister}
              setPopup={setPopup}
              resend={resend}
              setResend={setResend}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
