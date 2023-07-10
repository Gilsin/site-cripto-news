import React from "react";

const Header = () => {
  return (
    <section className="fixed top-0 left-0 w-full h-16 bg-blue-200 flex justify-between items-center px-4 rounded-md">
      <h1 className="text-black">Cripto News Researc</h1>
      <div className="text-black">
        <a href="#" className="mr-4">Home</a>
        <a href="#" className="mr-4">LinkedIn</a>
        <a href="#" className="mr-4">Quem sou eu?</a>
        <a href="#" className="mr-4">Plano Cripto master</a>
        <a href="#">Plano Master Cripto</a>
      </div>
    </section>
  );
};

export default Header;
