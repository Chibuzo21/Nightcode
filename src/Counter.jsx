import React, { useContext } from 'react';
import Button from "./Button.jsx"
import {Context} from "./Context.jsx"

function Counter() {
  const{counter}=useContext(Context);
  return (
    <div>
      <h1 className='text-4xl'>{counter}</h1>
      <Button/>
    </div>
  )
}

export default Counter