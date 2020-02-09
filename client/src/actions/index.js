import axios from 'axios';
import * as TYPE from "./types";


export const fetchCities = (cityName) => async dispatch => {
     const res = await axios.post('/api/cities',cityName);
     dispatch({type: TYPE.FETCH__CITY, payload: res.data});
};

export const fetchEstablishments =(cityID) => async dispatch => {
     console.log(cityID);
     const res = await axios.post('/api/establishments', cityID);
     dispatch({type: TYPE.FETCH__ESTABLISHMENTS, payload: res.data})

};