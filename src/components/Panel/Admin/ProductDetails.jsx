import React, { useState } from 'react';
import { X, Edit, Package, BarChart3, Star } from 'lucide-react';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductDetails = ({ product, onClose, onEdit }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto animate-scale-in">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <img
                className="h-12 w-12 sm:h-16 sm:w-16 rounded-lg object-cover"
                src={product.image}
                alt={product.name}
              />
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{product.name}</h2>
                <p className="text-sm sm:text-base text-gray-600">{product.category}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onEdit(product)}
                className="hidden sm:flex items-center space-x-2 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
              >
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <button
            onClick={() => onEdit(product)}
            className="sm:hidden w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Edit className="w-4 h-4" />
            <span>Edit Product</span>
          </button>
        </div>
<div className="overflow-x-auto rounded-lg border shadow-sm">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 text-xs uppercase text-gray-500">
          <tr>
            <th className="p-4">Product</th>
            <th className="p-4">Category</th>
            <th className="p-4">Price</th>
            <th className="p-4">Stock</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          {products.map((product, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="p-4 flex items-center gap-3">
                <img src={product.image} alt="" className="w-10 h-10 rounded object-cover" />
                <span className="font-medium">{product.name}</span>
              </td>
              <td className="p-4 text-gray-700">{product.category}</td>
              <td className="p-4 text-gray-700">{product.price}</td>
              <td className="p-4 text-gray-700">{product.stock}</td>
              <td className="p-4">
                <span
                  className={classNames(
                    "px-3 py-1 text-xs font-semibold rounded-full",
                    statusClasses[product.status]
                  )}
                >
                  {product.status}
                </span>
              </td>
              <td className="p-4 flex gap-3 text-gray-500">
                <Eye className="w-4 h-4 cursor-pointer" />
                <Edit className="w-4 h-4 cursor-pointer" />
                <MoreVertical className="w-4 h-4 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
       
      </div>
    </div>
  );
};

export default ProductDetails;


//  <div className="p-4 sm:p-6">
//           <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//             <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 mb-6">
//               <TabsTrigger value="overview" className="text-xs sm:text-sm px-2 sm:px-4 py-2">
//                 <Package className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
//                 <span className="hidden sm:inline">Overview</span>
//                 <span className="sm:hidden">Info</span>
//               </TabsTrigger>
//               <TabsTrigger value="inventory" className="text-xs sm:text-sm px-2 sm:px-4 py-2">
//                 <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
//                 <span className="hidden sm:inline">Inventory</span>
//                 <span className="sm:hidden">Stock</span>
//               </TabsTrigger>
//               <TabsTrigger value="reviews" className="text-xs sm:text-sm px-2 sm:px-4 py-2">
//                 <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
//                 <span>Reviews</span>
//               </TabsTrigger>
//               <TabsTrigger value="analytics" className="text-xs sm:text-sm px-2 sm:px-4 py-2">
//                 <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
//                 <span className="hidden sm:inline">Analytics</span>
//                 <span className="sm:hidden">Stats</span>
//               </TabsTrigger>
//             </TabsList>

//             <TabsContent value="overview">
//               {/* Overview content here */}
//             </TabsContent>

//             <TabsContent value="inventory">
//               {/* Inventory content here */}
//             </TabsContent>

//             <TabsContent value="reviews">
//               {/* Reviews content here */}
//             </TabsContent>

//             <TabsContent value="analytics">
//               {/* Analytics content here */}
//             </TabsContent>
//           </Tabs>
//         </div>