import React from "react";
import { Eye, Edit2, MoreVertical, Plus, Filter } from "lucide-react";
import Layout from "./Layout";

const products = [
  {
    name: "Handcrafted Wooden Chair",
    category: "Furniture",
    price: 299.99,
    stock: 15,
    status: "Active",
    image: "https://img.freepik.com/free-photo/wooden-chair_53876-133037.jpg",
  },
  {
    name: "Traditional Pottery Vase",
    category: "Handicrafts",
    price: 89.99,
    stock: 25,
    status: "Active",
    image: "https://img.freepik.com/free-photo/black-vase_53876-133066.jpg",
  },
  {
    name: "Decorative Wall Mirror",
    category: "Home Decor",
    price: 159.99,
    stock: 8,
    status: "Low Stock",
    image: "https://img.freepik.com/free-photo/wall-mirror_53876-133067.jpg",
  },
  {
    name: "Natural Face Cream",
    category: "Health and Beauty",
    price: 49.99,
    stock: 45,
    status: "Active",
    image: "https://img.freepik.com/free-photo/cream-tube_53876-133068.jpg",
  },
  {
    name: "Silk Scarf",
    category: "Clothing Accessories",
    price: 79.99,
    stock: 0,
    status: "Out of Stock",
    image: "https://img.freepik.com/free-photo/scarf_53876-133069.jpg",
  },
  {
    name: "Wooden Dining Table",
    category: "Furniture",
    price: 899.99,
    stock: 5,
    status: "Low Stock",
    image: "https://img.freepik.com/free-photo/dining-table_53876-133070.jpg",
  },
];

const AdminProducts = () => {
  return (
   <Layout>
     <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold">Products</h1>
        <p className="text-gray-500">Manage your product inventory</p>
      </div>

      {/* Search & Controls */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search products..."
            className="border px-4 py-2 rounded-md"
          />
          <button className="flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-md">
            <Filter size={16} />
            Filter
          </button>
        </div>
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">
          <Plus size={16} />
          Add Product
        </button>
      </div>

      {/* Product Table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full">
          <thead className="text-left text-gray-600 border-b border-gray-300">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, idx) => (
              <tr key={idx} className="border-b  border-gray-300 hover:bg-gray-50">
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-10 h-10 rounded object-cover"
                  />
                  <span className="font-medium">{p.name}</span>
                </td>
                <td className="p-4">{p.category}</td>
                <td className="p-4">${p.price.toFixed(2)}</td>
                <td className="p-4">{p.stock}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      p.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : p.status === "Low Stock"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="p-4 flex gap-2 text-gray-500">
                  <Eye className="cursor-pointer" size={16} />
                  <Edit2 className="cursor-pointer" size={16} />
                  <MoreVertical className="cursor-pointer" size={16} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   </Layout>
  );
};

export default AdminProducts;
