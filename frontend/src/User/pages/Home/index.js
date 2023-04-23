import React from 'react'
import Header from '../../../components/Header'
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import GameIntro from '../GameIntro';

const Home = () => {
    const location = useLocation();
    const currentPath  = location.pathname

  return (
    <div>
        <header className="">
           <Header />
            </header>
            {
            currentPath =="/" ? <GameIntro />:
            <Outlet />
            }
    </div>
  )
}

export default Home