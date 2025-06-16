import React from 'react';

const Background = () => {
  return (
     <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-950 text-white font-inter">

      {/* Glowing Gradient Background Elements */}
      {/* Glow 1: Top-left purple/blue */}
      <div className="absolute -top-60 -left-60 h-112 w-112 rounded-full bg-gradient-to-br from-purple-700 to-blue-500 opacity-60 blur-3xl mix-blend-screen animate-pulse-slow"></div>
      {/* Glow 2: Mid-right blue/cyan */}
      <div className="absolute top-1/4 right-0 h-100 w-100 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 opacity-60 blur-3xl mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      {/* Glow 3: Bottom-left indigo/violet */}
      <div className="absolute -bottom-40 left-1/12 h-128 w-128 rounded-full bg-gradient-to-br from-indigo-500 to-violet-400 opacity-60 blur-3xl mix-blend-screen animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      {/* Glow 4: Center-right sky/light blue */}
     
      <div className="absolute -top-20 right-1/10 h-80 w-80 rounded-full bg-gradient-to-br from-purple-800 to-indigo-600 opacity-60 blur-3xl mix-blend-screen animate-pulse-slow" style={{ animationDelay: '8s' }}></div>
      
      
      {/* Gradient Fade at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-950 to-transparent z-20"></div>

      {/* Content Layer is now empty - ensures no text/buttons appear */}
      <div className="relative z-10 text-center">
        {/* All text and buttons have been removed from here */}
      </div>

      {/* Custom Animations */}
      <style>
        {`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 15s infinite ease-in-out alternate;
        }
        `}
      </style>
    </div>
  );
};

export default Background;
