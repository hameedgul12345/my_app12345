import React from 'react'
import Layout from './Layout'

function CustomerOrders() {
  return (
   <Layout>
    <h1 className='bg-green-600 p-4'>Welcome to Orders Page</h1>
    <div className='flex flex-col gap-4'>
      <input type="text" placeholder='Order ID' className='border border-gray-300 p-2 rounded' />
      <input type="text" placeholder='Customer Name' className='border border-gray-300 p-2 rounded' />
      <input type="text" placeholder='Order Status' className='border border-gray-300 p-2 rounded' />
      <button className='bg-blue-500 text-white p-2 rounded'>Search Orders</button>
    </div>
   </Layout>
  )
}

export default CustomerOrders