import React from 'react'
import Layout from './Layout'

function CustomerSettings() {
  return (
    <Layout>
      <h1 className='bg-green-600 p-4'>Welcome to Customer Settings Page</h1>
      <div className='flex flex-col gap-4'>
        <input type="text" placeholder='Update Name' className='border border-gray-300 p-2 rounded' />
        <input type="email" placeholder='Update Email' className='border border-gray-300 p-2 rounded' />
        <button className='bg-blue-500 text-white p-2 rounded'>Save Settings</button>
      </div>
    </Layout>
  )
}

export default CustomerSettings