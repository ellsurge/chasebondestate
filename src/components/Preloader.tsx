import React from "react";

const Preloader = () => {
  return (
    <div className="w-full h-screen bg-white bg-opacity-60 fixed top-0 left-0 z-20 flex flex-col justify-center items-center gap-20">
      <img className="w-auto h-8 hidden" src="/logo-1.png" alt="" />
      <img className="w-auto h-8" src="/logo-1.png" alt="" />

      <div className="flex items-center absolute bottom-0">
        <h1 className="italic text-[20px]">Powered By: </h1>
        <img className="w-36 h-36" src="/logo-2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Preloader;
