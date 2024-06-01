import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

function Novel() {
const{novelID}=useParams()
const [book, setBook]= useState(null);
const [error, setError]=useState(null)

useEffect(()=>{
    const fetchData= async()=>{
      try{
      const Api= `https://www.googleapis.com/books/v1/volumes/${novelID}`;
        const response=await fetch(Api);
        if(!response.ok){
          throw new Error("Network issue")
        }
        const data = await response.json();
       
        setBook(data)
       
    }catch(error){
      setError(error.message);
    }
  };
    fetchData();
},[novelID])
if(error) return <div>Error:{error}</div>

  return (
    <div className='bg-gray-400 h-[100vh]'>
    <figure className="figure w-[30vw] h-fit 
          shadow-md rounded-md overflow-y-auto px-3 text-black py-4 ">
        <img className="w-[70vw] h-[54vh]" src={book.volumeInfo.imageLinks?.thumbnail} alt="product image"/>
        <figcaption className="py-5 space-y-4 px-3">
            <span className="text-sm"> {book.volumeInfo.title}</span> 
        
        <p>{book.volumeInfo.description}</p>
        <p>{book.volumeInfo.InfoLink}</p>
        
        </figcaption>
    </figure>
</div>
  )
}

export default Novel