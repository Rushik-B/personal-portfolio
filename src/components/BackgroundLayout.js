import React from 'react';

const BackgroundLayout = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      {/* Main background with subtle gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Subtle noise texture overlay */}
      <div 
        className="fixed inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Subtle glow effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundLayout;