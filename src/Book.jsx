import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Book() {
    const [book, setBook]=useState(null);
    const [input, setInput]=useState("");
   
   
   
    const fetchBook= async()=>{
    const api = `https://www.googleapis.com/books/v1/volumes?q=${input}`;
     
        try {
           const response = await fetch(api);
            const data =await response.json();
       
        setBook(data)
        console.log(data)

        } catch (error) {
            console.log(error)
      }
     
    } 
 
    
    
   const handleChange=(e)=>{
    setInput(e.target.value);
   }
   console.log(input);
   const bookArray= book?.items;

   const handleSubmit=(e)=>{
    e.preventDefault();
if(input.length>3){
fetchBook()
}
   }

  return(
    <>
    <section className='bg-gray-400 min-h-[90vh] h-fit grid gap-8'>
    <form className='flex justify-center items-center flex-row gap-2 py-10 '
     onSubmit={handleSubmit}>
            <input type="text" placeholder='search book...' 
            className='bg-white border-gray-400 border-[1px] p-2 rounded-md 
            w-[30vw] h-[7vh] outline-none' 
            onChange={handleChange}/>
            <button className='bg-gray-700 py-2 px-4 rounded-md text-white
             hover:bg-gray-700' 
            >Search</button>
        </form>
    
    <section className='flex flex-row  justify-center min-h-screen items-center 
    flex-wrap gap-4'>
      
         {bookArray?.map((item,index)=>(
          // console.log(item);
        
            <Link to={`/${item.id}`} key={index}>
          <figure  className=' figure w-[30vw] h-fit 
          shadow-md rounded-md overflow-y-auto px-3 text-black py-4'>
            <div className='h-[60vh]'>
          <img src={item?.volumeInfo?.imageLinks?.thumbnail} 
          className='w-[70vw] h-[54vh]' alt="" />
          </div>
          <figcaption className=" grid gap-8 px-2 text-center ">
           <span className='text-xl font-bold text-gray-800 h-fit min-h-[7vh]'>
            {item?.volumeInfo?.title}</span>
         
            {/* <span> {item?.volumeInfo?.description}</span> */}
            
          <div> 
          <span  
           className=' w-[150px] text-center py-2 px-3 rounded-md text-white
            bg-gray-700 '>View more</span>
            </div>
            </figcaption>
      </figure>
       </Link>
       
         ))}
      
</section>
</section>
    </>
  )
}

export default Book