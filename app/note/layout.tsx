import React from "react";
import Sidebar from "../_components/sidebar";
import Navbar from "../_components/navbar";

const NoteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <Sidebar />
      <Navbar />
      {children}
    </div>
  );
};

export default NoteLayout;
