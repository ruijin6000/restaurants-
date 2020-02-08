import {combineReducers} from "redux";
import CityNameReducer from './CityNameReducer';

export default combineReducers( {
   cities : CityNameReducer
});