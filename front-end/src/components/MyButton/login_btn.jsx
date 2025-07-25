import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { onLogout } from "../../REDUX/slices/isAuth"; // adjust import path if needed
import Logout_btn from "./logout_btn";

const Login_btn = () => {
  const isAuth = useSelector((state) => state.isAuth.isAuth);
  const dispatch = useDispatch();

  
  const handleLogout = () => {
    dispatch(onLogout());
  };

  if (isAuth) {
    return (
      
      <Logout_btn/>
    );
  }

  // If not logged in, show Login button linking to /login
  return (
    <div className="md:flex ml-auto">
      <Link to="/login">
        <Button variant="outline">Login</Button>
      </Link>
    </div>
  );
};

export default Login_btn;
