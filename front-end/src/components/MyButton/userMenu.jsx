import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, CheckCircle, MailCheck, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Login_btn from "./login_btn";
import VerifyEmailBtn from "./VerifyEmailBtn";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const isVerified = useSelector((state) => state.isAuth.isVerified);
  const userEmail = useSelector((state) => state.isAuth.user?.email);
  const userName = useSelector((state) => state.isAuth.user?.name);



  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      
          <div
              className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
          navigate('/my-profile');
        }}
              onMouseEnter={() => setIsOpen(true)}
          >
              {userName?.[0] ? (
                  <p className="text-black text-xl font-bold">{userName[0]}</p>
              ) : (
                  <User className="text-black w-5 h-5"/>
              )}
          </div>

      {isOpen && (
        <div className="absolute top-12 right-0 backdrop-blur-2xl shadow-lg rounded-xl w-48 p-3 z-50 space-y-2 border">
          {!isVerified && (

            <VerifyEmailBtn/>
          )}
          <p className="text-xs">{userEmail}</p>
          <Login_btn />
        </div>
      )}
    </div>
  );
}
