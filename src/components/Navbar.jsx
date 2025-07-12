import React from 'react';
import { Brain, Sun, Moon } from 'lucide-react';

const Navbar = ({ onToggleTheme, theme }) => {
  return (
    <div
      className="flex items-center justify-between w-full h-[60px] bg-zinc-900 text-white px-4 sm:px-8 lg:px-[100px]"
    >
      <div className="logo flex items-center gap-[8px] -ml-2 sm:-ml-3 lg:-ml-4">
        <Brain size={22} color="#fb7185" />
        <span className="text-lg sm:text-xl font-bold ml-2">Lintify</span>
      </div>
      <div className="icons flex items-center gap-[16px] mr-2 sm:mr-3 lg:mr-4">
        <button onClick={onToggleTheme} className="theme-toggle-btn" style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'inherit'}}>
          {theme === 'dark' ? <Moon /> : <Sun />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
