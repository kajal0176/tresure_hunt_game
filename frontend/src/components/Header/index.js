import React from 'react';
import "./style.css";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import { logout } from '../../reducer/auth.slice';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axios';



const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const {isLogedIn,user,loading} = useSelector(state => state.auth); 
  function handelLogout() {
      dispatch(logout())
      localStorage.clear();
      axiosInstance.defaults.headers.common["authorization"] = null;
      window.location.reload();
  
  }

  return (
    <div className=''>
       <div className='__header'>
       <div>
            <h2>Tresure Hunt</h2>
       </div>
       <div className='flex gap-3 justify-content-center align-items-center'>
            <span>{user?.email}</span>
            <span className="pi pi-user "></span>
            <div className=''>
               <Button  label="Log Out" type='submit' onClick={handelLogout} className='w-full ' severity="success" />              
            </div>
            
       </div>
       </div>
    </div>
  )
}

export default Header
