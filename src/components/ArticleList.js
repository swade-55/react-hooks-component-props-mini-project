import React from 'react';
import Article from './Article';

function ArticleList({posts}){
    console.log(posts)
    const newPost = posts.map(postObj =>{
        return <Article 
        key = {postObj.id}
        title = {postObj.title}
        date = {postObj.date}
        preview = {postObj.preview}/>
    })
    return(
    <main>
        {newPost}
    </main>
)}

export default ArticleList;