import React from 'react';
import Radium from 'radium';
import classes from './Car.css';

class Car extends React.Component {

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState){

    }

    componentDidUpdate() {

    }

    render() {
       const inputClasses = ['classes.input']

       if (this.props.name !== '') {
           inputClasses.push('classes.green')
       } else {
           inputClasses.push('classes.red')
       }

       if (this.props.name.length > 4) {
           inputClasses.push('classes.bold')
       }

       const style = {
           border: '1px solid #ccc',
           boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
           ':hover': {
               border: '1px solid #aaa',
               boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
               cursor: 'pointer'
           }
       }

       return (
           <div className="Car" style={style}>
               <h3>Car name: {this.props.name}</h3>
               <p>Year: <strong>{this.props.year}</strong></p>
               <input
                   type="text"
                   onChange={this.props.onChangeName}
                   value={this.props.name}
                   className={inputClasses.join(' ')}
               />
               <button onClick={this.props.onDelete}>Delete</button>
           </div>
       )
   }
}

export default Radium (Car);

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