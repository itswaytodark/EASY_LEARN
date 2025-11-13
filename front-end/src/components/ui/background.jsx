import React from 'react';

const Background = () => {
  // Define Aurora-specific colors
  const DarkBackground = 'hsl(var(--background))'; // Retain theme dark background
  const PurpleLight = 'rgba(191, 0, 255, 0.4)';  // Bright Purple (Primary)
  const LightGreen = 'rgba(128, 255, 170, 0.35)'; // Light Green/Cyan (Accent)
  const BlueLight = 'rgba(0, 150, 255, 0.3)';   // Medium Blue (Secondary)

  return (
    // CRITICAL: fixed inset-0 and pointer-events-none ensure scrollability.
    <div
      className="fixed inset-0 w-full h-full bg-background text-foreground overflow-hidden z-0 pointer-events-none"
      aria-hidden="true" 
      style={{ backgroundColor: DarkBackground }} 
    >
      {/* --- Aurora Layers --- */}
      
      {/* Layer 1: Purple Band - slow, large movement */}
      <div 
        className="absolute top-1/4 left-1/4 w-[70vw] h-[70vh] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle at center, ${PurpleLight} 0%, transparent 70%)`,
          animation: 'aurora-movement-1 30s ease-in-out infinite alternate',
          filter: 'blur(80px)' 
        }}
      ></div>

      {/* Layer 2: Light Green Band - medium speed, smaller movement */}
      <div 
        className="absolute bottom-1/3 right-1/4 w-[60vw] h-[60vh] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle at center, ${LightGreen} 0%, transparent 70%)`,
          animation: 'aurora-movement-2 25s ease-in-out infinite alternate',
          filter: 'blur(70px)'
        }}
      ></div>

      {/* Layer 3: Blue Band - faster, more erratic movement */}
      <div 
        className="absolute top-1/2 left-1/2 w-[50vw] h-[50vh] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle at center, ${BlueLight} 0%, transparent 70%)`,
          animation: 'aurora-movement-3 20s ease-in-out infinite alternate',
          filter: 'blur(60px)'
        }}
      ></div>

      {/* Layer 4: Deep Purple Background Glow - very slow, large scale */}
      <div 
        className="absolute -bottom-1/4 -left-1/4 w-[90vw] h-[90vh] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle at center, ${PurpleLight} 0%, transparent 80%)`,
          animation: 'aurora-movement-4 40s ease-in-out infinite alternate',
          filter: 'blur(90px)'
        }}
      ></div>
    </div>
  );
};

export default Background;