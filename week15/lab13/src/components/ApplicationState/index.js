let state = {
    squats: 0,
    laps: 0
};

function reducer(state, action) {
    switch (action.type) {
        case 'increment1':
            return {squats: state.squats + 1, laps: state.laps};
        case 'increment2':
            return {squats: state.squats, laps: state.laps + 1};
        case 'decrement1':
            return {squats: state.squats - 1, laps: state.laps};
        case 'decrement2':
            return {squats: state.squats, laps: state.laps - 1};
        default: 
            throw new Error();
    }
}

export {state, reducer};