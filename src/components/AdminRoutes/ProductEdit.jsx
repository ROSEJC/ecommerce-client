import { useState } from "react";

const ProductEdit = () => {
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [productData, setProductData] = useState(defaultProduct); // có thể bạn đã có

  return (
    <div>
      <img
        src={productData.images[0]}
        alt="Main"
        className="w-full rounded-lg border cursor-pointer hover:opacity-80 transition"
        onClick={() => setIsEditingImage(true)} // chỉ admin mới mở được
      />

      {isEditingImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-2">
              Chỉnh sửa ảnh sản phẩm
            </h2>

            <input
              type="text"
              placeholder="Dán đường dẫn ảnh mới..."
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              className="w-full border p-2 rounded mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setIsEditingImage(false)}
              >
                Hủy
              </button>

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => {
                  setProductData({
                    ...productData,
                    images: [newImageUrl], // thay ảnh
                  });
                  setIsEditingImage(false);
                }}
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductEdit;
