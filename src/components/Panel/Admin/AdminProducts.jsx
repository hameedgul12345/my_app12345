import React, { useState, useMemo } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
// import ProductDetail from './ProductDetail';
import Layout from './Layout';

const AdminProducts = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: 'Handcrafted Wooden Chair',
      category: 'Furniture',
      price: '$299.99',
      stock: 15,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Traditional Pottery Vase',
      category: 'Handicrafts',
      price: '$89.99',
      stock: 25,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Decorative Wall Mirror',
      category: 'Home Decor',
      price: '$159.99',
      stock: 8,
      status: 'Low Stock',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop'
    },
    {
      id: 4,
      name: 'Natural Face Cream',
      category: 'Health and Beauty',
      price: '$49.99',
      stock: 45,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=100&h=100&fit=crop'
    },
    {
      id: 5,
      name: 'Silk Scarf',
      category: 'Clothing Accessories',
      price: '$79.99',
      stock: 0,
      status: 'Out of Stock',
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=100&h=100&fit=crop'
    },
    {
      id: 6,
      name: 'Wooden Dining Table',
      category: 'Furniture',
      price: '$899.99',
      stock: 5,
      status: 'Low Stock',
      image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=100&h=100&fit=crop'
    }
  ];

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return products;
    const lowerSearch = searchTerm.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(lowerSearch) ||
      product.category.toLowerCase().includes(lowerSearch) ||
      product.status.toLowerCase().includes(lowerSearch)
    );
  }, [searchTerm]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const ProductModal = ({ product, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] overflow-y-auto">
        <div className="p-4 border-b">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">{product ? 'Edit Product' : 'Add New Product'}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
          </div>
        </div>
        <div className="p-4 space-y-4">
          {/* Inputs... */}
        </div>
        <div className="p-4 border-t flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 border rounded-lg">Cancel</button>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">{product ? 'Update' : 'Add'}</button>
        </div>
      </div>
    </div>
  );

  return (
   <Layout>


     <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-sm text-gray-600">Manage your product inventory</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
          <button className="px-4 py-2 border rounded-lg flex items-center space-x-1">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center space-x-1"
          >
            <Plus className="w-4 h-4" />
            <span>Add Product</span>
          </button>
        </div>
      </div>
      {searchTerm && (
        <div className="text-sm text-gray-600">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found for "{searchTerm}"
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="h-32 w-full object-cover rounded" />
            <div className="mt-2">
              <h3 className="text-lg font-semibold truncate">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-900 font-bold">{product.price}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(product.status)}`}>{product.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showAddModal && (
        <ProductModal product={selectedProduct} onClose={() => { setShowAddModal(false); setSelectedProduct(null); }} />
      )}
    </div>
   </Layout>
  );
};

export default AdminProducts;