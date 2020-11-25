import React, { Component ,useEffect,useState} from 'react';
import axios from 'axios';

function DataFetching () {

    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    const [posts,setPosts]=useState([]);

    //fetch data only once at componet did mount
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            setLoading(false);
            setPosts(res.data)
            setError('')
        })
        .catch(err=>{
            setLoading(false);
            setPosts([])
            setError('Something went wrong')
        })
    },[])
    return( 
        <div>
            <ul>
                {
                    loading?'Loading....':
                    posts.map(post=><li key={post.id}>{post.title}</li>)
                }
                {
                    error?error:null
                }
            </ul>


        </div>
    )

    
}

export default DataFetching;