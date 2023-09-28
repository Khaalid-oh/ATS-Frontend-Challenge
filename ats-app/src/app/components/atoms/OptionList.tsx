import React, {useState} from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Select, ConfigProvider,} from "antd";

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

const OptionList: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
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
        placeholder="Paragraph"
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
  );
};

export default OptionList;
