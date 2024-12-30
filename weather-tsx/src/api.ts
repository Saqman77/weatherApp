import { WeatherResponse } from "./weather-data"

const API_BASE_URL =  'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid='
const API_KEY = ''


export const fetchWeatherData = async (city: string): Promise<WeatherResponse> => {
    return fetch(`${API_BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data: WeatherResponse) => {
      return data;
    })
    .catch((error) => {
      console.error("Failed to fetch weather data:", error);
      throw error; // Re-throw the error to handle it in the calling code
    });
}