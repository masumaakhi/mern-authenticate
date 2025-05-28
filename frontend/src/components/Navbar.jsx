import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setIsLoggedIn, setUserData } = useContext(AppContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);



  const handleLogout = async () => {
    try {
      axios.defaults.withCredentials = true;

      const response = await axios.post(`${backendUrl}/api/auth/logout`);

      if (response.data.success) {
        setIsLoggedIn(false);
        setUserData(null); 
        toast.success(response.data.message);
        navigate('/');
      } else {
        toast.error(response.data.message || "Logout failed");
      }

    } catch (error) {
      toast.error(error.response?.data?.message || error.message || "An error occurred");
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  return (
    <div className='flex w-full justify-between items-center p-9 sm:p-8 sm:px-16'>
      <img src={assets.logo} alt="logo" className='w-28 object-contain' />

      {userData ? (
        <div className='relative'>
          <div
            onClick={toggleDropdown}
            className='flex items-center gap-2 border bg-gray-100  border-black px-4 py-2 rounded-full text-black-400 hover:bg-gray-400 transition-all cursor-pointer'
          >
            {userData.name[0].toUpperCase()}
          </div>

          {dropdownOpen && (
            <div className="absolute top-full right-0 z-10 text-black rounded pt-2 bg-white min-w-max shadow-md"
>
              <ul className='list-none m-0 p-2 bg-gray-100 text-sm shadow-md rounded-md'>
                <li className='py-1 px-2 font-semibold'>{userData.name}</li>
                
                {userData.role === 'admin' && (
                  <li
                    onClick={() => {
                      navigate('/admin-dashboard');
                      setDropdownOpen(false);
                    }}
                    className='py-1 px-2 hover:bg-gray-200 cursor-pointer'
                  >
                    User Dashboard
                  </li>
                )}

                <li
                  onClick={handleLogout}
                  className='py-1 px-2 hover:bg-gray-200 cursor-pointer'
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className='flex gap-4'>
          <button
            onClick={() => navigate('/login')}
            className='flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-full text-gray-400 hover:bg-gray-200 transition-all'
          >
            Login 
            <img src={assets.arrow_icon} alt="arrow" />
          </button>

          <button
            onClick={() => navigate('/signup')}
            className='flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-full text-gray-400 hover:bg-gray-200 transition-all'
          >
            Sign Up
            <img src={assets.arrow_icon} alt="arrow" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
