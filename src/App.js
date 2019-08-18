import React from 'react';

class Calculator extends React.Component {

    handleChange(event) {
        console.log(this.props.name)
        console.log(event.target.name)
        console.log(event.target.value)
        this.props.handleChange(this, event)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    { this.props.exercise.name }
                </div>
                <div className="card-body">
                    <div className="form-row">
                        <div className="col">
                        <label htmlFor="weight">Weight: </label>
                        <input type="text"
                               name="weight"
                               value={this.props.exercise.weight}
                               onChange={this.handleChange.bind(this)}
                        />
                        </div>
                        <div className="col">
                        <label htmlFor="reps">Repetitions: </label>
                        <input type="text"
                               name="reps"
                               value={this.props.exercise.reps}
                               onChange={this.handleChange.bind(this)}
                        />
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title"> Estimated 1 Rep Max:  {this.props.exercise.estimate() }
                    </h5>
                </div>
            </div>
        )
    }
}


// Model
function Exercise(name) {
    this.name = name;
    this.weight = 0;
    this.reps = 0;
    this.estimate = function(){
        var total = Math.round(this.weight * this.reps * 0.0333 + parseFloat(this.weight))
        return isNaN(total) ? 0 : total
    }
}

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            exercises: [
                new Exercise("Bench"),
                new Exercise("Squat"),
                new Exercise("Deadlift")],
            total: 0
        }
    }

    handleChange = (object, event) => {

        let exercises = this.state.exercises;
        let total = 0

        if (!isNaN(event.target.value)) {
            for (var key in exercises) {
                for (var attr in exercises[key]) {
                    if (exercises[key][attr] == object.props.exercise.name) {
                        console.log("Found it")
                        exercises[key][event.target.name] = event.target.value
                    }

                }
                total += exercises[key].estimate()
            }

            this.setState({
                exercices: exercises,
                total: total
            })

        }
    }



    render ()
    {
        return (
            <div className="container-fluid">
                <h1>Strong Calc</h1>
                <p>
                    <i>A powerlifting calculator that will estimate your 1 rep max
                        and add the totals.</i>
                </p>
                <Calculator exercise={this.state.exercises[0]} handleChange={this.handleChange}/>
                <Calculator exercise={this.state.exercises[1]} handleChange={this.handleChange}/>
                <Calculator exercise={this.state.exercises[2]} handleChange={this.handleChange}/>
                <h3>Powerlifting Total: { this.state.total } </h3>

                <div className="footer mt-auto py-3">

                    <span class="text-muted">Simple ReactJS app by <a href="https://www.linkedin.com/in/markorskip/">Skip Sorenson</a> </span>
                    {/*<a href="https://github.com/skipsorenson/strong-calc">Source code located here</a>*/}
                </div>
            </div>
        )
    }
}

export default App;
