const initState = {
    count: 0,
    minus: {
        num: 0,
    }
}

export default function(state = initState, action) {
    const { type, payload } = action
    const { data } = payload || {}
    const { minus } = state
    switch(type) {
        case 'minus':
            return {
                ...state,
                minus: {
                    ...minus,
                    num: minus.num - data,
                }, 
            };
        default:
            return state;
    }
}