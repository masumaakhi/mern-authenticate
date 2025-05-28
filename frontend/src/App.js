import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from './pages/AdminDashboard';
import EmailVerify from "./pages/EmailVerify";
import ResetPassword from "./pages/ResetPassword";
 import { ToastContainer} from 'react-toastify';
 import UpdateUser from './components/admin/update-user';
 import axios from 'axios';
import GoogleSuccess from './pages/GoogleSuccess';
const App = () => {
  axios.defaults.withCredentials = true;

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/google-success" element={<GoogleSuccess />} />
         <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin/update-user/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  )
}

export default App
