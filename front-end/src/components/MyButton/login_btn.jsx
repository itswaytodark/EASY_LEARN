import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
const Login_btn = () => {
    return (
        <div className=" md:flex ml-auto">

          <Link to='/login'>
          <Button
          variant="outline"
          >
            Login
          </Button>
          </Link>
        
      </div>
    )
}

export default Login_btn