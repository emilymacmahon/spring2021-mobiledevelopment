import React, {Component} from 'react'

class Squats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0
        };
    };


    render(){
        return(
            <div>
                <h2> Squats Done : {this.state.days}</h2>
                <button onClick={() => this.setState({days: this.state.days + 1})}> Squats Done </button>
                <button onClick={() => this.setState({days: 0})}> Reset Squat Count </button>
            </div>
        );
    }
}

export default Squats;