import {combineReducers} from "redux";
import * as TYPE from "../actions/types";

export default combineReducers({
    currentData: CurrrentData,
    states: CurrentStates,

});


function CurrrentData(state = null, action) {
    switch (action.type) {
        case TYPE.FETCH__DATA :
            return action.payload || false;
        default :
            return state;
    }
};

function CurrentStates(state = null, action) {
    switch (action.type) {
        case TYPE.FETCH__STATE :
            return action.payload || false;
        default :
            return state;
    }
};