import React from 'react'
import { PlusOutlined } from "@ant-design/icons";

function AddSign() {
  return (
    <div className="flex items-center self-start justify-evenly mt-3 h-10 w-28  text-[10px]">
      <PlusOutlined style={{ fontSize: "22px" }} /> <span>Add a question</span>
    </div>
  );
}

export default AddSign
