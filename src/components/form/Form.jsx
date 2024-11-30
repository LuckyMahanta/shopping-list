import React, { useState } from "react";

const Form = ({handleAddItems}) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(product)
    {
        const newTodo = {
            id: Date.now(),
            packed: false,
            product: product,
            quantity: quantity
        }
        handleAddItems(newTodo);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-center items-center pt-10 space-x-3"
    >
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="border border-slate-700 rounded p-1 "
      >
        {[...Array(20)].map((_, index) => (
          <option value={index + 1} key={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter item name"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        className="border border-slate-700 rounded p-1 w-1/3"
      />
      <button  className="border border-green-700 rounded p-1 hover:bg-green-500 hover:text-white">
        Add Item
      </button>
    </form>
  );
};

export default Form;
