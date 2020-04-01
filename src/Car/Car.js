import React from 'react';

export default (props) => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>

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