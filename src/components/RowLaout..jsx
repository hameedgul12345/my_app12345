
// // import React, { useState } from "react";
// // import { Link, Outlet, useLocation } from "react-router-dom";
// // import "animate.css";

// // function Layout({ children }) {
// //   const [dropDownButton, setDropDownButton] = useState(false);
// //   const [width, setWidth] = useState("75%");
// //   const [leftMargin, setLeftMargin] = useState("20%");
// //   const [menu, setMenu] = useState(true);
// //   const location = useLocation();

// //   const setUIFull = () => {
// //     setWidth("95%");
// //     setLeftMargin("0%");
// //     setMenu(!menu);
// //   };

// //   const setUIHalf = () => {
// //     setWidth("75%");
// //     setLeftMargin("20%");
// //     setMenu(!menu);
// //   };

// //   const links = [
// //     {
// //       link: "/dashboard",
// //       title: "Dashboard",
// //       icon: <i className="ri-dashboard-fill"></i>,
// //     },
// //     {
// //       link: "/menu",
// //       title: "Menu",
// //       icon: <i className="ri-slideshow-fill"></i>,
// //     },
   
// //     {
// //       link: "/order",
// //       title: "Order",
// //       icon: <i className="ri-archive-fill"></i>,
// //     },
// //      {
// //       link: "/restuarent_list",
// //       title: "Restuarent List",
// //       icon: <i class="ri-list-ordered-2"></i>
// //     },
// //     {
// //       link: "/invoice",
// //       title: "Invoice",
// //       icon: <i className="ri-slideshow-fill"></i>,
// //     },

// //     {
// //       link: "/customers",
// //       title: "Customers",
// //       icon: <i className="ri-customer-service-fill"></i>,
// //     },
// //     {
// //       link: "/logout",
// //       title: "Logout",
// //       icon: <i className="ri-logout-circle-line"></i>,
// //     },
// //   ];

// //   return (
// //     <>
// //       <div className="w-full">
// //         <aside
// //           style={{
// //             width: leftMargin,
// //             minHeight: "100vh",
// //             position: "fixed",
// //             top: "0%",
// //             left: "0%",
// //             overflow: "hidden",
// //             transition: "0.75s ease",
// //           }}
// //         >
// //           <div className="flex flex-col justify-center">
// //             <div className="bg-[#EBEBEB] h-20">
// //               <img
// //                 src="/images/costiclogo.png"
// //                 className="mx-auto my-4 w-32"
// //                 alt=""
// //               />
// //             </div>
// //             <div className="flex flex-col gap-4">
// //               {links.map((route, index) => (
// //                 <Link key={index} to={route.link}>
// //                   <div
// //                     className={`flex flex-row gap-2 p-2 ${
// //                       location.pathname === route.link
// //                         ? "bg-red-500 text-white"
// //                         : "bg-white text-black"
// //                     }`}
// //                   >
// //                     {route.icon} <h3 className="text-lg">{route.title}</h3>
// //                   </div>
// //                 </Link>
// //               ))}
// //             </div>
// //           </div>
// //         </aside>
// //         <section
// //           style={{
// //             width: width,
// //             marginLeft: leftMargin,
// //             transition: "0.75s ease",
// //           }}
// //         >
// //           <div className="flex items-center justify-between p-4 bg-white shadow-md">
// //             <div className="flex items-center space-x-2">
// //               {menu ? (
// //                 <i className="ri-menu-line" onClick={setUIFull}></i>
// //               ) : (
// //                 <i className="ri-menu-2-line" onClick={setUIHalf}></i>
// //               )}
// //             </div>
// //             <div className="flex items-center space-x-4">
// //               <div className="flex items-center flex-grow max-w-xl bg-gray-100 border border-gray-300 rounded-full">
// //                 <input
// //                   type="text"
// //                   placeholder="Search here..."
// //                   className="w-full px-4 py-2 text-sm bg-transparent focus:outline-none"
// //                 />
// //                 <i className="ri-search-line text-gray-500 text-xl pr-4"></i>
// //               </div>
// //               <i className="ri-mail-line text-gray-500 text-xl hover:text-gray-700 cursor-pointer"></i>
// //               <i className="ri-notification-3-line text-gray-500 text-xl hover:text-gray-700 cursor-pointer"></i>
// //               <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
// //                 <img
// //                   src="/images/userProfile.jpg"
// //                   alt="Profile"
// //                   className="w-full object-cover"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //         <aside
// //           style={{
// //             width: "5%",
// //             display: "flex",
// //             flexDirection: "column",
// //             alignItems: "center",
// //             minHeight: "100vh",
// //             position: "fixed",
// //             top: "0%",
// //             right: "0%",
// //             overflow: "hidden",
// //             border: "1px solid #EBEBEB",
// //             gap: "30px",
// //           }}
// //           className="p-4"
// //         >
// //           <i className="ri-todo-line text-gray-500 text-xl"></i>
// //           <i className="ri-notification-3-line text-gray-500 text-xl"></i>
// //           <i className="ri-pencil-line text-gray-500 text-xl"></i>
// //           <i className="ri-share-line text-gray-500 text-xl"></i>
// //           <i className="ri-settings-2-line text-gray-500 text-xl"></i>
// //         </aside>
// //       </div>
// //       <div
// //         style={{
// //           marginLeft: leftMargin,
// //           transition: "0.75s ease",
// //           width: width,
// //           background:'#F0F0FA'
// //         }}
// //         className="p-4"
// //       >
// //         {children}
// //       </div>
// //     </>
// //   );
// // }

// // export default Layout;

//  <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-bold mb-2">Top Selling</h2>
//           <p className="text-gray-600">Cum doctus civibus efficiantur in imperdiet deterruisset</p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product, index) => (
//             <div key={product.id} className="bg-gray-50 rounded-lg overflow-hidden group relative transition-all duration-300 hover:shadow-md">
//               <div className="relative h-52 sm:h-64 overflow-hidden">
//                 {product.discount && (
//                   <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
//                     -{product.discount}%
//                   </div>
//                 )}
//                 {product.isNew && (
//                   <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 text-xs font-bold rounded">
//                     NEW
//                   </div>
//                 )}
                
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
                
//                 {index === 1 && (
//                   <div className="absolute top-4 right-4 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <button 
//                       onClick={() => toggleFavorite(product.id)}
//                       className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
//                     >
//                       <Heart size={16} className={favorites.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'} />
//                     </button>
                    
//                     <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors">
//                       <BarChart2 size={16} className="text-gray-600" />
//                     </button>
                    
//                     <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors">
//                       <ShoppingCart size={16} className="text-gray-600" />
//                     </button>
//                   </div>
//                 )}
                
//                 <div className="absolute bottom-3 left-3">
//                   <div className="flex items-center bg-red-500 text-white px-2 py-1 rounded-md text-xs">
//                     <Clock size={14} className="mr-1" />
//                     <span>
//                       {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="p-4">
//                 <div className="flex mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={16}
//                       className={`${
//                         i < product.rating
//                           ? 'text-yellow-400 fill-yellow-400'
//                           : 'text-gray-300'
//                       }`}
//                     />
//                   ))}
//                 </div>
                
//                 <h3 className="font-medium text-gray-800 mb-2 truncate">{product.name}</h3>
                
//                 <div className="flex items-center">
//                   <span className="text-blue-600 font-bold">${product.currentPrice.toFixed(2)}</span>
//                   {product.originalPrice && (
//                     <span className="ml-2 text-gray-400 line-through text-sm">
//                       ${product.originalPrice.toFixed(2)}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>


