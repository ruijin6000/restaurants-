import {combineReducers} from "redux";
import * as TYPE from "../actions/types";

export default combineReducers({
    cities: Cities,
    establishments: Establishments,

});


function Cities(state = null, action) {
    switch (action.type) {
        case TYPE.FETCH__CITY :
            return action.payload || false;
        default :
            return state;
    }
};

function Establishments(state = null, action) {
    switch (action.type) {
        case TYPE.FETCH__ESTABLISHMENTS :
            return action.payload || false;
        default :
            return state;
    }
};