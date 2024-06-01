import React, {useRef} from 'react'

function Ref() {
    const inputRef=useRef(null);
    const click=()=>{
        inputRef.current.focus();
        console.log(inputRef.current.value)
        inputRef.current.value=""    }
  return (
    <div>
        <div className='flex justify-center items-center h-[100vh]'>
            <input type="text" placeholder='Ex.....' 
            className='p-2 border-[1px] border-black' ref={inputRef}/>
            <button onClick={click}
            className='p-2 bg-blue-500 border-[1px] border-black'>Change Name</button>
        </div>
    </div>
  )
}

export default Ref