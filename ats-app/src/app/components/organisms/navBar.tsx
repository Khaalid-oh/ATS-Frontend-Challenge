'use client'

import React, { useState } from 'react'
import Pdetails from '../molecules/programDetails';
import AppForm from '../molecules/appForm';
import Workflow from '../molecules/workflow';
import Preview from '../molecules/preview';

function Navbar() {

  const navBar = [
    { id: 0, name: "Program Details" },
    { id: 1, name: "Application Form" },
    { id: 2, name: "Workflow" },
    { id: 3, name: "Preview" },
  ];

  const [active, setActive] = useState <number | null>(1);
  const handleActive = (val: number) => {
    setActive(val)
  }
  return (
    <div className="w-full">
      <nav className="h-20 w-full shadow-lg flex items-center justify-evenly border-[0.1px] rounded-sm">
        {navBar.map((navItem, i) => (
          <div
            className={`flex items-center justify-center border-[1px] border-y-0 border-gray-400 border-l-0 px-10 h-10 transition-all ${
              active === i
                ? "text-white bg-primary h-full w-[14%] relative transition-all rounded-sm after:top-1/2 after:border-l-primary after:h-0 after:w-0 after:border-t-[18px] after:border-t-transparent after:border-b-transparent after:border-b-[18px] after:border-l-[18px] after:content-[' '] after:absolute after:-right-[18px] after:-translate-y-[17px]"
                : " "
            }`}
            key={i}
            onClick={() => handleActive(i)}
          >
            {navItem.name}
          </div>
        ))}
      </nav>
      {active === 0 ? <Pdetails /> : null}
      {active === 1 ? <AppForm /> : null}
      {active === 2 ? <Workflow /> : null}
      {active === 3 ? <Preview /> : null}
    </div>
  );
}

export default Navbar
