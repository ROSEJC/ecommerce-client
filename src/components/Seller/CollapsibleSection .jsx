import { useState } from "react";

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${isOpen ? "border rounded-lg p-4" : ""} `}>
      <button
        type="button"
        className="w-full flex justify-between items-center text-left font-semibold text-gray-800 dark:text-white dark:bg-gray-800 dark:border-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && <div className="mt-4 space-y-4">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
