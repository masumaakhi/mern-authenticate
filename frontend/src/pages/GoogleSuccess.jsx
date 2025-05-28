import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const GoogleSuccess = () => {
  const { backendUrl, setIsLoggedIn, setUserData } = useContext(AppContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/auth/google/success`, {
          withCredentials: true,
        });

        if (res.data.success) {
          setUserData(res.data.user);          // set context
          setIsLoggedIn(true); 
                          // update login state
          localStorage.setItem('user', JSON.stringify(res.data.user));
          toast.success(" Google Login successful");
          // ✅ Force full reload to ensure context consumers (Navbar, Header) get updated data
          window.location.href = '/';
        } else {
          console.error('Google login failed');
        }
      } catch (error) {
        console.error('Google login error:', error);
      }
    };

    fetchUser();
  }, [backendUrl, setUserData, setIsLoggedIn]);

  return <div>Logging in with Google...</div>;
};

export default GoogleSuccess;
