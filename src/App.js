import React from 'react';
import logo from './logo.svg';
import './App.css';




class Calculator extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            weight: 0,
            reps: 0
        }
    }

    handleChange = ({ target }) => {
        console.log("Updating state: " + target.name)
        this.setState({ [target.name]: target.value })
    }

    render() {
        return (
            <div className="Calculator">
                <label className="exerciseName">{ this.props.name } </label> <br/>

                <label htmlFor="weight">Weight: </label>

                <input type="text"
                               name="weight"
                               value={this.state.weight}
                               onChange={this.handleChange}
            />
                <label htmlFor="weight">Repetitions: </label>
                <input type="text"
                             name="reps"
                             value={this.state.reps}
                             onChange={this.handleChange}
                             />
                Estimated 1 Rep Max: <Estimate weight={this.state.weight} reps={this.state.reps}/>
            </div>
        )
    }
}

class Estimate extends React.Component {
    render() {
        return (
            <span>{ this.props.weight * this.props.reps * 0.0333 + parseFloat(this.props.weight) } </span>
        );
    }
}

function App() {
  return (
    <div className="App">
        Strong Calc! <br/>
        ReactJS by Skip Sorenson <br/>
        <p>Estimate your 1 rep max</p>
        <Calculator name="Bench Press"/>
        <Calculator name="Deadlift"/>
        <Calculator name="Squat"/>
    </div>
  );
}

export default App;
