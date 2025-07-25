import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Background from "../components/ui/background";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { toast } from "react-toastify";

const ResetPassword = () => {

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();
  const { token } = useParams();

  const [newPassword, setnewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {

    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${baseUrl}/api/auth/reset-password/${token}`, { newPassword }, {withCredentials:true} );

      toast.success(res.data.message || "Password reset successfully!");
      localStorage.removeItem('authUser');
      localStorage.removeItem('isAuth');
      // setTimeout(() => navigate("/"), 3000);

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Invalid or expired link. Try again."
      );
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <Background />
      </div>

      <div className="flex h-screen items-center justify-center w-full px-4 py-16">
        <div className="max-w-md w-full text-white">
          <Card className="bg-white/5 border border-white/20 p-5">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-1 text-center">
                Reset your password
              </h2>
              <p className="text-center text-sm font-light text-gray-100 mb-5">
                Enter a new password to reset your account
              </p>
              <form onSubmit={handleReset} className="space-y-4">
                <Input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setnewPassword(e.target.value)}
                  className="bg-white/10"
                  required
                />
                <Button
                  type="ghost"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Resetting..." : "Reset Password"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
