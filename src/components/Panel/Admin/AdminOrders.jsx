import React, { useState } from "react";
import { Eye } from "lucide-react";
import Layout from "./Layout";

const ordersData = [
  {
    id: "#ORD-001",
    customer: "John Smith",
    date: "2024-01-15",
    amount: "$125.00",
    items: 3,
    status: "Delivered",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: "#ORD-002",
    customer: "Sarah Wilson",
    date: "2024-01-14",
    amount: "$89.50",
    items: 2,
    status: "Processing",
    statusColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "#ORD-003",
    customer: "Mike Johnson",
    date: "2024-01-13",
    amount: "$247.25",
    items: 5,
    status: "Shipped",
    statusColor: "bg-purple-100 text-purple-700",
  },
  {
    id: "#ORD-004",
    customer: "Emily Brown",
    date: "2024-01-12",
    amount: "$156.75",
    items: 1,
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-700",
  },
];

const  AdminOrders= () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = ordersData.filter((order) =>
    [order.id, order.customer, order.status]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
   <Layout>
     <div className="p-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <h2 className="text-2xl font-bold">Orders</h2>
          <p className="text-sm text-gray-500">Manage customer orders and fulfillment</p>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 border rounded-md"
          />
          <button className="px-3 py-2 border rounded-md">Filter</button>
          <button className="px-4 py-2 bg-black text-white rounded-md">Export CSV</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-sm">
          <thead>
            <tr className="text-left bg-gray-100  border-b border-gray-300">
              <th className="p-3">ORDER ID</th>
              <th className="p-3">CUSTOMER</th>
              <th className="p-3">DATE</th>
              <th className="p-3">AMOUNT</th>
              <th className="p-3">ITEMS</th>
              <th className="p-3">STATUS</th>
              <th className="p-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="p-3 font-medium">{order.id}</td>
                  <td className="p-3">{order.customer}</td>
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
                  No orders found.
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

export default AdminOrders;
