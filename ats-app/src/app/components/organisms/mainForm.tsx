import React, { useState, useRef, useEffect } from "react";

import FormSection from "./formSection";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import AddQuestion from "../atoms/AddQuestion";
import ToggleField from "../atoms/ToggleField";
import Questions from "../atoms/Paragraph";
import DeleteQuestion from "../atoms/DeleteQuestion";
import MultipleChoice from "../atoms/MultipleChoice";
import { handleFetchApi } from "@/app/services/fetchAPI";

const MainForm = () => {
  const path = "programs/voluptates/application-form";

  const getData = async () => {
    try {
      const { data } = await handleFetchApi({ path });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const sendData = async (body: any) => {
    try {
      const { data } = await handleFetchApi({
        path,
        method: "put",
        body: {
          data: body,
        },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const dataToSend = {
    id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    type: "applicationForm",
    attributes: {
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
    },
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

  const [extraFields, setExtraFields] = useState<string[]>([]);

  const [coverImage, setCoverImage] = useState(null);

  const fileInput = useRef(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target.files[0];

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
    setIsVisible(true);
  };
  const toggleInvisibility: () => void = () => {
    setIsVisible(false);
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-10 transition-all"
      >
        <FormSection noPadding={true} title="Upload cover image">
          {!coverImage ? (
            <div className="flex flex-col items-center justify-center h-40 p-4 m-4 border-[1px] border-dashed border-gray-500 rounded-md">
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
            <div className="w-full h-full flex items-center justify-center">
              <img src={coverImage} alt="Preview" width="200" />
            </div>
          )}
          <button
            type="button"
            className="flex items-center justify-center self-start p-2 font-semibold text-red-700"
            onClick={handleDeleteOrReUpload}
          >
            {coverImage ? (
              <div className="flex items-center justify-center ml-2 gap-2 p-2 rounded-md hover:bg-red-50 transition-all">
                <DeleteOutlined style={{ fontSize: "15px" }} />
                <span className="">Delete & re-upload</span>
              </div>
            ) : (
              " "
            )}
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
          {isVisible && (
            <div className="flex flex-col w-full">
              <Questions />
              <DeleteQuestion
                onClick={toggleInvisibility}
                save={() => sendData(dataToSend)}
              />
              <MultipleChoice />
            </div>
          )}

          <AddQuestion onClick={toggleVisibility} />
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

        <FormSection title="Additional">{/* FormSection */}</FormSection>
      </form>
    </div>
  );
};

export default MainForm;
