import Background from "../components/ui/background";
import {
  LucidePenTool,
  LucideUsers,
  LucideMessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function About_us_page() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <LucidePenTool className="w-8 h-8 text-indigo-400" />,
      title: "Write & Upload",
      desc: "Empower writers to create and share their blogs with the world on our easy-to-use platform.",
    },
    {
      icon: <LucideUsers className="w-8 h-8 text-green-400" />,
      title: "Join the Community",
      desc: "Connect with thousands of bloggers and readers, discover fresh perspectives and inspiring stories.",
    },
    {
      icon: <LucideMessageCircle className="w-8 h-8 text-pink-400" />,
      title: "AI Blog Assistant",
      desc: "Get writing help anytime — our AI assistant supports you to craft engaging and polished blog posts.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <Background />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 py-16 mt-26">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-marcellus mb-4">
            Discover, Write & Connect
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            At <span className="text-amber-600 font-semibold">Your Blog Hub</span>, everyone can share their voice — 
            and get inspired by our vibrant blogging community and AI assistant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              onClick={() => navigate("/blogs")}
              key={index}
              className="bg-white/5 border border-white/20 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/10 cursor-pointer"
              role="button"  
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About_us_page;
