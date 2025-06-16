import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm z-50 flex items-center px-6  ">
      
      <Link to="/">
        <h1 className="text-3xl font-extralight pointer">
          EASY LEARN
        </h1>
      </Link>

      <ul className="flex  text-lg w-full justify-center">
        <li className="hover:text-gray-400 transition-colors text-lg px-5">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-400 transition-colors text-lg px-5">
          <Link to="/store">Courses</Link>
        </li>
        <li className="hover:text-gray-400 transition-colors text-lg px-5">
          <Link to="/about">AI Teacher</Link>
        </li>
        <li className="hover:text-gray-400 transition-colors text-lg px-5">
          <Link to="/about">About Us</Link>
        </li>
      </ul>

      
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" >
            Login
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
          </DialogHeader>

          
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 rounded-md"
          />
          <Button variant="secondary" className="w-full">
            Sign in
          </Button>


        </DialogContent>
      </Dialog>
    </nav>
  )
}

export default Navbar;
