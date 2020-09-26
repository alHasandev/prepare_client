import React from "react";
import { Link } from "react-router-dom";

export default function ItemPage() {
  return (
    <section className="overflow-x-auto">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-semibold">Table of Item List</h1>
        <div className="ml-auto"></div>
        <Link
          to="/items/new"
          className="border bg-blue-500 text-white text-sm px-4 py-2 font-semibold hover:bg-blue-700">
          Add New Item
        </Link>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-center">No.</th>
            <th className="border px-4 py-2 text-center">Item Code</th>
            <th className="border px-4 py-2 text-left">Item Name</th>
            <th className="border px-4 py-2 text-center">Stock</th>
            <th className="border px-4 py-2 text-center">Price</th>
            <th className="border px-4 py-2 text-left">Description</th>
            <th className="border px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-center">No.</td>
            <td className="border px-4 py-2 text-center">Item Code</td>
            <td className="border px-4 py-2 text-left">Item Name</td>
            <td className="border px-4 py-2 text-center">Stock</td>
            <td className="border px-4 py-2 text-center">Price</td>
            <td className="border px-4 py-2 text-center">Description</td>
            <td className="border px-4 py-2 text-center whitespace-no-wrap">
              <Link
                to="/items/edit/1999"
                className="inline-block px-2 py-1 focus:outline-none bg-green-500 hover:bg-green-700 text-white mr-2">
                Edit
              </Link>
              <button
                className="inline-block px-2 py-1 focus:outline-none bg-red-500 hover:bg-red-700 text-white"
                onClick={(ev) => {
                  if (
                    window.confirm("Are you sure want to delete this record ?")
                  ) {
                    alert("Your record is deleted successfully !");
                  }
                }}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
