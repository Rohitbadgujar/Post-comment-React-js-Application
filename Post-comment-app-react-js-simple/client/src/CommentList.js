import React, {useState,useEffect} from 'react'
import axios from 'axios'

export default  ({postId}) => {
    const [comments, setComment] = useState([]);
    console.log(`http://localhost:4001/post/${postId}/comments`);
    const fetchData = async () => {
            const res = await axios.get(`http://localhost:4001/post/${postId}/comments`)
            setComment(res.data);

    };
    useEffect(() => {
        fetchData();
    },[]);
    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    });
return <ul> {renderedComments}</ul>
}