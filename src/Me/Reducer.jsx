import React,{ useReducer } from 'react'


const Reducer=()=>{
        
            const reducer =(state, action)=>{
                 switch(action.type){
                    case "Increment":
                    return {count:state.count + 1, text:state.text}
                    case "Distort":
                        return{count:state.count, text:!state.text}
                        default:return state
                 }
                }
const [state,dispatch]=useReducer(reducer, {count:0, text:true})
  return (
    <>
    <div className='justify-center items-center flex flex-col h-[100vh] '>
    <h1>{state.count}</h1>
    <button onClick={()=>{
        dispatch({type:"Increment"});
        dispatch({type:"Distort"});
        }} className='bg-blue-600 py-2 px-3'>
        Click Here
    </button>
   {state.text && <p>This is a text</p>}
   </div>
    </>
  );
};

export default Reducer