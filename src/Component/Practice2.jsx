import React, { useReducer } from 'react';

const Practice2 = () => {
    const initialState={
        count:0,
        data: 5

    }
    const reduce=(state,action)=>{
        if(action.type=="increment"){
            return {count: state.count + 1 }; // Return a new state object
        }
        else if(action.type=="decrement"){
            return { count: state.count - 1 }; // Return a new state object
        }
    
    }
    const[state,dispatch]=useReducer(reduce,initialState)
    return (
        <div>
            <button onClick={()=>{dispatch({type:"increment"})}}>Inc</button>
            <div>{state.count}</div>
            <button onClick={()=>{dispatch({type:"decrement"})}}>Dec</button>

            
        </div>
    );
};

export default Practice2;