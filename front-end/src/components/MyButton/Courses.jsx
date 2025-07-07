import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Courses_btn = () => {
    return(
        <Link to="/courses">
            <Button
              className="relative px-8 py-4 text-white text-lg font-semibold bg-white/15 backdrop-blur-md border 
            border-white/20 rounded-xl transition-all duration-300 ease-in-out hover:bg-white/25 hover:shadow-lg 
            hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Courses
            </Button>


          </Link>
    )
}

export default Courses_btn;