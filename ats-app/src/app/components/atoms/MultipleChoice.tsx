import React, { useState } from "react";
import {
  CaretDownOutlined,
  UnorderedListOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Select, ConfigProvider } from "antd";
import MCL from "./MCL";

const OPTIONS = [
  "Paragraph",
  "Multiple choice",
  "Yes/No",
  "Dropdown",
  "Date",
  "Number",
  "File upload",
  "Video question",
];


const MultipleChoice: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <div className="w-full flex flex-col justify-center items-center p-4 text-xs gap-4">
      <ConfigProvider
        theme={{
          components: {
            Select: {
              fontSize: "12px",
              optionPadding: "8px 12px",
            },
          },
        }}
      >
        <Select
          className="customSelect"
          placeholder="Multiple choice"
          suffixIcon={<CaretDownOutlined className="text-gray-700" />}
          value={selectedItems}
          onChange={setSelectedItems}
          style={{ width: "100%", height: "40px", fontSize: "13px" }}
          options={filteredOptions.map((item) => ({
            value: item,
            label: item,
          }))}
        />
      </ConfigProvider>

      <div className="flex flex-col w-full mt-2 ">
        <label htmlFor="question">Question</label>
        <input
          className="w-full h-10 border-[1px] rounded-sm p-2 mt-1 hover:ring-[1px] ring-blue-400 transition-all focus:outline-none"
          id="question"
          placeholder="Type here"
        ></input>
      </div>
      <div className="w-full">
        <span className="ml-6">Choice</span>

        <div className="flex w-full gap-2">
          <UnorderedListOutlined style={{ fontSize: "16px" }} />
          <MCL />
          <PlusOutlined style={{ fontSize: "16px" }} />
        </div>
        <div className="flex items-center gap-1 mt-2">
          <input
            className="accent-[#087B2F] transition-all"
            type="checkbox"
            placeholder="check-box-item"
          />
          <label>Enable other options</label>
        </div>
        <div className="flex flex-col w-full mt-5 ">
          <label htmlFor="question">Max choice allowed</label>
          <input
            className="w-full h-10 border-[1px] rounded-sm p-2 mt-1 hover:ring-[1px] ring-blue-400 transition-all focus:outline-none"
            id="question"
            placeholder="Enter a number of choice here"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default MultipleChoice;