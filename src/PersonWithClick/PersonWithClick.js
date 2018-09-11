import React from "react"

const personWithCicks = (props) => {
    return (
        <div 
        uniqueKey={props.id} 
        onClick = {props.onClickHandler}>
            <h1> I am {props.name}. </h1>
            <h1> I am {props.age} year(s) old </h1>
            <p> {props.children} </p>
        </div>
    )
}


export default personWithCicks