import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDoubleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen">
      {/* Double-click trigger area */}
      <div
        className="fixed top-0 left-0 w-8 h-screen z-40"
        onDoubleClick={handleDoubleClick}
      />

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        onDoubleClick={handleDoubleClick}
      />

      {/* Main content */}
      <main 
        className={`min-h-screen transition-all duration-300 ${
          isSidebarOpen ? 'ml-[300px]' : 'ml-0'
        }`}
      >
        {children}
      </main>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;