import React from 'react';

const person = (props) => 
{
    return (
        <div>
            <h1>I am a {props.name} </h1>
            <h1>I am {props.age} years old</h1>
            {/* /*
            //Handling text passed inbetween tags beginning and end
            */ }
            <p>Text: {props.children}</p>
        </div>
    );
} 

export default person;