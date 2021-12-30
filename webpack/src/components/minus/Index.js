import React from 'react';

function Minus(props) {
    console.log(props, 'minus...')

    const { minus: { num } } = props

    function handleClk() {
        props.dispatch({
            type: 'minus',
            payload: {
                data: 2,
            }
        })
    }

    return (
        <div>
            <h1>这是一个minus组件</h1>
            <div>{num}</div>
            <button onClick={handleClk}>-</button>
        </div>
    )
}

export default Minus;