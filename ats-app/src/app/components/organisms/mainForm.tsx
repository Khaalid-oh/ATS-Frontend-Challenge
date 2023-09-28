import React, { useState, useRef } from "react";

import FormSection from "./formSection";
import { UploadOutlined } from "@ant-design/icons";
import AddQuestion from "../atoms/AddQuestion";
import ToggleField from "../atoms/ToggleField";
import Questions from "../atoms/Questions";

const MainForm = () => {

  const attributes = {
    coverImage: "http://example.com",
    personalInformation: {
      firstName: {
        internalUse: true,
        show: true,
      },
      lastName: {
        internalUse: false,
        show: true,
      },
      emailId: {
        internalUse: false,
        show: true,
      },
      phoneNumber: {
        internalUse: false,
        show: true,
      },
      nationality: {
        internalUse: false,
        show: true,
      },
      currentResidence: {
        internalUse: false,
        show: true,
      },
      idNumber: {
        internalUse: false,
        show: true,
      },
      dateOfBirth: {
        internalUse: false,
        show: true,
      },
      gender: {
        internalUse: false,
        show: true,
      },
      personalQuestions: [
        {
          id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          type: "Paragraph",
          question: "string",
          choices: ["string"],
          maxChoice: 0,
          disqualify: false,
          other: false,
        },
      ],
    },
    profile: {
      education: {
        mandatory: true,
        show: true,
      },
      experience: {
        mandatory: true,
        show: true,
      },
      resume: {
        mandatory: true,
        show: true,
      },
      profileQuestions: [
        {
          id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          type: "Paragraph",
          question: "string",
          choices: ["string"],
          maxChoice: 0,
          disqualify: false,
          other: false,
        },
      ],
    },
    customisedQuestions: [
      {
        id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        type: "Paragraph",
        question: "string",
        choices: ["string"],
        maxChoice: 0,
        disqualify: false,
        other: false,
      },
    ],
  };


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

  const [showDropdown, setShowDropdown] = useState(false);

  const [extraFields, setExtraFields] = useState<string[]>([]);

  const [coverImage, setCoverImage] = useState(null);

  const handleAddSignClick = () => {
    setShowDropdown;
    setShowDropdown(!showDropdown);
  };

  const handleDropdownChange = (selectedItems: string[]) => {
    setExtraFields;
    setExtraFields(selectedItems);
    setShowDropdown(false);
  };
  const fileInput = useRef(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files[0];

       if (file && file.size > 1024 * 1024) {
         alert("Image size exceeds 1MB");

         return;
       }

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

   const [isVisible, setIsVisible] = useState<boolean>(false);

   const toggleVisibility: () => void = () => {
     setIsVisible(!isVisible);
   };



  return (
    <div className="max-w-sm mx-auto mt-10">
      <form className="flex flex-col gap-10 transition-all">
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
          <button className="mt-2" onClick={handleDeleteOrReUpload}>
            {coverImage ? "Delete & re-upload" : " "}
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
          {isVisible &&  <Questions />}
          <AddQuestion onClick={toggleVisibility} />

          {/* {showDropdown && <Questions onChange={handleDropdownChange} />} */}

          {extraFields.map((field, i) => (
            <div
              className="flex justify-between text-xs border-b-[1px] p-4 w-full"
              key={`extra-${i}`}
            >
              <span>{field}</span>
            </div>
          ))}
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
          {/* <AddQuestion /> */}
        </FormSection>

        <FormSection title="Additional">
          {/* <AddQuestion /> */}
        </FormSection>
      </form>
    </div>
  );
};

export default MainForm;
