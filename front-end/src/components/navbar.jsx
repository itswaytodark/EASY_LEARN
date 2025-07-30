import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, BrainCircuit } from "lucide-react";
import { useState } from "react";
import Login_btn from "./MyButton/login_btn";
import LikedBlogsIcon from "./MyButton/LikedblogIcon";
import { useSelector } from "react-redux";
import VerifyEmailBtn from "./MyButton/VerifyEmailBtn";
import UserMenu from "./MyButton/userMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const userEmail = useSelector((state) => state.isAuth.user?.email);

  return (
    <nav className="fixed w-full bg-black/10 backdrop-blur-md border-b border-neutral-900 shadow-sm z-50 px-4 sm:px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" onClick={() => setIsOpen(false)}>
        <div className="flex items-center gap-2">
          <BrainCircuit size={36} className="text-orange-400" />
          <h1 className="text-3xl font-light whitespace-nowrap">EASY LEARN</h1>
        </div>
      </Link>

      {/* Centered Links (Desktop only) */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex items-center gap-12 text-[17px]">
          <li className="hover:text-gray-400">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link to="/AITeacher" onClick={() => setIsOpen(false)}>AI BlogsBot</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link to="/AboutUs" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/liked-blogs" onClick={() => setIsOpen(false)}>
              <LikedBlogsIcon />
            </Link>
          </li>

          <li className="px-5 py-2">
            {/* <VerifyEmailBtn /> */}
          </li>
        </ul>
      </div>



      {/* Right side (Login & Mobile toggle) */}
      <div className="flex items-center gap-4 mx-4">
        <div className="hidden md:block text-right">
          {/* <p className="text-xs text-white/70 mb-1">{userEmail}</p> */}
        
          <UserMenu/>
        
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-start px-6 py-4 z-40 text-3xl gap-3">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
          </li>
          <li>
            <Link to="/AITeacher" onClick={() => setIsOpen(false)}>AI BlogsBot</Link>
          </li>
          <li>
            <Link to="/AboutUs" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/liked-blogs" onClick={() => setIsOpen(false)}><LikedBlogsIcon /></Link>
          </li>
          <li className="px-5 py-2">
            <VerifyEmailBtn />
          </li>
            
          <li onClick={() => setIsOpen(false)}>
            <p className="text-xs text-white/70 mb-1">{userEmail}</p>
            <Login_btn />

          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
