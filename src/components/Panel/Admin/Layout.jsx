import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Layout({ children }) {
  const [menuIcon, setMenuIcon] = useState(true);
  const [width, setWidth] = useState("85%");
  const [leftMargin, setLeftMargin] = useState("15%");
  const location = useLocation();
  const setUIFull = () => {
    setMenuIcon(!menuIcon);
    setWidth("100%");
    setLeftMargin("0%");
  };

  const setUIHalf = () => {
    setMenuIcon(!menuIcon);
    setWidth("85%");
    setLeftMargin("15%");
  };
  const links = [
    {
      link: "/admin/dashboard",
      title: "Dashboard",
      icon: <i className="ri-dashboard-fill"></i>,
    },
    {
      link: "/admin/products",
      title: "Products",
      icon: <i className="ri-store-2-fill"></i>,
    },
    {
      link: "/admin/orders",
      title: "Orders",
      icon: <i className="ri-list-ordered-2"></i>,
    },
    {
      link: "/admin/customers",
      title: "Customers",
      icon: <i className="ri-user-3-fill"></i>,
    },
    {
      link: "/admin/sellers",
      title: "Sellers",
      icon: <i className="ri-user-star-fill"></i>,
    },
    {
      link: "/admin/reports",
      title: "Reports",
      icon: <i className="ri-bar-chart-fill"></i>,
    },
    {
      link: "/admin/settings",
      title: "Settings",
      icon: <i className="ri-settings-3-fill"></i>,
    },

    {
      link: "/admin/logout",
      title: "Logout",
      icon: <i className="ri-logout-box-r-line"></i>,
    },
  ];

  return (
    <>
      <div className="w-full">
        <aside
          className={` bg-white  h-full ${width == "100%" ? "p-0" : "p-4"}`}
          style={{
            width: leftMargin,
            minHeight: "100vh",
            position: "fixed",
            top: "0%",
            left: "0%",
            overflow: "hidden",
            transition: "0.75s ease",
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          }}
        >
          <div className="flex flex-col justify-center">
            <div className="py-4">Logo</div>

            <div className="flex flex-col gap-4">
              {links.map((route, index) => (
                <Link key={index} to={route.link}>
                  <div
                    className={`flex flex-row gap-2 p-2 item-center ${
                      location.pathname === route.link
                        ? "bg-black text-white rounded-sm"
                        : "bg-white text-black"
                    }`}
                  >
                    {route.icon} <h3 className="text-sm">{route.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
        <section
          className="w-[85%] ml-[15%] bg-blue-600"
          style={{
            width: width,
            marginLeft: leftMargin,
            transition: "0.75s ease",
          }}
        >
          <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center space-x-2">
              {menuIcon ? (
                <i className="ri-menu-line" onClick={setUIFull}></i>
              ) : (
                <i className="ri-menu-2-line" onClick={setUIHalf}></i>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center flex-grow max-w-xl bg-gray-100 border border-gray-300 rounded-full">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full px-4 py-2 text-sm bg-transparent focus:outline-none"
                />
                <i className="ri-search-line text-gray-500 text-xl pr-4"></i>
              </div>
              <i className="ri-mail-line text-gray-500 text-xl hover:text-gray-700 cursor-pointer"></i>
              <i className="ri-notification-3-line text-gray-500 text-xl hover:text-gray-700 cursor-pointer"></i>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                <img
                  src="/images/userProfile.jpg"
                  alt="Profile"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </header>
        </section>
      </div>
      <div
        className={`ml-[${leftMargin}] p-4 bg-gray-100 min-h-screen`}
        style={{ transition: "0.75s ease" }}
      >
        {children}
      </div>
    </>
  );
}

export default Layout;
