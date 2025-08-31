import { useState } from "react";

const ImageUploadByLink = ({ value, onChange, setUrl }) => {
  const [step, setStep] = useState("choose");
  // "choose" | "input" | "preview"
  const [uiUrl, setUiUrl] = useState(value || "");
  const handleConfirm = () => {
    if (uiUrl.trim()) {
      setStep("preview");
      if (onChange) onChange(uiUrl);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">Upload Images</label>

      {step === "choose" && (
        <div
          onClick={() => setStep("input")}
          className="w-full h-40 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-700/20 transition"
        >
          <svg
            className="w-8 h-8 mb-2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6h.1a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="text-gray-300">Choose Images</p>
        </div>
      )}

      {step === "input" && (
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            placeholder="Paste image link..."
            value={uiUrl}
            onChange={(e) => {
              setUrl(e.target.value);
              setUiUrl(e.target.value);
            }}
            className="flex-1 p-2 border rounded-md text-black"
          />
          <button
            type="button"
            onClick={handleConfirm}
            className="px-3 py-2 bg-blue-500 text-white rounded-md"
          >
            OK
          </button>
        </div>
      )}

      {step === "preview" && (
        <div className="relative mt-2">
          <img
            src={uiUrl}
            alt="Uploaded preview"
            className="w-full h-1/2 object-cover border rounded-lg"
          />
          <button
            type="button"
            onClick={() => setStep("input")}
            className="absolute top-1 right-1 bg-black bg-opacity-50 text-white px-2 py-1 text-xs rounded"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploadByLink;
