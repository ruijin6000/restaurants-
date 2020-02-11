import {combineReducers} from "redux";
import * as TYPE from "../actions/types";

export default combineReducers({
    cities: Cities,
    establishments: Establishments,
    restaurants : RestaurantReducer,
    mySelect: Selection,

});

function Cities(state = null, action) {
    switch (action.type) {
        case TYPE.FETCH__CITY :
            return action.payload || false;
        case TYPE.CLEAN_CITY :
            return null;
        default :
            return state;
    }
};

function RestaurantReducer(state = null, action) {
    switch (action.type) {
        case TYPE.FETCH__RESTAURANTS:
            return action.payload || false;
        case TYPE.CLEAN_ESTABLISHMENTS :
            return null;
        default :
            return state;
    }
};

function Establishments(state = null, action) {
    switch (action.type) {
        case TYPE.FETCH__ESTABLISHMENTS :
            return action.payload || false;
        case TYPE.CLEAN_ESTABLISHMENTS :
            return null;
        default :
            return state;
    }
};

function Selection(state = null, action) {
    switch (action.type) {
        case TYPE.MY_SELECT:
            return action.payload;
        default :
            return state;
    }

}

