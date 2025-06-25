import React from 'react';

const Background = () => {
  return (
    <div
      className="relative flex h-450 items-center justify-center overflow-hidden 
                 bg-gray-950 text-white font-inter p-0 m-0"
      style={{ maskImage: "linear-gradient(to bottom, black 60%, transparent)" }}
    >

      
      <div className="absolute -top-60 -left-60 h-112 w-112 rounded-full bg-gradient-to-br from-purple-700 to-blue-500 opacity-60 blur-3xl mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute sm:top-1/3 top-170  right-0 h-100 w-100 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 opacity-60 blur-3xl mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-40 left-1/12 h-128 w-128 rounded-full bg-gradient-to-br from-indigo-500 to-violet-400 opacity-60 blur-3xl mix-blend-screen animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      <div className="absolute -top-20 right-1/10 h-80 w-80 rounded-full bg-gradient-to-br from-purple-800 to-indigo-600 opacity-60 blur-3xl mix-blend-screen animate-pulse-slow" style={{ animationDelay: '8s' }}></div>

      
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1);opacity: 0.6 }
          50% { transform: scale(1.05);opacity: 0.7 }
        }
        .animate-pulse-slow { animation: pulse-slow 15s infinite ease-in-out alternate }
      `}</style>
    </div>
  )
};

export default Background;
