import React from 'react';
import classes from './Car.css';
import PropTypes from 'prop-types';
import withClass from "../hoc/withClass";


class Car extends React.Component {

    constructor(props) {
        super(props);

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus()
        }
    }

    render() {
       const inputClasses = [classes.input]

       if (this.props.name !== '') {
           inputClasses.push(classes.green)
       } else {
           inputClasses.push(classes.red)
       }

       if (this.props.name.length > 4) {
           inputClasses.push(classes.bold)
       }

       return (
           <React.Fragment>
               <h3>Car name: {this.props.name}</h3>
               <p>Year: <strong>{this.props.year}</strong></p>
               <input
                   ref={this.inputRef}
                   type="text"
                   onChange={this.props.onChangeName}
                   value={this.props.name}
                   className={inputClasses.join(' ')}
               />
               <button onClick={this.props.onDelete}>Delete</button>
           </React.Fragment>
       )
   }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

export default withClass(Car, classes.Car);

// Indside of the {} we can use functions or Methods JS if we want to have
// something dynamic
// Radium it is high order component for React
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