const FavoriteTitle = () => {
  return (
    <div className="grid grid-cols-12 font-semibold border-b py-2 border-gray-200">
      {/*Hinh anh va ten*/}
      <div className="col-span-6 lg:col-span-4">Image</div>
      <div className="col-span-2 hidden lg:block">Category</div>
      <div className="col-span-2 hidden lg:block">Brand</div>
      <div className="col-span-1 hidden lg:block">Status</div>
      <div className="col-span-3 lg:col-span-1">Price</div>
      <div className="col-span-3 lg:col-span-2">Action</div>
    </div>
  );
};

export default FavoriteTitle;
