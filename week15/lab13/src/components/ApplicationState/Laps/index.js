import React from 'react'

function Laps (props) {

        return(
            <div>
                <h2> Laps Ran: {props.state.Laps}</h2>
                <button onClick={() => props.dispatch({"type": "increment2"})}> Add Lap </button>
                <button onClick={() => props.dispatch({"type": "decrement2"})}> Remove Lap</button>
            </div>
        );
    }


export default Laps;