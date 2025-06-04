// // The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// import React, { useState, useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// const App: React.FC = () => {
// const [isLoaded, setIsLoaded] = useState(false);
// const [isLoggedIn, setIsLoggedIn] = useState(false);
// const swiperRef = useRef(null);
// useEffect(() => {
// setIsLoaded(true);
// const handleClickOutside = (event: MouseEvent) => {
// const container = document.getElementById('userMenuContainer');
// const menu = document.getElementById('userDropdownMenu');
// const button = document.getElementById('userMenuButton');
// if (container && !container.contains(event.target as Node) && menu) {
// menu.classList.remove('opacity-100', 'translate-y-0');
// menu.classList.add('opacity-0', 'translate-y-[-10px]');
// setTimeout(() => {
// menu.style.display = 'none';
// }, 200);
// }
// };
// document.addEventListener('click', handleClickOutside);
// return () => {
// document.removeEventListener('click', handleClickOutside);
// };
// }, []);
// const goNext = () => {
// if (swiperRef.current && swiperRef.current.swiper) {
// swiperRef.current.swiper.slideNext();
// }
// };
// const goPrev = () => {
// if (swiperRef.current && swiperRef.current.swiper) {
// swiperRef.current.swiper.slidePrev();
// }
// };
// return (
// <div className="min-h-screen bg-gray-100">
// {/* Header */}
// <header className="bg-[#2a1e1e] text-white py-4 px-6">
// <div className="container mx-auto flex justify-between items-center">
// <div className="logo transition-transform duration-300 hover:scale-105">
// <h1 className="text-2xl font-bold">GadgetZ</h1>
// </div>
// <nav className="hidden md:flex items-center space-x-8">
// <NavItem text="Home" active />
// <NavItem text="About" />
// <NavItem text="Blog" />
// <NavItem text="Shop" />
// <NavItem text="Pages" />
// <NavItem text="Contact" />
// </nav>
// <div className="flex items-center space-x-4">
// <button className="text-white hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">
// <i className="fas fa-search"></i>
// </button>
// <div className="relative" id="userMenuContainer">
// <button
// id="userMenuButton"
// className="text-white hover:text-[#ff5733] transition-colors duration-300 cursor-pointer"
// onClick={() => {
// const menu = document.getElementById('userDropdownMenu');
// const isVisible = menu?.classList.contains('opacity-100');
// if (isVisible) {
// menu.classList.remove('opacity-100', 'translate-y-0');
// menu.classList.add('opacity-0', 'translate-y-[-10px]');
// setTimeout(() => {
// menu.style.display = 'none';
// }, 200);
// } else if (menu) {
// menu.style.display = 'block';
// setTimeout(() => {
// menu.classList.remove('opacity-0', 'translate-y-[-10px]');
// menu.classList.add('opacity-100', 'translate-y-0');
// }, 0);
// }
// }}
// >
// <i className="fas fa-user"></i>
// </button>
// <div
// id="userDropdownMenu"
// className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 opacity-0 translate-y-[-10px] transition-all duration-200 ease-out hidden"
// >
// <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#ff5733] hover:text-white transition-colors duration-200">
// <i className="fas fa-sign-in-alt mr-2"></i>Login
// </a>
// <a href="https://readdy.ai/home/7c7f40d6-eefd-42f8-a3d9-ca585a85bfe9/021ed0cb-afd2-48ec-a17a-595a3b70b985" data-readdy="true" className="block px-4 py-2 text-gray-800 hover:bg-[#ff5733] hover:text-white transition-colors duration-200">
// <i className="fas fa-user-plus mr-2"></i>Register
// </a>
// </div>
// </div>
// <button className="text-white hover:text-[#ff5733] transition-colors duration-300 relative cursor-pointer">
// <i className="fas fa-shopping-cart"></i>
// <span className="absolute -top-2 -right-2 bg-[#ff5733] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
// 4
// </span>
// </button>
// </div>
// </div>
// </header>
// {/* Hero Section */}
// <section className="relative overflow-hidden">
// <div className="bg-gradient-to-r from-[#ff5733] to-[#ff7433] min-h-[600px] relative">
// {/* Diagonal shapes */}
// <div className="absolute bottom-0 left-0 w-full h-32 bg-gray-100 transform -skew-y-3 origin-bottom-left"></div>
// <div className="absolute bottom-0 right-0 w-1/3 h-96 bg-black transform skew-y-12 origin-bottom-right"></div>
// <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
// {/* Text Content */}
// <div className={`md:w-1/2 z-10 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'} transition-all duration-1000 ease-out`}>
// <h2 className="text-white text-5xl md:text-7xl font-bold mb-6">LUXURY LIFESTYLE</h2>
// <p className="text-white text-lg mb-8 opacity-90">Discover our exclusive collection of premium lifestyle products.</p>
// <button className="bg-[#ff5733] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg !rounded-button whitespace-nowrap cursor-pointer border-2 border-white">
// BUY NOW
// </button>
// </div>
// {/* Watch Image */}
// <div className={`md:w-1/2 mt-10 md:mt-0 z-10 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} transition-all duration-1000 delay-300 ease-out`}>
// <div className="relative w-full h-full flex justify-center items-center">
// <div className="bg-white rounded-full w-[450px] h-[450px] flex items-center justify-center overflow-hidden shadow-2xl hover:animate-float relative group">
// <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
// <Swiper
// ref={swiperRef}
// modules={[Pagination, Autoplay]}
// className="w-full h-full"
// pagination={{ clickable: true }}
// autoplay={{
// delay: 3000,
// disableOnInteraction: false,
// }}
// loop={true}
// >
// <SwiperSlide className="flex items-center justify-center">
// <img
// src="https://readdy.ai/api/search-image?query=Elegant%20handcrafted%20wooden%20furniture%20set%20with%20intricate%20carved%20details%2C%20premium%20living%20room%20arrangement%20with%20sophisticated%20sofa%20and%20coffee%20table%2C%20luxurious%20home%20decor%20on%20minimalist%20white%20background%2C%20professional%20interior%20photography%2C%20ultra%20detailed%2C%20studio%20lighting&width=600&height=600&seq=10&orientation=squarish"
// alt="Luxury Furniture"
// className="w-[90%] h-[90%] object-contain hover:rotate-360 transition-transform duration-7000 ease-linear"
// />
// </SwiperSlide>
// <SwiperSlide className="flex items-center justify-center">
// <img
// src="https://readdy.ai/api/search-image?query=Exquisite%20handmade%20ceramic%20vase%20with%20traditional%20patterns%2C%20artisanal%20pottery%20with%20intricate%20details%2C%20premium%20handicraft%20masterpiece%20on%20minimalist%20white%20background%2C%20professional%20product%20photography%2C%20ultra%20detailed%2C%20studio%20lighting&width=600&height=600&seq=11&orientation=squarish"
// alt="Artisanal Handicraft"
// className="w-[90%] h-[90%] object-contain hover:rotate-360 transition-transform duration-7000 ease-linear"
// />
// </SwiperSlide>
// <SwiperSlide className="flex items-center justify-center">
// <img
// src="https://readdy.ai/api/search-image?query=Luxurious%20diamond%20necklace%20with%20precious%20gemstones%2C%20high-end%20jewelry%20piece%20with%20intricate%20gold%20setting%2C%20premium%20jewellery%20on%20minimalist%20white%20background%2C%20professional%20product%20photography%2C%20ultra%20detailed%2C%20studio%20lighting&width=600&height=600&seq=12&orientation=squarish"
// alt="Luxury Jewelry"
// className="w-[90%] h-[90%] object-contain hover:rotate-360 transition-transform duration-7000 ease-linear"
// />
// </SwiperSlide>
// <SwiperSlide className="flex items-center justify-center">
// <img
// src="https://readdy.ai/api/search-image?query=Premium%20organic%20skincare%20set%20with%20luxury%20packaging%2C%20high-end%20beauty%20and%20wellness%20products%20with%20natural%20ingredients%2C%20professional%20cosmetics%20on%20minimalist%20white%20background%2C%20elegant%20product%20photography%2C%20ultra%20detailed%2C%20studio%20lighting&width=600&height=600&seq=13&orientation=squarish"
// alt="Beauty Products"
// className="w-[90%] h-[90%] object-contain hover:rotate-360 transition-transform duration-7000 ease-linear"
// />
// </SwiperSlide>
// </Swiper>
// </div>
// <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
// <button onClick={goPrev} className="bg-white p-3 rounded-full shadow-lg hover:bg-[#ff5733] hover:text-white transition-colors duration-300 group">
// <i className="fas fa-chevron-up text-[#ff5733] group-hover:text-white"></i>
// </button>
// <button onClick={goNext} className="bg-white p-3 rounded-full shadow-lg hover:bg-[#ff5733] hover:text-white transition-colors duration-300 group">
// <i className="fas fa-chevron-down text-[#ff5733] group-hover:text-white"></i>
// </button>
// </div>
// </div>
// </div>
// </div>
// </div>
// </section>
// {/* Featured Products Section */}
// <section className={`py-16 px-6 bg-white ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-600`}>
// <div className="container mx-auto">
// <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// {featuredProducts.map((product, index) => (
// <ProductCard
// key={index}
// product={product}
// delay={index * 100}
// isLoaded={isLoaded}
// />
// ))}
// </div>
// </div>
// </section>
// {/* Collection Banner */}
// <section className={`py-16 px-6 bg-gray-100 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-900`}>
// <div className="container mx-auto">
// <div className="bg-gradient-to-r from-[#333] to-[#111] rounded-xl overflow-hidden">
// <div className="flex flex-col md:flex-row">
// <div className="md:w-1/2 p-12 flex flex-col justify-center">
// <h3 className="text-white text-4xl font-bold mb-4">New Collection 2025</h3>
// <p className="text-gray-300 mb-8">Discover our latest timepieces crafted with precision and elegance. Perfect for those who appreciate fine craftsmanship and timeless design.</p>
// <button className="bg-[#ff5733] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-[#ff5733] transition-all duration-300 hover:scale-105 hover:shadow-lg self-start !rounded-button whitespace-nowrap cursor-pointer">
// EXPLORE NOW
// </button>
// </div>
// <div className="md:w-1/2">
// <img
// src="https://readdy.ai/api/search-image?query=Luxury%20watch%20collection%20display%2C%20multiple%20premium%20watches%20arranged%20elegantly%20on%20dark%20background%2C%20high-end%20timepieces%20showcase%2C%20professional%20product%20photography%20with%20dramatic%20lighting%2C%20ultra%20detailed%20studio%20shot&width=700&height=500&seq=2&orientation=landscape"
// alt="Watch Collection"
// className="w-full h-full object-cover"
// />
// </div>
// </div>
// </div>
// </div>
// </section>
// {/* Footer */}
// <footer className="bg-[#2a1e1e] text-white py-12 px-6">
// <div className="container mx-auto">
// <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// <div>
// <h3 className="text-xl font-bold mb-4">GadgetZ</h3>
// <p className="text-gray-300 mb-4">Premium watches and accessories for the modern individual.</p>
// <div className="flex space-x-4">
// <a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">
// <i className="fab fa-facebook-f"></i>
// </a>
// <a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">
// <i className="fab fa-twitter"></i>
// </a>
// <a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">
// <i className="fab fa-instagram"></i>
// </a>
// <a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">
// <i className="fab fa-pinterest"></i>
// </a>
// </div>
// </div>
// <div>
// <h3 className="text-xl font-bold mb-4">Quick Links</h3>
// <ul className="space-y-2">
// <li><a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">Home</a></li>
// <li><a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">Shop</a></li>
// <li><a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">About Us</a></li>
// <li><a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">Contact</a></li>
// </ul>
// </div>
// <div>
// <h3 className="text-xl font-bold mb-4">Customer Service</h3>
// <ul className="space-y-2">
// <li><a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">FAQ</a></li>
// <li><a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">Shipping & Returns</a></li>
// <li><a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">Warranty</a></li>
// <li><a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">Privacy Policy</a></li>
// </ul>
// </div>
// <div>
// <h3 className="text-xl font-bold mb-4">Newsletter</h3>
// <p className="text-gray-300 mb-4">Subscribe to receive updates on new arrivals and special offers.</p>
// <div className="flex">
// <input
// type="email"
// placeholder="Your email"
// className="px-4 py-2 w-full border-none focus:outline-none text-gray-800"
// />
// <button className="bg-[#ff5733] text-white px-4 py-2 hover:bg-[#ff7433] transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer">
// Subscribe
// </button>
// </div>
// </div>
// </div>
// <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
// <p className="text-gray-400">© 2025 GadgetZ. All rights reserved.</p>
// <div className="flex space-x-4 mt-4 md:mt-0">
// <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
// <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
// <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
// <i className="fab fa-cc-amex text-2xl text-gray-400"></i>
// </div>
// </div>
// </div>
// </footer>
// {/* Custom CSS for animations */}
// <style jsx>{`
// @keyframes float {
// 0% { transform: translateY(0px); }
// 50% { transform: translateY(-10px); }
// 100% { transform: translateY(0px); }
// }
// @keyframes rotate-360 {
// from { transform: rotate(0deg); }
// to { transform: rotate(360deg); }
// }
// .hover\\:rotate-360:hover {
// animation: rotate-360 20s linear infinite;
// }
// .hover\\:animate-float:hover {
// animation: float 3s ease-in-out infinite;
// }
// `}</style>
// </div>
// );
// };
// // Navigation Item Component
// const NavItem: React.FC<{ text: string; active?: boolean }> = ({ text, active }) => {
// return (
// <a
// href="#"
// className={`relative group cursor-pointer ${
// active ? 'text-[#ff5733]' : 'text-white'
// }`}
// >
// {text}
// <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff5733] transition-all duration-300 group-hover:w-full"></span>
// <i className={`ml-1 fas fa-chevron-down text-xs ${active ? 'text-[#ff5733]' : 'text-white'}`}></i>
// </a>
// );
// };
// // Product Card Component
// const ProductCard: React.FC<{
// product: {
// name: string;
// price: string;
// image: string;
// isNew?: boolean;
// isSale?: boolean;
// };
// delay: number;
// isLoaded: boolean;
// }> = ({ product, delay, isLoaded }) => {
// return (
// <div
// className={`bg-white rounded-lg shadow-md overflow-hidden transform ${
// isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
// } transition-all duration-700`}
// style={{ transitionDelay: `${delay}ms` }}
// >
// <div className="relative overflow-hidden group">
// <img
// src={product.image}
// alt={product.name}
// className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
// />
// {product.isNew && (
// <span className="absolute top-4 left-4 bg-[#ff5733] text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
// )}
// {product.isSale && (
// <span className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
// )}
// <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
// <button className="bg-white text-[#ff5733] p-3 rounded-full mx-2 hover:bg-[#ff5733] hover:text-white transition-colors duration-300 !rounded-button cursor-pointer">
// <i className="fas fa-shopping-cart"></i>
// </button>
// <button className="bg-white text-[#ff5733] p-3 rounded-full mx-2 hover:bg-[#ff5733] hover:text-white transition-colors duration-300 !rounded-button cursor-pointer">
// <i className="fas fa-heart"></i>
// </button>
// <button className="bg-white text-[#ff5733] p-3 rounded-full mx-2 hover:bg-[#ff5733] hover:text-white transition-colors duration-300 !rounded-button cursor-pointer">
// <i className="fas fa-search"></i>
// </button>
// </div>
// </div>
// <div className="p-4">
// <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
// <div className="flex items-center justify-between">
// <span className="text-[#ff5733] font-bold">{product.price}</span>
// <div className="flex text-yellow-400">
// <i className="fas fa-star"></i>
// <i className="fas fa-star"></i>
// <i className="fas fa-star"></i>
// <i className="fas fa-star"></i>
// <i className="fas fa-star-half-alt"></i>
// </div>
// </div>
// </div>
// </div>
// );
// };
// // Sample data
// const featuredProducts = [
// {
// name: "Chronograph Steel",
// price: "$299.99",
// image: "https://readdy.ai/api/search-image?query=Luxury%20stainless%20steel%20chronograph%20watch%20with%20black%20dial%2C%20silver%20bracelet%2C%20professional%20timepiece%20with%20date%20display%2C%20high-end%20watch%20on%20plain%20white%20background%2C%20premium%20product%20photography%2C%20ultra%20detailed%2C%20studio%20lighting&width=500&height=500&seq=3&orientation=squarish",
// isNew: true
// },
// {
// name: "Diver Pro Blue",
// price: "$349.99",
// image: "https://readdy.ai/api/search-image?query=Luxury%20blue%20dial%20diving%20watch%20with%20stainless%20steel%20bracelet%2C%20professional%20diving%20timepiece%20with%20rotating%20bezel%2C%20high-end%20watch%20on%20plain%20white%20background%2C%20premium%20product%20photography%2C%20ultra%20detailed%2C%20studio%20lighting&width=500&height=500&seq=4&orientation=squarish"
// },
// {
// name: "Classic Gold",
// price: "$499.99",
// image: "https://readdy.ai/api/search-image?query=Luxury%20gold%20watch%20with%20white%20dial%2C%20elegant%20dress%20timepiece%20with%20date%20display%2C%20premium%20gold%20bracelet%2C%20high-end%20watch%20on%20plain%20white%20background%2C%20professional%20product%20photography%2C%20ultra%20detailed%2C%20studio%20lighting&width=500&height=500&seq=5&orientation=squarish",
// isSale: true
// },
// {
// name: "Smart Hybrid",
// price: "$279.99",
// image: "https://readdy.ai/api/search-image?query=Modern%20smartwatch%20with%20black%20display%20and%20leather%20strap%2C%20digital%20fitness%20tracker%20with%20heart%20rate%20monitor%2C%20premium%20wearable%20technology%20on%20plain%20white%20background%2C%20professional%20product%20photography%2C%20ultra%20detailed%2C%20studio%20lighting&width=500&height=500&seq=6&orientation=squarish"
// }
// ];
// export default App