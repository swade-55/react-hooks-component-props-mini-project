import React from 'react';


function About({image="https://via.placeholder.com/215",blog}){
    return (
        <aside>
            <img src={image}/>
            <p>{blog}</p>
        </aside>
    )
    
}

export default About;