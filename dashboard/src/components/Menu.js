import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (e) => {
    e.stopPropagation();
    setIsProfileDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />

      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* PROFILE DROPDOWN START */}
        <div
          className="profile"
          style={{ position: "relative", cursor: "pointer" }}
          onClick={handleProfileClick}
          ref={dropdownRef}
        >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>

          {isProfileDropdownOpen && (
            <div
              className="profile-dropdown"
              style={{
                position: "absolute",
                top: "55px",
                right: "0",
                background: "#fff",
                borderRadius: "10px",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.12)",
                padding: "10px 18px",
                width: "180px",
                zIndex: 1000,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                to="/profile"
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "600",
                  padding: "8px 0",
                  fontSize: "15px",
                }}
                onClick={() => setIsProfileDropdownOpen(false)}
              >
                Profile
              </Link>

              <hr style={{ margin: "8px 0", borderColor: "#ddd" }} />

              <button
                style={{
                  width: "100%",
                  background: "#ff4d4f",
                  color: "#fff",
                  padding: "10px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
                onClick={(e) => {
                  e.stopPropagation();

                  localStorage.clear();
                  sessionStorage.clear();

                  setIsProfileDropdownOpen(false);

                  window.location.href = "http://localhost:3000/login";
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
        {/* PROFILE DROPDOWN END */}
      </div>
    </div>
  );
};

export default Menu;
