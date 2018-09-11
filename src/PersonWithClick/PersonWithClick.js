import React from "react"

const personWithCicks = (props) => {
    return (
        <div uniqueKey={props.id}>
            <h> I am {props.name}. </h>
            <h> I am {props.age} year(s) old </h>
            <p> {props.children} </p>
        </div>
    )
}


export default personWithCicks