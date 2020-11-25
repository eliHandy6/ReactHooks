import React, { Component,useEffect,useState } from 'react';
import HookMouse from './HookMouse';

function  UseEffectwithCleanup(){

    const[display,setDisplay]=useState(true)

    return(
        <div>
            <button onClick={()=>setDisplay(!display)}>Toogle display</button>
            {display && <HookMouse></HookMouse>}

        </div>
    )

}
   


export default UseEffectwithCleanup;