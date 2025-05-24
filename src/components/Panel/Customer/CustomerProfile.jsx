import React from 'react'
import Layout from './Layout'

function CustomerProfile() {
  return (
   <Layout>
      <h1 className='bg-green-600 p-4'>Welcome to Customer Profile Page</h1>
      <div className='flex flex-col gap-4'>
        <input type="text" placeholder='Customer Name' className='border border-gray-300 p-2 rounded' />
        <input type="email" placeholder='Customer Email' className='border border-gray-300 p-2 rounded' />
        <button className='bg-blue-500 text-white p-2 rounded'>Update Profile</button>
      </div>
   </Layout>
  )
}

export default CustomerProfile