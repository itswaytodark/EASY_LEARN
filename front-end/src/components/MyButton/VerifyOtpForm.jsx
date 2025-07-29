import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { updateVerificationStatus } from "@/REDUX/slices/isAuth";
import Background from "@/components/ui/background";
import { Card, CardContent } from "@/components/ui/card";
import { MailCheck } from "lucide-react";

const VerifyOtpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [otpDigits, setOtpDigits] = useState(["", "", "", ""]);
  const inputsRef = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otpDigits];
    newOtp[index] = value;
    setOtpDigits(newOtp);
    if (value && index < 3) inputsRef[index + 1].current.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      inputsRef[index - 1].current.focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const otp = otpDigits.join("");
    if (otp.length < 4) return toast.error("Enter all 4 digits.");

    try {
      const res = await axios.post(`${baseUrl}/api/auth/verify-email`, { otp }, { withCredentials: true });
      toast.success(res.data.message);
      dispatch(updateVerificationStatus(true));
      setOtpDigits(["", "", "", ""]);
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 -z-10">
        <Background />
      </div>

      <Card className="bg-white/10 backdrop-blur-sm border-white/20 border-2 text-white w-full max-w-md shadow-xl">
        <CardContent className="p-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <MailCheck className="w-12 h-12 text-green-400" />
            <h1 className="text-3xl font-bold text-center">Email Verification</h1>
            <p className="text-sm text-center text-gray-300">
              Enter the 4-digit OTP sent to your registered email.
            </p>
          </div>

          <form onSubmit={handleVerifyOtp} className="mt-6 flex flex-col items-center gap-6">
            <div className="flex gap-4">
              {otpDigits.map((digit, index) => (
                <input
                  key={index}
                  ref={inputsRef[index]}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-14 h-14 sm:w-16 sm:h-16 text-3xl text-center rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              ))}
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 transition px-6 py-2 rounded-md text-white font-semibold"
            >
              Verify
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyOtpForm;
