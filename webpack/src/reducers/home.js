const initState = {
    count: 0,
}

export default function(state = initState, action) {
    const { type, payload } = action
    const { data } = payload || {}
    const { count } = state
    switch(type) {
        case 'add':
            return {
                ...state,
                count: count + data, 
            };
        default:
            return state;
    }
}