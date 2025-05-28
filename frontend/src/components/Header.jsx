import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Header = () => {
  const { userData } = useContext(AppContext);
  return ( 
    <div className='flex flex-col items-center mt-20 px-4 text-center'> 
        <img src={assets.header_img} alt="header" className='w-36 h-36 rounded-full mb-4'/>
        <h1 className='flex items-center gap-2 text-xl sm:text-3xl front-medium mb-2'>Hey, { userData ? userData.name   : "Developer" }!  <img src={assets.hand_wave} alt="hand_wave" className='w-8 aspect-square' />  </h1>
        <h2 className='text-2xl sm:text-4xl font-semibold mb-4'>Welcome to your dashboard</h2>
        <p className='mb-8 max-w-md'>Here you can manage all your projects and tasks</p>
        <button className='border border-gray-400 px-4 py-2 rounded-full text-gray-600 hover:text-black hover:bg-gray-200 transition-all'>Get Started</button>
    </div>
  )
}

export default Header