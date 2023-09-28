import React from "react";

type FormSectionProps = {
  title: string;
  description?: string;
  noPadding?: boolean;
  children?: React.ReactNode;
};

const FormSection: React.FC<FormSectionProps> = ({
  title,
  noPadding,
  description,
  children,
}) => {
  return (
    <div className="border rounded-md shadow-md">
      <div className="flex items-center text-sm font-medium bg-cyan p-4 h-10 rounded-t-md">
        <h2 className="">{title}</h2>
      </div>
      {description && <p className="text-sm text-gray-600">{description}</p>}
      <div
        className={`flex flex-col items-center justify-center  ${noPadding ? '' : 'mt-4 p-4'}`}
      >
        {children}
      </div>
    </div>
  );
};

export default FormSection;
