import React from 'react';

export default (props) => (
    <div style={{
       border: '1px solid #ccc',
        marginBottom: '10px',
        display: 'block',
        padding: '10px'
    }}>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>

    </div>
)


// Indside of the {} we can use functions or Methods JS if we want to have
// something dynamic
/*
function car () {
    return (
        <div>This is car component</div>
    )
}

 */
/*
// This is E6JS syntaxis
const car = () => {
    return (
        <div>This is car component</div>
    )
}
 */
/*
const car = () => (
    <div>
        This is car component
        <strong>test</strong>
    </div>
)
 */