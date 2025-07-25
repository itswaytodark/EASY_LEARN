import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { onLogout } from "../../REDUX/slices/isAuth"; 

const Logout_btn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const baseUrl = import.meta.env.VITE_BASE_URL


  const handleLogout = async () => {
    try {
      
      await axios.post(`${baseUrl}/api/auth/logout`, {}, { withCredentials: true });

      
      dispatch(onLogout());
      localStorage.removeItem('authUser');
      localStorage.removeItem('isAuth');

      
      navigate('/login');
    } catch (error) {
      console.error("Logout failed:", error);
      
    }
  };

  return (
    <div className="md:flex ml-auto">
      <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
        <LogOut size={18} />
        Logout
      </Button>
    </div>
  );
};

export default Logout_btn;
