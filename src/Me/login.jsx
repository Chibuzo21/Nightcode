import React,{useContext} from 'react'
import { Appcontext } from './Contextuse'

function Login() {
  const {setUsername}=useContext(Appcontext)
  return (
    <div><input type="text" className='border-[1px] border-black' 
    onChange={(event)=>{
      setUsername(event.target.value);
    }}/></div>
  )
}

export default Login