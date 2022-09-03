import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import { selectListSubNews } from '../redux/slices/newsSlice';
import { useSelector } from 'react-redux';

const Default_Template = () => {
  
  return (
    <div>
        <Navbar />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Default_Template