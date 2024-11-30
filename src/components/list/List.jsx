import React from "react";

const List = ({ item, handleDeleteItem, handleDoneItem }) => {
  const { product, quantity, packed, id } = item;
  return (
    <li className="border border-gray-500 rounded-lg flex flex-row justify-between items-center w-4/5 p-2">
      <span>{quantity} </span>
      <p
        style={packed ? { textDecoration: "line-through" } : {}}
      >
        {product}
      </p>
      <div className="flex items-center space-x-2">
        <button className="border border-green-700 rounded p-1 hover:bg-green-500 text-green-500 hover:text-white" onClick={()=>handleDoneItem(id)}>Done</button>
        <button className="border border-red-700 rounded p-1 hover:bg-red-600 text-red-700 hover:text-white" onClick={()=>handleDeleteItem(id)}>Delete</button>
      </div>
    </li>
  );
};

export default List;
