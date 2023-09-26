import React from "react";
import SideNav from "./components/organisms/sideNav";
import Navbar from "./components/organisms/navBar";

export default function Home() {
  return (
    <main className="flex bg-white text-black h-screen">
      <SideNav />
      <div className="flex w-full h-20 mt-20">
        <Navbar />
      </div>
    </main>
  );
}
