import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'


export default () => {
    const [posts,setPosts] = useState({});

    const fetchPost = async() => {
        const res = await axios.get('http://localhost:4000/post');
        setPosts(res.data);
    };

    useEffect(() => {
        fetchPost();
    },[]);

    const renderdPost =  Object.values(posts).map(post => {
        console.log(post.id);
        debugger;
            return <div 
                className="card"
                style = {{width: '30%',marginBottom:'20px'}}
                key = {post.id}
            >
            <div className="card-body">
                <h3>{post.title}</h3> 
                <CommentList postId={post.id} />
                <CommentCreate propId = {post.id} />
            </div>       

    </div>});
    return <div className="d-flex flex-row flex-wrap justify-content">
        {renderdPost}
    </div>
}