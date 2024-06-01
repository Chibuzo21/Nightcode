import React, { useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { FaHouse } from 'react-icons/fa6'
import { FiMessageCircle } from 'react-icons/fi'
import { IoIosNotifications } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdMenu } from 'react-icons/md'

function Header2() {
    const[sidebar, setSidebar]=useState("w-[0vw]")
    const click=()=>{
sidebar==="w-[0vw]"?setSidebar("w-[50vw]"):setSidebar("w-[0vw]")
    }
  return (
    
        <main className='h-[40vh] w-full md:grid  gap-3 flex  '>
            <div className='md:h-[10vh] h-[96.6vh] text-xl'>
            <button onClick={click} className='p-3 text-xl'>
                    <MdMenu/></button>

                <div className={`md:h-[10vh] h-[96.6vh] sm:flex overflow-hidden
                 sm:w-full ${sidebar} bg-blue-300  `}>
                <p className='flex flex-row gap-3 items-center py-3 px-4'>
                    <span><FaHouse/></span>Dashboard</p>
                <p className='flex flex-row gap-3 items-center py-3 px-4'>
                    <span><FiMessageCircle/></span>Messages</p>
                <p className='flex flex-row gap-3 items-center py-3 px-4'>
                    <span><IoSettingsOutline/></span>Settings</p>
                <p className='flex flex-row gap-3 items-center py-3 px-4'>
                    <span><AiFillLike/></span>Likes</p>
                <p className='flex flex-row gap-3 items-center py-3 px-4'>
                    <span><IoIosNotifications/></span>Notifications</p>

                
                </div>
            </div>
            <div className='sm:w-[80vw] w-[45vw] md:h-[50vh] flex justify-center
             items-center h-[96.6vh] font-medium  md:text-5xl text-xl text-blue-700'>
                <h1>SIMPLE SIDEBAR MENU</h1>
            </div>
        </main>
  )
}

export default Header2