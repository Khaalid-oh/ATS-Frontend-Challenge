import React from 'react'

function DeleteUpload() {
  return (
    <div className="flex items-center justify-start p-2 font-semibold text-red-700">
      <span>Delete & re-upload</span>
      <span className="text-2xl px-2">x</span>
    </div>
  );
}

export default DeleteUpload
