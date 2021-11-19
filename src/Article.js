import React from 'react'

export default function Article(props) {
    return (
        <div style={{width:"32%"}}>
            <h1>{props.heading} </h1>
            <p> {props.para}</p>
        </div>
    )
}
