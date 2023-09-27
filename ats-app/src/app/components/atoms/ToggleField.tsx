import React, { useState } from "react";
import { Switch } from "antd-mobile";

const ToggleField = ({ label='label' }: { label: string }) => {

  const [switched, setSwitched] = useState(false);

  return (
    <div className="flex justify-between w-full">
      <span>{label}</span>
      <div className="flex items-center  justify-center gap-10">
        <div className="flex items-center justify-center gap-1">
          <input
            className="accent-[#087B2F] transition-all"
            type="checkbox"
            placeholder="check-box-item"
          />
          <label>Internal</label>
        </div>
        <div className="flex items-end justify-center gap-1">
          <Switch
            checked={switched}
            onChange={() => setSwitched(!switched)}
            style={{
              "--checked-color": "#087B2F",
              "--height": "18px",
              "--width": "32px",
              "--border-width": "1px",
            }}
          />
          <span>Hide</span>
        </div>
      </div>
    </div>
  );
};

export default ToggleField;
