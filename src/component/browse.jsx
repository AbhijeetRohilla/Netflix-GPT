import React, { useState } from 'react'

function Browse() {
    const [count,setCount]=useState(0);
    if(count===3){
        throw new Error("I crashed because count is 3");
    }
  return (
    <div>
      Browse Component
      <button onClick={()=>setCount(count+1)}>Count is {count}</button>
    </div>
  )
}

export default Browse


