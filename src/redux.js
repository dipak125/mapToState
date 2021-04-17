import {createStore,combineReducers} from "redux";

const initialState={counter: 0};
const counterReducer=(state=initialState,action)=>{
        switch(action.type)
        {
            case "INCREMENT": return{
                counter: state.counter + action.payload
            }
            case "DECREMENT": return{
                counter: state.counter - action.payload
            }
            default: return state

        }
}
const todoReducer=(state={
    id: "",
    name: "",
    age: ""
},action)=>{
    switch(action.type)
    {
        case "change": return{
                ...state,
                id:1,
                name: action.payload,
                age: 25
        }
        default: return state
    }
}
const rootReducer=combineReducers({
    counter: counterReducer,
    todo:todoReducer
})
export const store=createStore(rootReducer);

const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";
const changes="change";

export const doIncrement=(value)=>{
    return{
        type: INCREMENT,
        payload: value
    }
}
export const doDecrement=(value)=>{
    return{
        type: DECREMENT,
        payload: value
    }
}
export const change=(value)=>{
    return{
        type: changes,
        payload: value,
    }
}