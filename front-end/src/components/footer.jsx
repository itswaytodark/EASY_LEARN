import { Facebook, Instagram, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-black/10 backdrop-blur-md text-white border-t border-white/20 py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} SkillAI. All rights reserved.</p>
        
        <div className="flex items-center space-x-6">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
