import React, { useReducer } from 'react';

const Form = () => {
    const initialState={
        name:"",
        email:"",
        password:"",
        Gender:"",
        term:false
    }
    const reducer=(state,action)=>{
        if(action.type==="Input"){
            return{...state, [action.name] : action.value}
        }
        if(action.type==="radio"){
            return {...state,Gender:action.value}
        }
        if(action.type==="toggle"){
            return {...state,term:!state.term}
        }

    }
    const [state,dispatch]=useReducer(reducer,initialState)
    console.log(state);
    return (
        <div>
            <form >
                <div>
<label>Name</label>    
<input type="text"name="name" id="name" placeholder='Enter your Name'onChange={(e)=>{dispatch({type:"Input",name:e.target.name,value:e.target.value})}}/>
                </div>
                <div>
<label>Email</label>    
<input type="text"name="email" id="email" placeholder='Enter your Email'onChange={(e)=>{dispatch({type:"Input",name:e.target.name,value:e.target.value})}}/>
                </div>
                <div>
<label>Password</label>    
<input type="text"name="password" id="password" placeholder='Enter your password'onChange={(e)=>{dispatch({type:"Input",name:e.target.name,value:e.target.value})}}/>
                </div>
                <div>
<label>Gender</label>    
<input type="radio"name="Female"value="Female"onClick={(e)=>{dispatch({type:"radio",value:e.target.name})}}/>  Female              
<input type="radio"name="Male"value="Male" onClick={(e)=>{dispatch({type:"radio",value:e.target.name})}}/>  Male              
<input type="radio"name="Other"value="Other" onClick={(e)=>{dispatch({type:"radio",value:e.target.name})}}/>  Other              
</div>

<div>
    <input type="checkbox"name="term"id="term"onClick={()=>{dispatch({type:"toggle"})}}/>
    accept Terms and Condition
</div>
<button disabled={!state.term} style={{background:"yellow"}}>Submit</button>
            </form>
        </div>
    );
};

export default Form;