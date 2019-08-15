import React from 'react';
import logo from './logo.svg';
// import './App.css';




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
            <div className="card">

                <div className="card-header">{ this.props.name }
                </div>
                <div className="card-body">
                    <div className="form-row">
                        <div class="col">
                        <label htmlFor="weight">Weight: </label>
                        <input type="text"
                               id="weight"
                               name="weight"
                               value={this.state.weight}
                               onChange={this.handleChange}
                    />
                        </div>
                        <div className="col">
                        <label htmlFor="reps">Repetitions: </label>
                        <input type="text"
                               id="reps"
                               name="reps"
                               value={this.state.reps}
                               onChange={this.handleChange}
                                     />
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title"> Estimated 1 Rep Max: <Estimate weight={this.state.weight} reps={this.state.reps}/></h5>
                </div>

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
    <div className="App container">
        <h1>Strong Calc</h1>
        <p>
        A simple calculator to determine your 1 repetition max lift
        </p>
        ReactJS by <a href="https://www.linkedin.com/in/markorskip/">Skip Sorenson</a> <br/>
        <p>Estimate your 1 rep max</p>
        <Calculator name="Bench Press"/>
        <Calculator name="Deadlift"/>
        <Calculator name="Squat"/>
    </div>
  );
}

export default App;
