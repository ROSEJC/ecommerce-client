const AttributesCompare = ({ title = "Price", att1 = 1000, att2 = 2000 }) => {
  let isFirstBetter = -1;
  const isInteger = Number.isInteger(Number(att1));
  let isDiffernt = false;
  if (isInteger) {
    if (att1 > att2) {
      isFirstBetter = 0;
    } else if (att1 < att2) {
      isFirstBetter = 1;
    }
  }
  if (!isInteger && title !== "Product Name") {
    if (att1 !== att2) {
      isDiffernt = true;
    }
  }
  if (title == "Price (VND)") {
    if (isFirstBetter == 1) isFirstBetter = 0;
    else if (isFirstBetter == 0) isFirstBetter = 1;
    att1 *= 1000;
    att2 *= 1000;
  }
  return (
    <div className="grid grid-cols-12 gap-4 my-2">
      <div className="col-span-2 p-4 text-center text-lg font-bold bg-gray-200 dark:text-orange-300 dark:bg-gray-900">
        {" "}
        {title}
      </div>

      <div
        className={`col-span-5 p-4 text-center flex justify-center items-center text-lg hover:border hover:border-gray-300 ${
          isFirstBetter === 0
            ? "border border-b bg-orange-500 font-bold text-white"
            : ""
        } ${isDiffernt ? "bg-gray-400 font-bold text-white" : ""}`}
      >
        {att1}
      </div>

      <div
        className={`col-span-5 p-4 text-center flex justify-center items-center text-lg  hover:border hover:border-gray-300 ${
          isFirstBetter === 1
            ? "border border-b bg-orange-500 font-bold text-white"
            : ""
        } ${isDiffernt ? "bg-gray-400 font-bold text-white" : ""}`}
      >
        {att2}
      </div>
    </div>
  );
};
export default AttributesCompare;
