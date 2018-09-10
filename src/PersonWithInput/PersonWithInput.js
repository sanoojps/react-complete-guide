import React from 'react';

const personWithInput = (props) => 
{
    // const random = Math.floor(Math.random() * 30)
    return (
        <div>
            <h1> 
            I am a {props.name}
            </h1>
            
            <h1>MY age is {props.age}</h1>
            
            <p>{props.children}</p>
            
            <input 
            type="text" 
            onChange={props.changeHandler}
            value={props.name}
            >
            </input> 
        
        </div>
    );
} 

export default personWithInput;