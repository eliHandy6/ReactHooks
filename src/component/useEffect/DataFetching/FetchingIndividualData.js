import React, { Component ,useEffect,useState} from 'react';
import axios from 'axios';

function FetchingIndividualData () {

    const [post,setPost]=useState({});
    const [id,setId]=useState(1);
    const [idFromButtonClick,setIdFromButtonClick]=useState(1);


    const handleClick=()=>{
        setIdFromButtonClick(id)
    }
    //fetch data only once at componet did mount
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])

    return( 
        <div>
            <input type="text"
                 value={id} 
                 onChange={e=>setId(e.target.value)}
            />
            <button type="button" onClick={handleClick}>Fetch Post</button>

                {post.title}
            
        </div>
    )

    
}

export default FetchingIndividualData;