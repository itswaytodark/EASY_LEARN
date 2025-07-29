import { MailCheck } from "lucide-react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify"; 
import { useNavigate } from "react-router-dom";

export default function VerifyEmailBtn() {
  const isVerified = useSelector((state) => state.isAuth.isVerified);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate()

  const sendVerificationOtp = async () => {
    try {
      const res = await axios.post(`${baseUrl}/api/auth/send-verify-otp`,{},{ withCredentials: true });
      toast.success(res.data.message || "OTP sent to your email");
      navigate('Verify-email-otp')
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send OTP");
    }
  };

  if (isVerified) return null;

  return (
    <button
      onClick={sendVerificationOtp}
      className="flex items-center gap-1 text-l text-orange-300 hover:text-white transition"
    >
      <MailCheck size={18} />
      Verify Email
    </button>
  );
}
