import React, { useContext } from 'react'
import { Context } from './Context';

function Button() {
  const {setCounter}=useContext(Context);
  return (
    <button className='bg-gray-500 hover:bg-gray-600 p-3' 
    onClick={()=>setCounter((prev)=>prev+1)}>
      Increment
      </button>
  )
}

export default Button