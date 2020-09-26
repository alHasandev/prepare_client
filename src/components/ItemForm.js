import React from "react";
import { Link } from "react-router-dom";

export default function ItemForm() {
  return (
    <form className="w-full max-w-screen-md mx-auto border border-black px-8 py-4">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Item Form</h1>
      </div>

      <div className="mb-4 text-sm">
        <label className="block font-semibold mb-2">Item Code</label>
        <input type="text" name="code" className="border w-full px-4 py-1" />
      </div>
      <div className="mb-4 text-sm">
        <label className="block font-semibold mb-2">Item Name</label>
        <input type="text" name="code" className="border w-full px-4 py-1" />
      </div>
      <div className="mb-4 text-sm">
        <label className="block font-semibold mb-2">Stock</label>
        <input type="number" name="code" className="border w-full px-4 py-1" />
      </div>
      <div className="mb-4 text-sm">
        <label className="block font-semibold mb-2">Price</label>
        <input type="number" name="code" className="border w-full px-4 py-1" />
      </div>
      <div className="mb-4 text-sm">
        <label className="block font-semibold mb-2">Description</label>
        <textarea
          name="description"
          rows="3"
          className="border px-4 py-1 w-full"
        />
      </div>

      <div className="flex items-center">
        <div className="ml-auto"></div>
        <Link
          to="/items"
          className="border px-4 py-2 bg-gray-200 text-black font-semibold ml-4">
          Cancel
        </Link>
        <button
          type="submit"
          className="border px-4 py-2 bg-blue-500 text-white font-semibold ml-4">
          Save
        </button>
      </div>
    </form>
  );
}
