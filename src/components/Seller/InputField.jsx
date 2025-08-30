// components/InputField.jsx
import React from "react";

export default function InputField({
  label,
  name,
  value,
  onChange,
  type = "text", // text | number | checkbox | select
  required = false,
  placeholder = "",
  rows,
  as = "input", // input | textarea
  options = [], // cho select
  isArray = false, // nếu value là array
}) {
  const handleChange = (e) => {
    if (type === "checkbox") {
      onChange({
        target: {
          name,
          value: e.target.checked,
        },
      });
    } else if (isArray) {
      onChange({
        target: {
          name,
          value: e.target.value.split(",").map((item) => item.trim()),
        },
      });
    } else {
      onChange(e);
    }
  };

  const commonProps = {
    name,
    value: isArray ? value.join(", ") : value,
    onChange: handleChange,
    className:
      "block w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white",
    required,
    placeholder,
  };

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}

      {/* textarea */}
      {as === "textarea" && <textarea {...commonProps} rows={rows || 3} />}

      {/* select */}
      {as === "select" && (
        <select {...commonProps}>
          <option value="">-- Select --</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {/* checkbox */}
      {type === "checkbox" && (
        <input
          type="checkbox"
          name={name}
          checked={!!value}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
      )}

      {/* input mặc định */}
      {as === "input" && type !== "checkbox" && type !== "select" && (
        <input {...commonProps} type={type} />
      )}
    </div>
  );
}
