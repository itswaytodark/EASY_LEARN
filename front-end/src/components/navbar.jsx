import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { Menu, X , GraduationCap,BrainCircuit  } from "lucide-react";
import { useState } from "react";
// import Login_btn from "./ui/login_btn";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/10 backdrop-blur-md border-b border-neutral-900 shadow-sm z-50 flex items-center px-6 py-4">
      
      <Link to="/">
        <div className="flex gap-2 items-center">
        <BrainCircuit  size={40} className="text-orange-400" />
        <h1 className="text-3xl font-extralight">
          EASY LEARN
        </h1>
        </div>
      </Link>

      
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle Menu"
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden ml-auto"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </Button>

      
      <ul
        className={`flex flex-col md:flex-row items-center justify-evenly flex-1 absolute md:static left-0 top-16 md:top-0 p-6 md:p-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-500 ease-in-out 
        ${
          isOpen ? "flex" : "hidden md:flex"
        }`}
      >
        <li className="hover:text-gray-400 transition-colors px-5 py-2">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-400 transition-colors px-5 py-2">
          <Link to="/Courses">Courses</Link>
        </li>
        <li className="hover:text-gray-400 transition-colors px-5 py-2">
          <Link to="/AITeacher">AI Teacher</Link>
        </li>
        <li className="hover:text-gray-400 transition-colors px-5 py-2">
          <Link to="/AboutUs">About Us</Link>
        </li>
      </ul>

      {/* <Login_btn/> */}
      

    </nav>
  )
}

export default Navbar;
