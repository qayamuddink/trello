import React from 'react';

const Header = () => {
  return (
    <header
      className="bg-gradient-to-r from-[#1d2125] to-[#2a2f34] h-14 px-6 py-3 border-b border-[#9fadbc29] flex flex-row justify-between items-center"
      style={{
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(45, 78, 255, 0.08)',
      }}
    >
      <div className="flex items-center">
        <h3 className="text-slate-50 text-lg font-semibold tracking-tight">
          Trello Clone
        </h3>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-slate-300 text-sm font-medium">Saad dev</span>
        <img
          className="h-8 w-8 rounded-full border border-[#9fadbc29] object-cover"
          src="https://placehold.co/28x28/png"
          alt="Profile"
        />
      </div>
    </header>
  );
};

export default Header;