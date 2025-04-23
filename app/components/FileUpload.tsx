import * as react from "react";
import { Upload } from "lucide-react";
const FileUpload: React.FunctionComponent = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-slate-900 text-white rounded-lg border-white border-2 p-4 shadow-2xl flex justify-center gap-x-2 items-center">
        <Upload />
        <h1>Upload PDF File</h1>
      </div>
    </div>
  );
};

export default FileUpload;
