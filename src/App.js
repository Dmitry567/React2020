import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

// In E6 JS we have to use className
// We have to use root element to wrap up other elements EX <div>
class App extends Component {

    constructor(props) {
        console.log('App constructor')
      super(props)

        this.state = {
            cars: [
                {name: 'Ford', year: 2018},
                // {name: 'Audi', year: 2016},
                // {name: 'Mazda', year: 2010}
            ],
            pageTitle: 'React components',
            showCars: false
        }
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

    componentWillMount() {
        console.log('App  componentWillMount')
    }

    componentDidMount() {
        console.log('App  componentDidMount')
    }


    render() {
        console.log('App render')
        const divStyle = {
           textAlign: 'center'
        }

        let cars = null;

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key={index}>
                    <Car
                        name={car.name}
                        year={car.year}
                        onDelete={this.deleteHandler.bind(this, index)}
                        onChangeName={event => this.onChangeName(event.target.value, index)}
                    />
                    </ErrorBoundary>
                )
            })
        }

        return (
            <div style={divStyle}>
               {/*<h1>{this.state.pageTitle}</h1>*/}
               <h1>{this.props.title}</h1>

                <Counter />

                <hr/>
                <button
                    style={{margingTop: 20}}
                    className={'AppButton'}
                    onClick={this.toggleCarsHandler}
                >Toggle cars</button>


                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: '20px'
                }}>
                    { cars }
                </div>
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
