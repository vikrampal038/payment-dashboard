import { useState } from "react";
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Top Navbar */}
      <TopNavbar onMenuClick={() => setSidebarOpen(true)} />

      {/* Content below navbar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="h-215 overflow-y-auto bg-[#FCFCFC] shadow-2xl border-2 rounded-md w-415 border-[#d8d8d8]  p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;