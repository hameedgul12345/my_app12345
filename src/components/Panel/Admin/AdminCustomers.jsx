import React from "react";
import { Eye, Edit2, MoreVertical, Plus, Filter } from "lucide-react";
import Layout from "./Layout";

const stats = [
  { title: "Total Customers", value: "1,247", icon: "📧" },
  { title: "Active Customers", value: "1,156", icon: "📞" },
  { title: "New This Month", value: "89", icon: "🔍" },
  { title: "Average Orders", value: "8.5", icon: "📊" },
];

const customers = [
  {
    id: "CUS-001",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    orders: 12,
    spent: "$1,247.50",
    status: "Active",
    lastOrder: "2024-01-15",
  },
  {
    id: "CUS-002",
    name: "Sarah Wilson",
    email: "sarah.wilson@email.com",
    phone: "+1 (555) 987-6543",
    orders: 8,
    spent: "$892.30",
    status: "Active",
    lastOrder: "2024-01-10",
  },
  {
    id: "CUS-003",
    name: "Mike Johnson",
    email: "mike.johnson@email.com",
    phone: "+1 (555) 456-7890",
    orders: 15,
    spent: "$2,156.80",
    status: "Active",
    lastOrder: "2024-01-12",
  },
  {
    id: "CUS-004",
    name: "Emily Brown",
    email: "emily.brown@email.com",
    phone: "+1 (555) 321-0987",
    orders: 3,
    spent: "$245.60",
    status: "Inactive",
    lastOrder: "2023-12-20",
  },
];

const AdminCustomers = () => {
  return (
   <Layout>
     <div className="p-6  space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Customers</h1>
        <p className="text-gray-500">Manage your customer base and their information</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl">{stat.icon}</div>
            <p className="text-gray-500">{stat.title}</p>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Search and Add */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search customers..."
            className="border rounded-md px-4 py-2"
          />
          <button className="flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-md">
            <Filter size={16} />
            Filter
          </button>
        </div>
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">
          <Plus size={16} />
          Add Customer
        </button>
      </div>

      {/* Customer Table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full">
          <thead className="text-left border-b text-gray-400">
            <tr>
              <th className="p-4">Customer</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Orders</th>
              <th className="p-4">Total Spent</th>
              <th className="p-4">Status</th>
              <th className="p-4">Last Order</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-b border-gray-300 hover:bg-gray-50">
                <td className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold uppercase">
                    {c.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-sm text-gray-400">ID: {c.id}</div>
                  </div>
                </td>
                <td className="p-4">
                  <div>{c.email}</div>
                  <div className="text-sm text-gray-400">{c.phone}</div>
                </td>
                <td className="p-4">{c.orders}</td>
                <td className="p-4">{c.spent}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      c.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="p-4">{c.lastOrder}</td>
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

export default AdminCustomers;
