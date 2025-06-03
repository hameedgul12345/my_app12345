// // import React, { useState } from 'react'

// // function Login() {
// //   const [role, setRole] = useState('customer');
// //   return (

// // <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">

// //       <div className="bg-white shadow-md rounded-lg px-10 py-8 w-full max-w-md">

// //         {/* Sign In Header */}
// //         <h2 className="text-center text-xl font-semibold mb-6">Sign In to Your Account</h2>

// //         {/* Role Selection */}
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium mb-1">Login As</label>
// //           <select
// //             value={role}
// //             onChange={(e) => setRole(e.target.value)}
// //             className="w-full px-3 py-2 border border-gray-300 rounded-md "
// //           >
// //             <option className='text-[16px]' value="customer">Customer</option>
// //             <option value="seller">Seller</option>
// //           </select>
// //         </div>

// //         {/* Email Input */}
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium mb-1">Email Address</label>
// //           <input
// //             type="email"
// //             placeholder="Enter your email address"
// //             className="w-full px-3 py-2 border border-gray-300 rounded-md"
// //           />
// //         </div>

// //         {/* Password Input */}
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium mb-1">Password</label>
// //           <div className="relative">
// //             <input
// //               type="password"
// //               placeholder="Enter your password"
// //               className="w-full px-3 py-2 border border-gray-300 rounded-md"
// //             />
// //             <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">👁️</span>
// //           </div>
// //         </div>

// //         {/* Remember Me & Forgot Password */}
// //         <div className="flex items-center justify-between mb-6">
// //           <label className="flex items-center text-sm">
// //             <input type="checkbox" className="mr-2" />
// //             Remember me
// //           </label>
// //           <a href="#" className="text-sm text-green-500 hover:underline">Forgot Password?</a>
// //         </div>

// //         {/* Sign In Button */}
// //         <button
// //           className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md"
// //           onClick={() => {
// //             // Placeholder: Add your actual login logic here
// //             alert(`Logging in as: ${role}`);
// //           }}
// //         >
// //           Sign In
// //         </button>

// //         {/* Sign Up Link */}
// //         <p className="text-center text-sm mt-4">
// //           Don’t have an account?
// //           <a href="#" className="text-green-500 font-medium ml-1 hover:underline">Sign Up</a>
// //         </p>
// //       </div>

// //     </div>

// //   )
// // }

// // export default Login

// // import { useState } from "react";

// //  function Login() {
// //   const [darkMode, setDarkMode] = useState(false);
// //   const toggleDarkMode = () => setDarkMode(!darkMode);

// //   return (
// //     <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
// //       <div className="bg-white rounded-xl shadow-lg flex w-[90%] max-w-4xl overflow-hidden">
// //         {/* Left Panel */}
// //         <div className="w-1/2 bg-teal-800 text-white p-10 flex flex-col justify-between">
// //           <div>
// //             <h2 className="text-2xl font-bold mb-2">Hi, Welcome!!</h2>
// //             <p className="mb-4">Enter your details to login or login with social media apps</p>
// //             <p className="mb-6">Not registered? Click below to register.</p>
// //             <button className="bg-white text-teal-800 font-semibold hover:bg-gray-100 px-4 py-2 rounded">Sign Up</button>
// //           </div>
// //           <div>
// //             <label className="flex items-center space-x-2">
// //               <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
// //               <span>Dark Mode</span>
// //             </label>
// //           </div>
// //         </div>

// //         {/* Right Panel */}
// //         <div className="w-1/2 p-10">
// //           <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
// //           <div className="space-y-4">
// //             <input type="text" placeholder="Username" className="w-full border border-gray-300 p-2 rounded" />
// //             <input type="password" placeholder="Password" className="w-full border border-gray-300 p-2 rounded" />
// //             <a href="#" className="text-blue-600 text-sm hover:underline">Forgot your password?</a>
// //             <button className="w-full bg-blue-600 text-white py-2 rounded">Sign In</button>
// //           </div>

// //           <div className="mt-6 text-center text-sm text-gray-500">Or Register with social media</div>

// //           <div className="flex justify-center mt-4 space-x-4">
// //             <button className="border p-2 rounded hover:bg-gray-100 text-lg">G</button>
// //             <button className="border p-2 rounded hover:bg-gray-100 text-lg">f</button>
// //             <button className="border p-2 rounded hover:bg-gray-100 text-lg">GH</button>
// //           </div>

// //           <div className="mt-4 flex items-center space-x-2">
// //             <input type="checkbox" />
// //             <span>Remember me</span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;

// import React, { useState } from "react";

// function Login() {
//   const [role, setRole] = useState("customer");
//   return (
//     <div
//       style={{
//         backgroundImage: `url('/images/mountain2.jpg')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "black",
//           opacity: "0.7",
//           height: "100vh",
//           width: "100%",
//         }}
//         className="flex items-center justify-center gap-8"
//       >
//         {/* <div className="backdrop-blur-lg bg-white/10  border rounded-tr-lg rounded-br-lg border-white/30  p-8 w-96 shadow-lg text-white">
          
