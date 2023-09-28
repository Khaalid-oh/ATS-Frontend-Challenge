import React from "react";
import { DeleteOutlined } from "@ant-design/icons";

function DeleteQuestion({
  onClick,
  save,
}: {
  onClick: () => void;
  save: () => void;
}) {
  return (
    <div className="flex items-center px-4 justify-between mt-2">
      <div
        onClick={onClick}
        className="flex items-center justify-start rounded-md text-red-700 hover:bg-red-50 w-[132px] py-2 px-1 gap-2 font-semibold"
      >
        <DeleteOutlined style={{ fontSize: "15px" }} />
        <span className="">Delete question</span>
      </div>
      <div>
        <button
          onClick={save}
          className="bg-green-700 text-white py-[5px] px-[10px] rounded-sm"
        >
          save
        </button>
      </div>
    </div>
  );
}

export default DeleteQuestion;
