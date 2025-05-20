import React from "react";
import { Link,useLocation } from "react-router-dom";

function Layout({ children }) {
   const location = useLocation();
   const links = [
    {
      link: "/",
      title: "Home",
      icon: <i className="ri-home-fill"></i>,
    },
    {
      link: "/about",
      title: "About",
      icon: <i className="ri-information-fill"></i>,
    },
    {
      link: "/products",
      title: "Products",
      icon: <i className="ri-shopping-cart-fill"></i>,
    },
    {
      link: "/categories",
      title: "Categories",
      icon: <i className="ri-list-check-2"></i>,
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
   ]
  return (
    <>
      <header className="bg-white shadow-md p-4 flex justify-between items-center items-center">
        <div>
          <img src="/images/logo.png" style={{width:'100px',height:'30px'}} alt="" />
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
                 
                  <span className="text-xl font-medium font-serif">{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
}

export default Layout;
