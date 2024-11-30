import React, { useState } from "react";
import List from "../list/List";
import Form from "../form/Form";

const Main = ({ items, handleAddItems, handleDeleteItem, handleDoneItem }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div>
      <Form handleAddItems={handleAddItems} />
      <ul className="flex flex-col items-center space-y-2 pt-20">
        {sortedItems.map((item) => (
          <List
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleDoneItem={handleDoneItem}
          />
        ))}
      </ul>
      <div>
        <select
          className="border border-slate-700 p-1 rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort By Input</option>
          <option value="packed">Sort By Packed</option>
        </select>
      </div>
    </div>
  );
};

export default Main;
