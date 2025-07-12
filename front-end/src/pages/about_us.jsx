import Background from "../components/ui/background";
import { LucideBrainCircuit, LucideUploadCloud, LucideShoppingCart } from "lucide-react";

function About_us_page() {
  const features = [
    {
      icon: <LucideUploadCloud className="w-8 h-8 text-indigo-400" />,
      title: "Upload Courses",
      desc: "Empower educators to share their knowledge by uploading custom courses for others to buy and learn from.",
    },
    {
      icon: <LucideShoppingCart className="w-8 h-8 text-green-400" />,
      title: "Buy & Learn",
      desc: "Explore a variety of affordable, community-driven courses and upgrade your skills at your own pace.",
    },
    {
      icon: <LucideBrainCircuit className="w-8 h-8 text-pink-400" />,
      title: "AI-Powered Teacher",
      desc: "Ask questions anytime — our smart AI teacher is always available to guide you like a personal tutor.",
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
            Learn Smarter with AI Guidance
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            At <span className="text-amber-600 font-semibold">EASY LEARN</span>, anyone can upload and sell their courses —
            while learners get personalized support from our AI Teacher.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/20 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-200"
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
