import React, { useState } from "react";

import FormSection from "./formSection";
import { UploadOutlined } from "@ant-design/icons";
import AddSign from "../atoms/addSign";
import ToggleField from "../atoms/ToggleField";

const MainForm = () => {
  const personInfo = [
    { label: "First Name" },
    { label: "Last Name" },
    { label: "Email" },
    { label: "Phone", type: "toggle-field" },
    { label: "Nationality", type: "toggle-field" },
    {
      label: "Current Residence",
      type: "toggle-field",
    },
    { label: "ID Number", type: "toggle-field" },
    { label: "Date of Birth", type: "toggle-field" },
    { label: "Gender", type: "toggle-field" },
  ];

  const profile = [
    { label: "Education", type: "toggle-field" },
    { label: "Experience", type: "toggle-field" },
    { label: "Resume", type: "toggle-field" },
  ];


  const [coverImage, setCoverImage] = useState(null);

  const fileInput = useRef(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setCoverImage(reader.result);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    };

    const handleDeleteOrReUpload = () => {
      if (coverImage) {
        setCoverImage(null);
      } else {
        fileInput.current.click();
      }
    };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <form className="flex flex-col gap-10">
        <FormSection title="Upload cover image">
          {!coverImage ? (
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
                accept="image/*"
                onChange={handleImageUpload}
                placeholder="16:9 ratio is recommended. Max image size 1mb"
              />
            </div>
          ) : (
            <div>
              <img src={coverImage} alt="Preview" width="200" />
            </div>
          )}
          <button onClick={handleDeleteOrReUpload}>
            {coverImage ? "Delete" : "Re-upload"}
          </button>
        </FormSection>

        <FormSection title="Personal Information">
          {personInfo.map((pInfo, i) => (
            <div
              className="flex justify-between text-xs border-b-[1px] p-4 w-full"
              key={i}
            >
              {pInfo.type === "toggle-field" ? (
                <ToggleField label={pInfo.label} />
              ) : (
                <span>{pInfo.label}</span>
              )}
            </div>
          ))}
          <AddSign />
        </FormSection>

        <FormSection title="Profile">
          {profile.map((profile, i) => (
            <div
              className="flex justify-between text-xs border-b-[1px] p-4 w-full"
              key={i}
            >
              {profile.type === "toggle-field" ? (
                <ToggleField label={profile.label} />
              ) : (
                <span>{profile.label}</span>
              )}
            </div>
          ))}
          <AddSign />
        </FormSection>

        <FormSection title="Additional">
          <AddSign />
        </FormSection>
      </form>
    </div>
  );
};

export default MainForm;
