import React, {useState} from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Select } from "antd";

const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];

const Dropdown: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <Select
      className="customSelect"
      mode="multiple"
      placeholder="Paragraph"
      suffixIcon={<CaretDownOutlined className="text-gray-700"/>}
      value={selectedItems}
      onChange={setSelectedItems}
      style={{ width: "100%", height: "40px", fontSize: "13px" }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
};

export default Dropdown;
