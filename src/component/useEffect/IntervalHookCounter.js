import React, { Component,useEffect,useState } from 'react';

function IntervalHookCounter()  {

    const [count,setCount]=useState(0)

    const tick=()=>{
        setCount(count+1)
    }
    // using useeffect to symbolize componet did mount
    //only run once and clear the interval

    useEffect(()=>{

        const interval=setInterval(tick,1000)

        return ()=>{
            clearInterval(interval)
        }
    },[count])

        return (
            <div>
                {count}
                
            </div>
        );
  
}

export default IntervalHookCounter;