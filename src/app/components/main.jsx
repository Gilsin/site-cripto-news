import React from "react";

const Main = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex-1 mx-8 bg-gray-200 p-8 rounded-md h-2/3">
        <div className="flex flex-col items-end">
          <div className="w-32 h-32 bg-blue-500 mb-4"></div>
          <div className="w-32 h-32 bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
