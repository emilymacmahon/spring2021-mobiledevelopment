import React from 'react'

function Squats (props) {
        return(
            <div>
                <h2> Squats Done : {props.state.Squats}</h2>
                <button onClick={() => props.dispatch({"type": "increment1"})}> Add Squat </button>
                <button onClick={() => props.dispatch({"type": "decrement1"})}> Remove Squat </button>
            </div>
        );
    }


export default Squats;