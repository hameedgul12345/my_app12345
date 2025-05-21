import React from "react";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
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
        <nav>
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
        </nav>
      </header>
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
