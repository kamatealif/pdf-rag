"use client";
import * as react from "react";
import { Upload } from "lucide-react";
const FileUpload: React.FunctionComponent = () => {
  const HandleFileUpload = () => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.setAttribute("accept", "application/pdf");
    el.addEventListener("change", async (e) => {
      if (el.files && el.files.length > 0) {
        const file = el.files.item(0);
        if (file) {
          const formData = new FormData();
          formData.append("pdf", file);

          await fetch("http://localhost:8000/upload/pdf", {
            method: "POST",
            body: formData,
          });
          console.log("File uploaded successfully");
        }
      }
    });
    el.click();
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        onClick={HandleFileUpload}
        className="bg-slate-900 text-white rounded-lg border-white border-2 p-4 shadow-2xl flex justify-center gap-x-2 items-center"
      >
        <Upload />
        <h1>Upload PDF File</h1>
      </div>
    </div>
  );
};

export default FileUpload;
