import axios from 'axios';
import * as TYPE from "./types";


export const fetchCities = () => async dispatch => {
     const res = await axios.get('/api/cities');
     dispatch({type: TYPE.FETCH__DATA, payload: res.data});
};

export const fetchStates =(cityID) => async dispatch => {
     const res = await axios.get('/api/establishments', cityID);
     dispatch({type: TYPE.FETCH__STATE, payload: res.data})

};