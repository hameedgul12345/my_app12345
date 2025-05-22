import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const [showProfile, setShowProfile] = useState(false);
  const[icon, setIcon] = useState(true)

  const links = [
    {
      link: "/",
      title: "Home",
      icon: <i className="ri-home-fill"></i>,
    },

    {
      link: "/products",
      title: "Products",
      icon: <i className="ri-shopping-cart-fill"></i>,
    },

    {
      link: "/contactus",
      title: "Contact us",
      icon: <i className="ri-mail-fill"></i>,
    },
    {
      link: "/login",
      title: "Login",
      icon: <i className="ri-login-circle-fill"></i>,
    },
    {
      link: "/signup",
      title: "Signup",
      icon: <i className="ri-login-circle-fill"></i>,
    },
  ];
  return (
    <>
      <header className="bg-white shadow-md p-4 flex justify-between  items-center">
        <div>
          <img
            src="/images/logo.png"
            style={{ width: "100px", height: "30px" }}
            alt=""
          />
        </div>
        <nav className="hidden md:flex items-center justify-end w-full">
          <ul className="flex space-x-4">
            {links.map((link) => (
              <li key={link.link}>
                <Link
                  to={link.link}
                  className={`flex items-center space-x-2 ${
                    location.pathname === link.link ? "text-[#4DD36F]" : ""
                  }`}
                >
                  <span
                    className="text-[16px] "
                    style={{
                      fontFamily: "Rowdies",
                      fontWeight: 100,
                      fontStyle: "normal",
                    }}
                  >
                    {link.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {/* <img
            src="/images/backhero.jpg"
            onClick={() => setShowProfile(!showProfiile)}
            className="w-8 h-8 rounded-full ml-4"
            alt=""
          />
          <div
            className={`${
              showProfiile ? "block" : "hidden"
            } absolute right-4 top-20 bg-white shadow-lg rounded-lg p-4 w-48 `}
          >
            <div className="flex flex-col justify-between">
             <div className="flex flex-row justify-start items-center gap-4">
               <i className="ri-file-user-fill"></i>
              <h1>my profile </h1>
             </div>
              <div className="flex flex-row justify-start items-center gap-4">
                <i className="ri-luggage-cart-fill"></i> <h1>My Cart</h1>
              </div>
               <div className="flex flex-row justify-start items-center gap-4">
                <i className="ri-dashboard-3-fill"></i> <h1>Go to Dashboard</h1>
              </div>
              <div className="flex flex-row justify-start items-center gap-4">
                <i class="ri-logout-circle-r-fill"></i> <h1>Logout</h1>
              </div>
            </div>
          </div> */}

          <div className="relative z-50">
            {/* Profile Avatar */}
            <img
              src="/images/backhero.jpg"
              onClick={() => setShowProfile(!showProfile)}
              className="w-8 h-8 rounded-full ml-4 cursor-pointer transition-transform duration-300 hover:scale-110"
              alt="Profile"
            />

            {/* Dropdown Menu */}
            <div
              className={`absolute right-4 top-20 bg-white shadow-lg rounded-lg p-4 w-48 transform transition-all duration-300 ease-in-out ${
                showProfile
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="flex flex-col gap-3">
                {/* My Profile */}
                <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer transition">
                  <i className="ri-file-user-fill text-green-500"></i>
                  <h1 className="text-sm font-medium">My Profile</h1>
                </div>

                {/* My Cart */}
                <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer transition">
                  <i className="ri-luggage-cart-fill text-green-500"></i>
                  <h1 className="text-sm font-medium">My Cart</h1>
                </div>

                {/* Go to Dashboard */}
                <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer transition">
                  <i className="ri-dashboard-3-fill text-green-500"></i>
                  <h1 className="text-sm font-medium">Dashboard</h1>
                </div>

                {/* Logout */}
                <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md cursor-pointer transition">
                  <i className="ri-logout-circle-r-fill text-red-500"></i>
                  <h1 className="text-sm font-medium text-red-500">Logout</h1>
                </div>
              </div>
            </div>
          </div>
       
        </nav>
        {icon?<i className="ri-menu-line md:hidden" onClick={()=>setIcon(!icon)}></i>:<i className="ri-menu-2-line md:hidden" onClick={()=>setIcon(!icon)}></i>}

      </header>
       <aside className={`${icon?'w-64 py-6 px-4':'w-0 overflow-hidden'} md:hidden transform transition duration-300 ease-in-out h-screen bg-white shadow-md fixed top-0 left-0 flex flex-col  z-40`}>
      
      <ul className="flex flex-col space-y-4">
        {links.map((link) => (
          <li key={link.link}>
            <Link
              to={link.link}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-300 ${
                location.pathname === link.link
                  ? "text-[#4DD36F] bg-gray-100"
                  : "text-gray-700 hover:text-[#4DD36F] hover:bg-gray-100"
              }`}
            >
              <span
                className="text-[16px]"
                style={{
                  fontFamily: "Rowdies",
                  fontWeight: 100,
                  fontStyle: "normal",
                }}
              >
                {link.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
      {children}
      <footer className="bg-white border-t border-gray-200 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-red-600 flex items-center">
              <span className="text-3xl mr-2">👓</span>Famms
            </h2>
            <p className="mt-4 text-sm">
              <strong>ADDRESS:</strong> 28 White tower, Street Name New York
              City, USA
            </p>
            <p className="text-sm">
              <strong>TELEPHONE:</strong> +91 987 654 3210
            </p>
            <p className="text-sm">
              <strong>EMAIL:</strong> yourmain@gmail.com
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">MENU</h3>
            <ul className="space-y-1 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Testimonial</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">ACCOUNT</h3>
            <ul className="space-y-1 text-sm">
              <li>Account</li>
              <li>Checkout</li>
              <li>Login</li>
              <li>Register</li>
              <li>Shopping</li>
              <li>Widget</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">NEWSLETTER</h3>
            <p className="text-sm mb-2">
              Subscribe by our newsletter and get update protidin.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Mail"
                className="border border-gray-300 p-2 w-full text-sm"
              />
              <button className="bg-red-500 text-white px-4 ml-2 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white text-center py-4 text-sm">
          <p>
            © 2021 All Rights Reserved By{" "}
            <span className="text-red-500">Free Html Templates</span>
            <br />
            Distributed By <span className="text-red-500">ThemeWagon</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
