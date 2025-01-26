import React, { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductData({ ...productData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product updated successfully!');
  };

  return (
    <>

        <div className="flex-1 p-6">
          {activeTab === 'products' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
              <form onSubmit={handleSubmit}>
                {/* Product Name */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold" htmlFor="name">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={productData.name}
                    onChange={handleInputChange}
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter product name"
                    required
                  />
                </div>

                {/* Product Price */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold" htmlFor="price">
                    Product Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={productData.price}
                    onChange={handleInputChange}
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter product price"
                    required
                  />
                </div>

                {/* Product Description */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold" htmlFor="description">
                    Product Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    value={productData.description}
                    onChange={handleInputChange}
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter product description"
                    rows="4"
                    required
                  />
                </div>

                {/* Product Image */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold" htmlFor="image">
                    Product Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  {imagePreview && (
                    <div className="mt-4">
                      <img src={imagePreview} alt="Image Preview" className="w-32 h-32 object-cover rounded-lg" />
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="mb-4">
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Update Product
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Tab Content - Other Tabs */}
          {activeTab === 'dashboard' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
              <p>Welcome to the admin dashboard. You can manage products, orders, and settings from here.</p>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Settings</h2>
              <p>Manage your settings here, including account information, site preferences, etc.</p>
            </div>
          )}
        </div>
      </>
  );
};

export default Dashboard;
