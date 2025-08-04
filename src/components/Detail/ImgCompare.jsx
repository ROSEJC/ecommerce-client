import { useNavigate } from "react-router-dom";
const ImgCompare = ({ img1, img2, id_1, id_2, clickHandle }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-12 gap-4 ">
      <div className="col-span-2 p-4 text-center "></div>

      <button
        className="col-span-5 p-4 flex justify-center items-center bg-white dark:bg-zinc-900 rounded-xl transition-all hover:shadow-xl hover:scale-105 border border-gray-200 dark:border-gray-700"
        onClick={() => {
          navigate(`/detail/${id_1}`);
          clickHandle();
        }}
      >
        <img
          src={img1}
          className="max-h-52 max-w-52 w-full h-full rounded-xl object-contain"
        />
      </button>

      <button
        className="col-span-5 p-4 flex justify-center items-center bg-white dark:bg-zinc-900 rounded-xl transition-all hover:shadow-xl hover:scale-105 border border-gray-200 dark:border-gray-700"
        onClick={() => {
          navigate(`/detail/${id_2}`);
          clickHandle();
        }}
      >
        <img
          src={img2}
          className="max-h-52 max-w-52 w-full h-full rounded-xl object-contain"
        />
      </button>
    </div>
  );
};
export default ImgCompare;
