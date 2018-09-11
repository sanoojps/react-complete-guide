import React from 'react';

const toggleButton = (props) => 
{
    const initialText = "Toggle items below"
    const finalText = "Toggle items above"
    return (
        <div>
            <button onClick = {props.onClick}>
                 {
                     props.toggleState === false ? 
                      initialText :
                      finalText  
                 }
            </button>
        </div>
    );
} 

export default toggleButton;