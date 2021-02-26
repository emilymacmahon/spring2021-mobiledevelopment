import React, {Component} from 'react'

class Laps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0
        };
    };


    render(){
        return(
            <div>
                <h2> Laps Ran: {this.state.days}</h2>
                <button onClick={() => this.setState({days: this.state.days + 1})}> Laps Ran </button>
                <button onClick={() => this.setState({days: 0})}> Reset Laps </button>
            </div>
        );
    }
}

export default Laps;