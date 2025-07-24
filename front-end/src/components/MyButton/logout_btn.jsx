import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
const Logout_btn = () => {
    return (
        <div className=" md:flex ml-auto">

          <Link to='/login'>
          <Button
          variant="outline"
          >
            Logout
          </Button>
          </Link>
        
      </div>
    )
}

export default Logout_btn