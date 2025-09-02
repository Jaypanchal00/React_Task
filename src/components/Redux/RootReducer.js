import { combineReducers } from "redux";   
import { CounterReducer } from "./CounterReducer";  
import { myReducer } from "./Reducer";



export const RootReducer = combineReducers({
  counter: CounterReducer,  
  todi: myReducer,
});
