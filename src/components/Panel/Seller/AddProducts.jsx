import React from 'react'
import Layout from './Layout'

function AddProducts() {
  return (
   <Layout>
    <h1 className='bg-green-600 p-4'>Welcome to Add Products Page</h1>
    <div className='flex flex-col gap-4'>
      <input type="text" placeholder='Product Name' className='border border-gray-300 p-2 rounded' />
      <input type="text" placeholder='Product Price' className='border border-gray-300 p-2 rounded' />
      <input type="text" placeholder='Product Description' className='border border-gray-300 p-2 rounded' />
      <button className='bg-blue-500 text-white p-2 rounded'>Add Product</button>
    </div>
   </Layout>
  )
}

export default AddProducts