//         </div> */}
//         {/* Left Panel */}
//         <div className=" bg-teal-800 w-[40%] h-[78vh] text-white p-10 flex flex-col justify-between border rounded-tr-[100px] rounded-br-[100px] border-white/30 ">
//           <div className="flex flex-col items-center justify-center h-full">
//             <div>
//               {" "}
//               <h1 className="text-center text-2xl">Your Logo</h1>
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold mb-2">Hi, Welcome!!</h2>
//               <p className="mb-4 text-[16px]">
//                 Enter your details to login or login with <br /> social media
//                 apps
//               </p>
//               <p className="mb-6 text-[16px]">
//                 Not registered? Click below to register.
//               </p>
//               <button className="bg-white text-teal-800 text-xl font-semibold hover:bg-gray-100 px-4 py-2 rounded">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-lg p-8 w-96 shadow-lg text-white">
//           <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
//           <label className="block text-sm font-medium mb-1 text-white">
//             Login As
//           </label>
//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="w-full mb-4 p-3 rounded bg-white/20 placeholder-white text-white focus:outline-none"
//           >
//             <option className="text-black" value="customer">
//               Customer
//             </option>
//             <option className="text-black" value="seller">
//               Seller
//             </option>
//           </select>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full mb-4 p-3 rounded bg-white/20 placeholder-white text-white focus:outline-none"
//           />
//           <input
//             type="password"
//             placeholder="Enter your password"
//             className="w-full mb-4 p-3 rounded bg-white/20 placeholder-white text-white focus:outline-none"
//           />
//           <div className="flex justify-between items-center text-sm mb-4">
//             <label className="flex items-center space-x-2">
//               <input type="checkbox" />
//               <span>Remember me</span>
//             </label>
//             <a href="#" className="hover:underline">
//               Forgot password?
//             </a>
//           </div>
//           <button className="w-full py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
//             Log In
//           </button>
//           <div className="mt-6 text-center text-sm text-white-500">
//             Or Login{" "}
//           </div>

//           <div className="flex justify-center mt-4 space-x-4">
//             <i className="ri-google-fill text-2xl text-white"></i>
//             <i className="ri-facebook-fill  text-2xl text-white"></i>

//             <i className="ri-tiktok-line  text-2xl text-white"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [role, setRole] = useState("customer");
  const navigateToSignup = useNavigate()
  return (
   <Layout>
     <div className="min-h-screen flex flex-col">
      {/* Registration Form Section */}
      <section className="flex-grow py-12 px-6 opacity-100 min-h-[70vh]">
        <div className="container mx-auto max-w-6xl">
          <div className="  overflow-hidden pb-4 flex flex-col md:flex-row">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 relative overflow-hidden border min-h-[70vh]   md:h-[100vh]">
              <img
                src="https://img.freepik.com/free-photo/beautiful-rendering-steel-object_23-2151897674.jpg?ga=GA1.1.1047794960.1739353080&semt=ais_items_boosted&w=740"
                alt="Gadgets and Electronics"
                className="w-full  object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h2 className=" text-3xl font-bold mb-2 text-white">
                  Wellcome to My Website
                </h2>
                <p className="/90 mb-4 text-white">
                  Discover premium gadgets and exclusive deals
                </p>
                <div className="flex space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <i className="fas fa-mobile-alt  text-xl"></i>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <i className="fas fa-laptop  text-xl"></i>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <i className="fas fa-headphones  text-xl"></i>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <i className="fas fa-camera  text-xl"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full md:w-1/2  md:p-8  md:h-[50vh]">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                  Enter Your Details
                </h2>
                <p className="text-gray-600 mt-2">
                  Join us for exclusive offers and updates
                </p>
              </div>

              <form action="">
                <div className="mb-4">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full p-3 text-black bg-gray-200 rounded-full  "
                  >
                    <option className="text-black" value="customer">
                      Customer
                    </option>
                    <option className="text-black" value="seller">
                      Seller
                    </option>
                  </select>
                </div>

              

                <div className="grid grid-cols-1 gap-4 mb-2">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full p-3 mt-3 text-black bg-gray-200 rounded-full placeholder-black  focus:outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full p-3 mt-3 text-black bg-gray-200 rounded-full placeholder-black  focus:outline-none"
                  />
                </div>

                <button className="md:w-[30%] w-[50%] mt-3 py-2 bg-blue-600 text-white font-semibold rounded-full transition">
                  Signin
                </button>

                <div className="mt-6 text-center  text-sm -500">
                  Or Signin with Social Media
                </div>

                <div className="flex justify-center mt-4 space-x-4">
                  <i className="ri-google-fill text-2xl "></i>
                  <i className="ri-facebook-fill text-2xl "></i>
                  <i className="ri-tiktok-line text-2xl "></i>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                 Don't have an account?{" "}
                  <a
                    href="#"
                    onClick={() => navigateToSignup("/signup")}
                    className="text-[#ff5733] font-medium hover:underline cursor-pointer"
                  >
                    Signup here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
   </Layout>
  );
}

export default Signin;