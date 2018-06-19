import axios from 'axios';

const API_KEY = 'f2540ff3524ad68b6a97a6660842f43f';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER'; //VARIABLE THAT HOLDS ACTION TYPE

//action creator
export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request //returning promise as payload
    };
}