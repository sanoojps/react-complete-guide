import React from 'react';

const randomPerson = (props) => 
{
    const random = Math.floor(Math.random() * 30)
    return (
        <div>
            <h1 
            onClick={props.clickHandler}>
            I am a {random}.
             {props.title} 
             </h1>
        </div>
    );
} 

export default randomPerson;