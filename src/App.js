
import React from "react";
import {connect} from "react-redux";
import {doIncrement,doDecrement,change} from "./redux";

const mapStateToProps=(state)=>{
    const counter= state?.counter?.counter;
    const todo=state.todo;
    return {counter,todo};
}
const mapDispatchToProps=(dispatch)=>{
    return{
      doInc: (val)=> dispatch(doIncrement(val)),
    doDic: (val)=> dispatch(doDecrement(val)),
    doChange: (val)=> dispatch(change(val))
    }
}
const  App=(props)=>{
  const {counter,todo,doInc,doDic,doChange}=props;
 
  return(
    <>
      <h1>counter: {counter}</h1>
      <h1>id:{todo.id}</h1>
      <h1>name:{todo.name}</h1>
      <button onClick={()=> doChange("dipak kumar gope") }>update name</button>
      <button onClick={()=> doInc(1)}>Increment</button>
      <button onClick={()=> doDic(1)}>Deccrement</button>
      
    </>
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(App);