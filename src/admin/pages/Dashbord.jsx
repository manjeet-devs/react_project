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
         hi
        </div>
      </>
  );
};

export default Dashboard;
