import React, { useState } from "react";
import { Select, ConfigProvider } from "antd";

const OPTIONS = ["Choice 1", "Choice 2", "Choice 3", "Choice 4", "Choice 5"];

const MCL: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            fontSize: 12,
            optionPadding: "8px 12px",
          },
        },
      }}
    >
      <Select
        mode="multiple"
        className="customSelect"
        placeholder="Type here"
        suffixIcon={null}
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

export default MCL;
