'use client';

import axios from 'axios';
import { useState } from 'react';

const AddItemForm = () => {
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
  });

  const handleChangeProduct = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;

    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleCreateNewProduct = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:3001/products',
      data: {
        id: Math.floor(Math.random() * 1000).toString(),
        image: newProduct.image,
        title: newProduct.title,
        description: newProduct.description,
        price: newProduct.price,
      },
    });
  };

  return (
    <>
      <div className="flex flex-col gap-2 mt-5">
        <input
          onChange={handleChangeProduct}
          name="title"
          className="bg-gray-300 p-2 rounded"
          type="text"
          placeholder="title"
        />
        <input
          onChange={handleChangeProduct}
          name="price"
          className="bg-gray-300 p-2 rounded"
          type="text"
          placeholder="price"
        />
        <input
          onChange={handleChangeProduct}
          name="image"
          className="bg-gray-300 p-2 rounded"
          type="text"
          placeholder="image"
        />
      </div>

      <textarea
        onChange={handleChangeProduct}
        name="description"
        placeholder="description"
        className="w-full mt-4 bg-gray-300 p-2 rounded"
      ></textarea>

      <button
        onClick={handleCreateNewProduct}
        className="bg-sky-600 text-white rounded px-4 py-1 mt-3"
      >
        Create New Product
      </button>
    </>
  );
};

export default AddItemForm;
