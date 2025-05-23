import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { useNavigate } from 'react-router-dom';

function Products() {
  const [favorites, setFavorites] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });
const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      newFavorites.has(id) ? newFavorites.delete(id) : newFavorites.add(id);
      return newFavorites;
    });
  };

  const formatTime = (val) => val.toString().padStart(2, '0');

  const products = [
  {
    id: 1,
    name: 'Armor Air x Fear',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    currentPrice: 48.00,
    originalPrice: 60.00,
    rating: 4,
    discount: 30,
  },
  {
    id: 2,
    name: 'Armor Okwahn II',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    currentPrice: 90.00,
    originalPrice: 170.00,
    rating: 4,
    discount: 30,
  },
   {
    id: 1,
    name: 'Armor Air x Fear',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    currentPrice: 48.00,
    originalPrice: 60.00,
    rating: 4,
    discount: 30,
  },
  {
    id: 2,
    name: 'Armor Okwahn II',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    currentPrice: 90.00,
    originalPrice: 170.00,
    rating: 4,
    discount: 30,
  },
  {
    id: 3,
    name: 'Armor Air Wildwood ACG',
    image: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    currentPrice: 75.00,
    originalPrice: 155.00,
    rating: 4,
    discount: 50,
  },
  {
    id: 4,
    name: 'Armor ACG React Terra',
    image: 'https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    currentPrice: 110.00,
    rating: 4,
    isNew: true,
  },
  {
    id: 3,
    name: 'Armor Air Wildwood ACG',
    image: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    currentPrice: 75.00,
    originalPrice: 155.00,
    rating: 4,
    discount: 50,
  },
  {
    id: 4,
    name: 'Armor ACG React Terra',
    image: 'https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    currentPrice: 110.00,
    rating: 4,
    isNew: true,
  },
];

const featuredProducts=[
  {
    id: 1,
    name: 'Armor Air x Fear',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    currentPrice: 48.00,
    originalPrice: 60.00,
    rating: 4,
    discount: 30,
  },
  {
    id: 2,
    name: 'Armor Okwahn II',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    currentPrice: 90.00,
    originalPrice: 170.00,
    rating: 4,
    discount: 30,
  },
   {
    id: 1,
    name: 'Armor Air x Fear',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    currentPrice: 48.00,
    originalPrice: 60.00,
    rating: 4,
    discount: 30,
  },
  {
    id: 2,
    name: 'Armor Okwahn II',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    currentPrice: 90.00,
    originalPrice: 170.00,
    rating: 4,
    discount: 30,
  },
]

  return (
   <>
   <Layout>
    <section className="bg-white w-full ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between shadow-md rounded-lg overflow-hidden">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-8 space-y-4">
          <h2 className="text-lg font-medium text-gray-700">Furniture Logo</h2>
          <h1 className="text-4xl font-bold text-black">
            Best Product of 
            Furniture Sale
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#" className="inline-block bg-gray-800 text-white px-5 py-2 mt-3 rounded hover:bg-black transition">
            www.yourwebsite.com
          </a>
        </div>

       <img src="/images/product1.jpg" className='w-full md:w-1/2'  alt="" />
      </div>
    </section>

     
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">Top Selling</h2>
          <p className="text-gray-600">Cum doctus civibus efficiantur in imperdiet deterruisset</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product,index) => (
            <div
              key={index}
              className="relative bg-gray-50 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-md"
            >
              <div className="relative h-52 sm:h-64 overflow-hidden">
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                    -{product.discount}%
                  </div>
                )}
                {product.isNew && (
                  <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 text-xs font-bold rounded">
                    NEW
                  </div>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-4 right-4 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="relative group/icon">
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100"
                    >
                      <i className={`ri-heart-fill ${favorites.has(product.id) ? 'text-red-500' : 'text-gray-400'}`} />
                    </button>
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                      Add to favorite
                    </span>
                  </div>

                  <div className="relative group/icon">
                    <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100">
                      <i className="ri-bar-chart-2-fill text-gray-600" />
                    </button>
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                      Add to compare
                    </span>
                  </div>

                  <div className="relative group/icon">
                    <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100">
                      <i className="ri-shopping-cart-2-line text-gray-600" />
                    </button>
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                      Add to cart
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3">
                  <div className="flex items-center bg-red-500 text-white px-2 py-1 rounded-md text-xs">
                    <i className="ri-time-line mr-1" />
                    <span>
                      {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`ri-star-fill ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <h3 className="font-medium text-gray-800 mb-2 truncate">{product.name}</h3>
                <div className="flex items-center">
                  <span className="text-blue-600 font-bold">${product.currentPrice.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-gray-400 line-through text-sm">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                 <button className="mt-auto bg-blue-600 text-white text-sm py-2 px-4 rounded hover:bg-blue-700 transition-all" onClick={() => navigate('/singleproduct')}>
                Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">Featured Products</h2>
          <p className="text-gray-600">Cum doctus civibus efficiantur in imperdiet deterruisset</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product,index) => (
            <div
              key={index}
              className="relative bg-gray-50 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-md"
            >
              <div className="relative h-52 sm:h-64 overflow-hidden">
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                    -{product.discount}%
                  </div>
                )}
                {product.isNew && (
                  <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 text-xs font-bold rounded">
                    NEW
                  </div>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-4 right-4 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="relative group/icon">
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100"
                    >
                      <i className={`ri-heart-fill ${favorites.has(product.id) ? 'text-red-500' : 'text-gray-400'}`} />
                    </button>
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                      Add to favorite
                    </span>
                  </div>

                  <div className="relative group/icon">
                    <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100">
                      <i className="ri-bar-chart-2-fill text-gray-600" />
                    </button>
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                      Add to compare
                    </span>
                  </div>

                  <div className="relative group/icon">
                    <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100">
                      <i className="ri-shopping-cart-2-line text-gray-600" />
                    </button>
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                      Add to cart
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3">
                  <div className="flex items-center bg-red-500 text-white px-2 py-1 rounded-md text-xs">
                    <i className="ri-time-line mr-1" />
                    <span>
                      {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`ri-star-fill ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <h3 className="font-medium text-gray-800 mb-2 truncate">{product.name}</h3>
                <div className="flex items-center">
                  <span className="text-blue-600 font-bold">${product.currentPrice.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-gray-400 line-through text-sm">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                 <button className="mt-auto bg-blue-600 text-white text-sm py-2 px-4 rounded hover:bg-blue-700 transition-all">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </Layout>
   </>
  )
}

export default Products