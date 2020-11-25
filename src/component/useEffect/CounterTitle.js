import React, { useState ,useEffect} from 'react';



function CounterTitle() {

   const [count,setCount] =useState(0)
   const [name,setName] =useState('')

   useEffect(()=>{
       console.log("Updating document title");
    document.title=`You clicked ${count} times`
},[count])

    return (
        <div>
            <input type="text"
                 value={name.firstName} 
                 onChange={e=>setName(e.target.value)}
                  />
            <button onClick={() => setCount(count+1)}>Count {count}</button>
        </div>
    );
}

export default CounterTitle;