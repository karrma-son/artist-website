import React from "react";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center">
      <main className="w-full max-w-6xl p-6">{children}</main>
    </div>
  );
};

export default MainLayout;