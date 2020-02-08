import axios from 'axios';
import {FETCH__City__Name} from "./types";


export const fetchName = () => async dispatch => {
     const res = await axios.get('/api/cities')
     dispatch({type: FETCH__City__Name, payload: res.data});
};

export const handleToken =(token) => async dispatch => {
     const res = await axios.post('/api/test', token);
     dispatch({type: FETCH__City__Name, payload: res.data})

};