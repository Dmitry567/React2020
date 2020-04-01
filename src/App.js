import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

// In E6 JS we have to use className
// We have to use root element to wrap up other elements EX <div>
class App extends Component {

    state = {
      cars: [
          {name: 'Ford', year: 2018},
          {name: 'Audi', year: 2016},
          {name: 'Mazda', year: 2010}
      ],
        pageTitle: 'React components',
        showCars: false
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    onChangeName (name, index) {
        const car = this.state.cars[index]
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({cars})
    }

    deleteHandler (index) {
        const cars = this.state.cars.concat()
        cars.splice(index, 1)

        this.setState({cars})

    }

    render() {
        console.log('Render')
        const divStyle = {
           textAlign: 'center'
        }

        let cars = null;

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onDelete={this.deleteHandler.bind(this, index)}
                        onChangeName={event => this.onChangeName(event.target.value, index)}
                    />
                )
            })
        }

        return (
            <div style={divStyle}>
               <h1>{this.state.pageTitle}</h1>

                <button
                    onClick={this.toggleCarsHandler}
                >Toggle cars</button>
                { cars }
           </div>
       );
    }
}

export default App;

// We can not use IF inside of JSX we can use them outside of block(return)

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
// State describe the condition of the component
