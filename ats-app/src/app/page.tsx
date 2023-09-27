import React from "react";
import SideBar from "./components/organisms/sideBar";
import Navbar from "./components/organisms/navBar";

export default function Home() {
  return (
    <main className="flex bg-white text-black h-screen">
      <SideBar />
      <div className="flex w-full h-20 mt-20">
        <Navbar />
      </div>
    </main>
  );
}
