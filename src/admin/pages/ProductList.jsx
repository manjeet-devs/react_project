import React from 'react';
import { useLocation, Link } from 'react-router-dom';


const ProductList = () => {
    const location = useLocation();
    const editproduct = location.state?.formData || { id: '', name: '', price: '' };
    
  const products = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{product.id}</td>
              <td className="border border-gray-300 px-4 py-2">{(product.id == editproduct.id)? editproduct.name : product.name}</td>
              <td className="border border-gray-300 px-4 py-2">{(product.id == editproduct.id) ? editproduct.price : product.price}</td>
              <td className="border border-gray-300 px-4 py-2">
              <td><Link to={`/admin/product/${product.id}`} state={{ product }} className="hover:text-gray-400">Edit</Link></td>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
