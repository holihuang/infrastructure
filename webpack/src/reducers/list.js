const initState = {
    list: new Array(1000).fill({name: 'a'}),
};

export default function(state = initState, action) {
    const {type} = action || {};
    switch(type) {
        default:
            return state;
    }
}