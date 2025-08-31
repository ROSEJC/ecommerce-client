import React, { useEffect, useState } from "react";
import { Upload, PlusCircle } from "lucide-react";
import InputField from "./InputField";
import CollapsibleSection from "./CollapsibleSection ";
import ImageUploadByLink from "./ImageUploadByLink";
import axios from "axios";
export default function AddProduct() {
  const [url, setUrl] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    brand: "",
    category: "",

    // Extra fields
    modelName: "",
    shape: "",
    controls: "",
    features: [],
    eartip: "",
    batteryBuds: "",
    batteryCase: "",
    chargePort: "",
    wingtips: false,
    releaseYear: "",
    waterResistance: "",
    supportedCodecs: [],
    minLatencyMs: "",
    manufacturer: "",
  });

  const addImage = (url) => {
    setFormData((prev) => ({
      ...prev,
      image: url, // gán thẳng string
    }));
  };
  useEffect(() => {
    addImage(url);
  }, [url]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleArrayChange = (e, field) => {
    const values = e.target.value.split(",").map((v) => v.trim());
    setFormData((prev) => ({ ...prev, [field]: values }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/product/add",
        formData
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {/* Left - Upload images */}
      <div className="space-y-4">
        <ImageUploadByLink setUrl={setUrl} />
      </div>

      {/* Right - Product details form */}
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <h2 className="font-bold text-lg text-gray-800 dark:text-white">
              Basic Information
            </h2>
            <InputField
              label="Product Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <InputField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              as="textarea"
              rows={3}
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField
                name="price"
                type="number"
                placeholder="Price (VND)"
                value={formData.price}
                onChange={handleChange}
              />
              <InputField
                name="stock"
                type="number"
                placeholder="Stock"
                value={formData.stock}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Extra Info */}
          <CollapsibleSection title="Technical Details">
            <div className="space-y-4">
              <h2 className="font-bold text-lg text-gray-800 dark:text-white">
                Technical Details
              </h2>
              <InputField
                name="modelName"
                placeholder="Model Name"
                value={formData.modelName}
                onChange={handleChange}
              />

              <InputField
                name="shape"
                placeholder="Shape"
                value={formData.shape}
                onChange={handleChange}
              />

              <InputField
                name="controls"
                placeholder="Controls"
                value={formData.controls}
                onChange={handleChange}
              />

              <InputField
                name="features"
                placeholder="Features (comma separated)"
                value={formData.features}
                onChange={handleChange}
                isArray
              />

              <InputField
                name="eartip"
                placeholder="Eartip"
                value={formData.eartip}
                onChange={handleChange}
              />

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  name="batteryBuds"
                  type="number"
                  placeholder="Battery Buds (mAh)"
                  value={formData.batteryBuds}
                  onChange={handleChange}
                />
                <InputField
                  name="batteryCase"
                  type="number"
                  placeholder="Battery Case (mAh)"
                  value={formData.batteryCase}
                  onChange={handleChange}
                />
              </div>

              <InputField
                label="Charge Port"
                name="chargePort"
                placeholder="Charge Port"
                value={formData.chargePort}
                onChange={handleChange}
              />

              <InputField
                label="Wingtips"
                name="wingtips"
                type="checkbox"
                value={formData.wingtips}
                onChange={handleChange}
              />

              <InputField
                label="Release Year"
                name="releaseYear"
                type="number"
                placeholder="Release Year"
                value={formData.releaseYear}
                onChange={handleChange}
              />

              <InputField
                label="Water Resistance (IPX)"
                name="waterResistance"
                placeholder="Water Resistance (IPX)"
                value={formData.waterResistance}
                onChange={handleChange}
              />

              <InputField
                label="Supported Codecs"
                name="supportedCodecs"
                placeholder="Supported Codecs (comma separated)"
                value={formData.supportedCodecs}
                onChange={(e) => handleArrayChange(e, "supportedCodecs")}
                isArray
              />

              <InputField
                label="Min Latency (ms)"
                name="minLatencyMs"
                type="number"
                placeholder="Min Latency (ms)"
                value={formData.minLatencyMs}
                onChange={handleChange}
              />

              <InputField
                label="Manufacturer"
                name="manufacturer"
                placeholder="Manufacturer"
                value={formData.manufacturer}
                onChange={handleChange}
              />
            </div>
          </CollapsibleSection>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md shadow text-sm font-semibold"
          >
            <PlusCircle className="w-5 h-5" />
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
