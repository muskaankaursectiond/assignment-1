"use client"; 
import { useState } from "react";

export default function ItemList() {
    const [items, setItems] = useState(["Apple", "Banana", "Mango"]);
    const [inputValue, setInputValue] = useState("");
  
    const handleAddItem = () => {
      if (inputValue.trim() !== "") {
        setItems([...items, inputValue.trim()]);
        setInputValue("");
      }
    };
  
    const handleDeleteItem = (index) => {
      setItems(items.filter((_, i) => i !== index));
    };
  
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Item List</h2>
        <ul className="mb-4">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              {item}
              <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDeleteItem(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 mr-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddItem}>
          Add Item
        </button>
      </div>
    );
  }