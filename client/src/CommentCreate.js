import Axios from 'axios';
import React, {useState} from 'react';
import axios from 'axios';


export default ({ propId }) => {
    const [content,setContent] = useState('');

    const onSubmit =async (event)=>{
            event.preventDefault();
            console.log(propId);
            await axios.post(`http://localhost:4001/post/${propId}/comments`, {
                content
            });

            setContent('');
    }

    return <div> 
        <form onSubmit={onSubmit}> 
            <div className="form-group"><label>New Comments</label>
                <input 
                    className="form-control" 
                    value={content} 
                    onChange={e => setContent(e.target.value)} 
                /> 
            </div>
            <button className="btn btn-primary" > Submit</button>
        </form>

    </div>
}