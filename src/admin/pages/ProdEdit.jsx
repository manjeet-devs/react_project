import React, { useState } from "react";

export default function ProductEdit() {
  const [product, setProduct] = useState({
    name: "Wireless Headphones",
    price: "99.99",
    description: "High-quality wireless headphones with noise cancellation.",
    images: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);

  // Handle Input Change
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle Multiple Image Upload
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      alert("You can upload up to 5 images only.");
      return;
    }

    const newImages = [...product.images, ...files].slice(0, 5); // Limit to 5 images
    setProduct({ ...product, images: newImages });

    const newPreviews = newImages.map((file) => URL.createObjectURL(file));
    setImagePreviews(newPreviews);
  };

  // Handle Image Delete
  const handleDeleteImage = (index) => {
    const newImages = [...product.images];
    const newPreviews = [...imagePreviews];

    newImages.splice(index, 1);
    newPreviews.splice(index, 1);

    setProduct({ ...product, images: newImages });
    setImagePreviews(newPreviews);
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Product:", product);
    alert("Product updated successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6 md:mt-10 w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">Edit Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-gray-700 font-semibold">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Product Price */}
        <div>
          <label className="block text-gray-700 font-semibold">Price ($)</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Product Description */}
        <div>
          <label className="block text-gray-700 font-semibold">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>
        </div>

        {/* Product Images Upload */}
        <div>
          <label className="block text-gray-700 font-semibold">Upload Images (Max 5)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full p-2 border rounded-lg"
          />

          {/* Image Previews */}
          {imagePreviews.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {imagePreviews.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Preview ${index}`}
                    className="w-full h-24 object-cover rounded-md shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <button
            type="submit"
            className="w-full md:w-auto bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition"
          >
            Save Changes
          </button>
          <button
            type="button"
            className="w-full md:w-auto bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition"
            onClick={() => alert("Canceled")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
