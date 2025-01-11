import React, { useState } from "react";

function Dashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: "$100", category: "Category A" },
    { id: 2, name: "Product 2", price: "$200", category: "Category B" },
    { id: 3, name: "Product 3", price: "$300", category: "Category C" },
  ]);

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      price: `$${(products.length + 1) * 100}`,
      category: `Category ${String.fromCharCode(65 + products.length)}`,
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Products</li>
          <li>Orders</li>
          <li>Users</li>
          <li>Settings</li>
        </ul>
      </aside>

      <div className="main">
        <header className="header">
          <h1>Admin Dashboard</h1>
        </header>

        <div className="content">
          <button onClick={addProduct} className="add-button">
            Add Product
          </button>
          <table className="product-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
