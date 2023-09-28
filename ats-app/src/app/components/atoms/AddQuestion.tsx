import React from 'react'
import { PlusOutlined } from "@ant-design/icons";
  
  function AddQuestion({ onClick }: { onClick: () => void }) {
    return (
      <div
        onClick={onClick}
        className="flex hover:bg-teal-50 items-center rounded-md self-start justify-evenly mt-3 h-10 w-32 text-[10px]"
      >
        <PlusOutlined style={{ fontSize: "22px" }} />{" "}
        <span>Add a question</span>
      </div>
    );
  }
  
  export default AddQuestion