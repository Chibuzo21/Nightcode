import React from 'react'
import { useState } from 'react';
import {MdMenu} from "react-icons/md"

function Header() {
  const [togglemenu, settogglemenu]=useState("h-0")
  const handleClick=()=>{
    togglemenu==="h-0"?settogglemenu("h-fit") : settogglemenu("h-0");
  }
  return (
    //  <header className='border-[1px] border-black flex justify-around items-center 
    // h-[10vh]'><bold>Header</bold>
    // <MdMenu className='md:hidden block text-2xl'/>
    // </header>
    <header className='min-h-[10vh] h-fit bg-gray-500 px-10 flex justify-between items-center'>
      <strong>Logo.</strong>
    <nav className={`absolute sm:static grid justify-items-center transition duration-1000
    ${togglemenu} md:h-fit overflow-hidden sm:flex sm:items-center left-0 bg-gray-500
    w-full sm:w-fit gap-5 top-[10vh]`}>
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
      <a href="/">Blog</a>
      <a href="/">Gallery</a>
    </nav>
   <button onClick={handleClick} 
   className='rounded-md text-2xl sm:hidden
   p-3 shadow-md hover:opacity-50'>
     <MdMenu/>
     </button>
    </header>
  );
}

export default Header