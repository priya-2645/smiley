import React,{useState} from 'react';
function But(){
  const [num,setNum]=useState("");
  const incNum=() =>{
    if(num<10){
      setNum(num+1)
    }
  }
  const decNum=() =>{
    if(num>0){
      setNum(num-1)
    }else{
      setNum(0);
    }
  }
  return(
    
    <div>
    <h1>{num}</h1>  
    
      <button onClick={incNum}>Increment</button>
      <button onClick={decNum}>decrement</button>
      </div>
          
    
  )
}
  
    export default But;