import React, { createContext, useState } from 'react'
export const Appcontext=createContext()
import Login from './login'
import User from './user'
function Contextuse() {
    const [username, setUsername]=useState()
    
  return (
    <div className='flex justify-center items-center h-[80vh]'>

        <Appcontext.Provider value={{username,setUsername}} >
            <Login/>
            <User/>
        </Appcontext.Provider>
    </div>
    
  )
}

export default Contextuse