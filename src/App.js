import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

// In E6 JS we have to use className
// We have to use root element to wrap up other elements EX <div>
class App extends Component {
    render() {
        const divStyle = {
           textAlign: 'center'
        }
        return (
            <div style={divStyle}>
               <h1>Hello World!</h1>


                <Car />
                <Car />
           </div>
       );
    }
}

export default App;

/*
        return React.createElement(
            'div',
            {
                     className: 'App'
                  },
            React.createElement(
                'h1',
                null,
                'Hello World!'
 */
//           )
//         )
