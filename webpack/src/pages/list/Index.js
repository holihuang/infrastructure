import React, { useReducer, useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import style from './index.less';

function MyList(props) {
    const { list: { list } } = props
    const ref = useRef(null)
    const height = useRef(800)
    const rowHeight = useRef(80);
    const total = useRef(1000);
    
    const limit = Math.ceil(height.current / rowHeight.current);

    const initState = {
        startIndex: 0,
        endIndex: limit,
    };

    function reducer(state, action) {
        const {type, payload: { params = {} }} = action || {};
        switch(type) {
            case 'scroll':
                return {
                    ...state,
                    ...params,
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initState);

    useEffect(() => {
        const target = ref.current.childNodes[0].childNodes[0];
    }, [list])

    useEffect(() => {
        console.log(ref.current.childNodes[0].childNodes[0].offsetHeight, 333)
    }, [state.startIndex])

    function handleScroll(e) {
        if(e.target === ref.current) {
            const { scrollTop } = e.target
            const { startIndex } = state || {};
            const currentIndex = Math.floor(scrollTop / rowHeight.current)
            if(startIndex !== currentIndex) {
                dispatch({
                    type: 'scroll',
                    payload: {
                        params: {
                            startIndex: currentIndex,
                            endIndex: Math.min(currentIndex + limit, total.current - 1),
                            scrollTop,
                        },
                    },
                })
            }
        }
    }

    function renderList() {
        const arr = []
        const { startIndex, endIndex } = state || {}
        for(let i = startIndex; i <= endIndex; i++) {
            arr.push(
                <div key={i}
                    className={style.item}
                    style={{
                        height: rowHeight.current - 1 + 'px',
                        lineHeight: rowHeight.current + 'px',
                        left: 0,
                        right: 0,
                        position: 'absolute',
                        borderBottom: '1px solid #000',
                        top: i * rowHeight.current,
                        width: "100%",
                    }}
                >
                    {list[i].name}-{i}
                </div>
            )
        }
        return arr;
    }

    return (
        <div ref={ref} className={style.wrapper} onScroll={(e) => { handleScroll(e) }}>
            <div className={style.phantom} style={{ height: total.current * rowHeight.current }}>
                {
                    renderList()
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    const { list } = state || {};
    return {
        list,
    }
}

export default connect(mapStateToProps)(MyList);
