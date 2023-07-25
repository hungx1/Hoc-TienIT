import {  useReducer, useState } from "react";

//useReducer có thêm lựa chọn cho state function component
//useState sử dụng cho những dữ liêu cơ bản
//useReducer sử dụng cho những dữ liệu phức tạp
    //useState
    //1. Init state: 0
    //2. Actions: Up (state + 1) / Down (state - 1)

    //useReducer
    //1. Init state: 0
    //2. Actions: Up (state + 1) / Down (state - 1)
    //3. Reducer 
    //4. Dispatch

//init state
const initState = 0;
//Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//Reducer
const reducer = (state, action) => {
    switch(action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action') 
    }
}

function UseReducer1() {
    const [count, dispatch] = useReducer(reducer, initState);
   
    return (
        <div style={{padding: `0 20px`}}>
            <h1>{count}</h1>

            <button 
            onClick={() => dispatch(UP_ACTION)}
            > Up</button>
            <button 
            onClick={() => dispatch(DOWN_ACTION)}
            > Down</button>

            
        </div>
    )
}


export default UseReducer1


