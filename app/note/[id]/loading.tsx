import Loader from "@/app/_components/Loader";
import React from "react";

const loading = () => {
  return (
    <div className="h-screen flex items-center justify-center pl-64">
      <Loader />
    </div>
  );
};

export default loading;
