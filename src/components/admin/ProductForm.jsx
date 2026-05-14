import React, { useState } from "react";
import Button from "../common/Button";
import { X, Upload, PlusCircle } from "lucide-react";

const ProductForm = ({ initialData, onSubmit, onClose }) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      description: "",
      category: "Apparel",
      price: "",
      quantity: "",
      image: "",
      sizes: ["S", "M", "L", "XL"],
      discount: 0,
      featured: false,
    },
  );
  const [imageFiles, setImageFiles] = useState([]);

  const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSizeToggle = (size) => {
    const newSizes = formData.sizes.includes(size)
      ? formData.sizes.filter((s) => s !== size)
      : [...formData.sizes, size];
    setFormData({ ...formData, sizes: newSizes });
  };

  const handleFileChange = (e) => {
    setImageFiles([...imageFiles, ...Array.from(e.target.files)]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageFiles.length > 0) {
      onSubmit({ ...formData, imageFiles });
    } else {
      onSubmit(formData);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-sm overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-neutral-soft">
          <h3 className="text-xl font-serif">
            {initialData ? "Edit Product" : "Add New Product"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-6 max-h-[70vh] overflow-y-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">
                Product Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-neutral-soft/50 border border-transparent p-3 text-sm outline-none focus:border-black focus:bg-white transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-neutral-soft/50 border border-transparent p-3 text-sm outline-none focus:border-black focus:bg-white transition-all"
              >
                <option>Apparel</option>
                <option>Accessories</option>
                <option>Footwear</option>
                <option>Outerwear</option>
                <option>Offer</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full bg-neutral-soft/50 border border-transparent p-3 text-sm outline-none focus:border-black focus:bg-white transition-all resize-none"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">
                Price ($)
              </label>
              <input
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full bg-neutral-soft/50 border border-transparent p-3 text-sm outline-none focus:border-black focus:bg-white transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">
                Quantity
              </label>
              <input
                name="quantity"
                type="number"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="w-full bg-neutral-soft/50 border border-transparent p-3 text-sm outline-none focus:border-black focus:bg-white transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">
                Discount (%)
              </label>
              <input
                name="discount"
                type="number"
                value={formData.discount}
                onChange={handleChange}
                className="w-full bg-neutral-soft/50 border border-transparent p-3 text-sm outline-none focus:border-black focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold">
              Image Source
            </label>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Image URL"
                  disabled={imageFiles.length > 0}
                  className="flex-grow bg-neutral-soft/50 border border-transparent p-3 text-sm outline-none focus:border-black focus:bg-white transition-all disabled:opacity-50"
                />
                <label className="bg-neutral-soft p-3 text-charcoal hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center">
                  <Upload size={18} />
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {imageFiles.length > 0 && (
                <div className="space-y-3">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                    Gallery Preview ({imageFiles.length}/5)
                  </p>
                  <div className="grid grid-cols-5 gap-4">
                    {imageFiles.map((file, idx) => (
                      <div key={idx} className="relative aspect-[3/4] group">
                        <img
                          src={URL.createObjectURL(file)}
                          alt="preview"
                          className="w-full h-full object-cover border border-gray-100"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setImageFiles(
                              imageFiles.filter((_, i) => i !== idx),
                            )
                          }
                          className="absolute -top-2 -right-2 bg-black text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X size={12} />
                        </button>
                        {idx === 0 && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[8px] uppercase tracking-widest text-center py-1">
                            Main
                          </div>
                        )}
                      </div>
                    ))}
                    {imageFiles.length < 5 && (
                      <label className="aspect-[3/4] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-gray-300 hover:text-black hover:border-black transition-all cursor-pointer">
                        <PlusCircle size={20} />
                        <span className="text-[8px] uppercase mt-2">Add</span>
                        <input
                          type="file"
                          className="hidden"
                          multiple
                          onChange={handleFileChange}
                        />
                      </label>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-widest font-bold">
              Available Sizes
            </label>
            <div className="flex flex-wrap gap-2">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleSizeToggle(size)}
                  className={`w-10 h-10 border text-xs font-bold transition-all ${
                    formData.sizes.includes(size)
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-400 border-gray-100 hover:border-black hover:text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              id="featured"
              className="w-4 h-4 accent-black"
            />
            <label
              htmlFor="featured"
              className="text-[10px] uppercase tracking-widest font-bold cursor-pointer"
            >
              Mark as Featured Product
            </label>
          </div>
        </form>

        <div className="p-8 border-t border-gray-100 flex justify-end space-x-4 bg-neutral-soft/30">
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-widest font-bold px-6 py-2"
          >
            Cancel
          </button>
          <Button
            onClick={handleSubmit}
            variant="primary"
            className="!px-10 h-12"
          >
            {initialData ? "Update Product" : "Add Product"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
