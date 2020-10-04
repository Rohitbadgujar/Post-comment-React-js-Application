const express = require('express');
const bodyparser = require('body-parser');
const  {randomBytes} = require('crypto');
const cors = require('cors');
const app = express();

app.use(bodyparser.json());

app.use(cors());
const commentsbyPostId = {};

app.get('/post/:id/comments', (req,res)=>{
    res.send(commentsbyPostId[req.params.id] || []);

})

app.post('/post/:id/comments', (req,res)=>{
const commentId = randomBytes(4).toString('hex')
    const {content} = req.body;

    const comments = commentsbyPostId[req.params.id] || [];
    
    comments.push({ id:commentId,content});

    commentsbyPostId[req.params.id] = comments;
    res.status(201).send(comments);
})

app.listen(4001,()=>{

    console.log('Listening on 4001');
})