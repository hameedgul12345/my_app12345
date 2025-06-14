import React, { useState } from "react";
import { Eye } from "lucide-react";
import Layout from "./Layout";

const sellerOrders = [
  {
    id: "#SEL-001",
    seller: "Bright Electronics",
    date: "2024-01-15",
    amount: "$305.00",
    items: 7,
    status: "Delivered",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: "#SEL-002",
    seller: "Urban Outfitters",
    date: "2024-01-14",
    amount: "$198.90",
    items: 4,
    status: "Processing",
    statusColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "#SEL-003",
    seller: "Savannah Goods",
    date: "2024-01-13",
    amount: "$620.45",
    items: 9,
    status: "Shipped",
    statusColor: "bg-purple-100 text-purple-700",
  },
  {
    id: "#SEL-004",
    seller: "Nile Traders",
    date: "2024-01-12",
    amount: "$110.00",
    items: 2,
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-700",
  },
];

const AdminSeller = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSellers = sellerOrders.filter((order) =>
    [order.id, order.seller, order.status]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <h2 className="text-2xl font-bold">Seller Orders</h2>
          <p className="text-sm text-gray-500">Manage orders by sellers and status</p>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search sellers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 border rounded-md"
          />
          <button className="px-3 py-2 border rounded-md">Filter</button>
          <button className="px-4 py-2 bg-black text-white rounded-md">Export CSV</button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="p-3">ORDER ID</th>
              <th className="p-3">SELLER</th>
              <th className="p-3">DATE</th>
              <th className="p-3">AMOUNT</th>
              <th className="p-3">ITEMS</th>
              <th className="p-3">STATUS</th>
              <th className="p-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredSellers.length > 0 ? (
              filteredSellers.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{order.id}</td>
                  <td className="p-3">{order.seller}</td>
                  <td className="p-3">{order.date}</td>
                  <td className="p-3">{order.amount}</td>
                  <td className="p-3">{order.items}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${order.statusColor}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3 flex items-center gap-2">
                    <Eye className="h-4 w-4 cursor-pointer text-gray-600" />
                    <span className="text-xl cursor-pointer">⋯</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center p-4 text-gray-500">
                  No sellers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  );
};

export default AdminSeller;
