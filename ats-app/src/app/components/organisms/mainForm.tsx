import React, { useState } from "react";

import FormSection from "./formSection";
import { UploadOutlined } from "@ant-design/icons";
import { Switch} from "antd-mobile";

const MainForm = () => {
  const [switched, setSwitched] = useState(false);

  return (
    <div className="max-w-sm mx-auto mt-10">
      <form className="flex flex-col gap-10">
        <FormSection title="Upload cover image">
          <div className="flex flex-col items-center justify-center h-36 w-full border-[1px] border-dashed border-gray-500 rounded-md">
            <label
              className="flex flex-col items-center justify-center"
              htmlFor="upload-file"
            >
              <UploadOutlined style={{ fontSize: "20px" }} />
              <p className="text-xs font-bold p-2">Upload cover image</p>
              <p className="text-xs text-gray-500">
                16:9 ratio is recommended. Max image size 1mb
              </p>
            </label>
            <input
              className="text-xs w-full text-center hidden"
              id="upload-file"
              type="file"
              placeholder="16:9 ratio is recommended. Max image size 1mb"
            />
          </div>
        </FormSection>

        <FormSection title="Personal Information">
          <input
            className="bg- text-xs border-b-[1px] p-2 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="text-xs border-b-[1px] p-2 w-full"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="text-xs border-b-[1px] p-2 w-full"
            type="text"
            placeholder="Email"
          />

          <div className="flex items-center gap-3 text-xs text-gray-600">
            <div className="flex items-center justify-center gap-1">
              <input
                id="check-item"
                className="accent-[#087B2F] transition-all"
                type="checkbox"
                placeholder="check-box-item"
              />
              <label htmlFor="check-item">Internal</label>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Switch
                checked={switched}
                onChange={() => setSwitched(!switched)}
                style={{
                  "--checked-color": "#087B2F",
                  "--height": "18px",
                  "--width": "32px",
                }}
              />
            <p>Hide</p>
            </div>
          </div>

          {/* Add more fields as needed */}
        </FormSection>

        {/* Add more form sections as needed */}

        <div className="mt-6"></div>
      </form>
    </div>
  );
};

export default MainForm;
