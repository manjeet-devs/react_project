import React, { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$49.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: "$79.99",
    image: "https://via.placeholder.com/150",
  },
];

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-0">Product List</h1>
        <Link to={`/admin/products/1`}>
        <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 w-full md:w-auto">
          + Add Product
        </button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 md:p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Responsive Product Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    <td className="p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                    </td>
                    <td className="p-4">{product.name}</td>
                    <td className="p-4">{product.price}</td>
                    <td className="p-4 flex gap-2">
                      <Link to={`/admin/products/${product.id}`}>
                        <button className="bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700 flex items-center">
                          <Edit className="w-4 h-4 mr-1" />
                        </button>
                      </Link>
                      <button className="bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 flex items-center">
                        <Trash2 className="w-4 h-4 mr-1" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-600">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile View - Card Layout */}
        <div className="md:hidden flex flex-col gap-4 p-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-md object-cover mr-4"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold">{product.name}</span>
                    <span className="text-gray-600">{product.price}</span>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <Link to={`/admin/products/${product.id}`} className="w-full">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-md w-full hover:bg-blue-700 flex items-center justify-center">
                      <Edit className="w-4 h-4 mr-2" />
                    </button>
                  </Link>
                  <button className="bg-red-600 text-white py-2 px-4 rounded-md w-full hover:bg-red-700 flex items-center justify-center">
                    <Trash2 className="w-4 h-4 mr-2" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
