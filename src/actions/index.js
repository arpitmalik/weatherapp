import axios from "axios";

const API_KEY = "f2540ff3524ad68b6a97a6660842f43f";
const ROOT_URL =
  "https://api.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;

export const FETCH_WEATHER = "FETCH_WEATHER"; //VARIABLE THAT HOLDS ACTION TYPE

//action creator
export async function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  try {
    const request = await axios.get(url);
    return {
      type: FETCH_WEATHER,
      payload: request //returning promise as payload
    };
  } catch (error) {
    alert("The requested city was not found.");
  }
}
