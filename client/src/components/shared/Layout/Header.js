import React, { startTransition } from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  // logout handler
  /*const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("/login");
  };*/
  const LogoutButton = () => {
    const handleLogout = () => {
      // Simulate synchronous logout operatio
      // Use startTransition to avoid UI freeze
      startTransition(() => {
        // Your synchronous logout code here
        // For example, clearing user data, performing cleanup, etc.
        // Make sure to wrap any synchronous operations with startTransition
        //logoutUser(); // Replace with your actual logout logic
        localStorage.clear();
    //alert("Logout Successfully");
    toast.success('Logout Successfully!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/login");
      });
    };
  
    return <button    className="btn btn-danger" onClick={handleLogout}>Logout</button>;
  };
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid ">
          <div className="navbar-brand h1 ">
            <BiDonateBlood color="red" /> Blood Bank App
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <BiUserCircle /> Welcome{" "}
                {user?.name || user?.hospitalName || user?.organisationName}
                &nbsp;
                <span className="badge bg-secondary">{user?.role}</span>
              </p>
            </li>
            {location.pathname === "/home" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital" ? (
              <li className="nav-item mx-3">
                <Link to="/analytics" className="nav-link">
                  Analytics
                </Link>
              </li>
            ) : (
              <li className="nav-item mx-3">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
            )}
            <li className="nav-item mx-3">
             {/* <button className="btn btn-danger" onClick={handleLogout}>
                Logout
            </button>*/}
            <LogoutButton/>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
