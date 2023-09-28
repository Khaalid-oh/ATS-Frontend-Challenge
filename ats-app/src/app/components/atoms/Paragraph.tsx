import React from 'react'
import OptionList from './OptionList';

function Paragraph() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-4 text-xs gap-4">
      <div className="flex flex-col w-full gap-1">
        <span>Type</span>
        <OptionList />
      </div>

      <div className="flex flex-col w-full mt-2">
        <label htmlFor="question">Question</label>
        <input
          className="w-full h-10 border-[1px] rounded-sm p-2 mt-1 hover:ring-[1px] ring-blue-400 transition-all focus:outline-none"
          id="question"
          placeholder="Type here">

        </input>
      </div>
    </div>
  );
}

export default Paragraph
