import { WeatherResponse } from "../weather-data";

/**
 * Processes the weather data to separate current day's data and upcoming days.
 * @param weatherData - The API response data.
 * @returns An object with current day data and an array for the next days' data.
 */
export const processWeatherData = (weatherData: WeatherResponse) => {
  const today = new Date().toISOString().split("T")[0]; // Current date in 'YYYY-MM-DD' format
  const forecastByDay: Record<string, any[]> = {};

  // Group weather data by date
  weatherData.list.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0]; // Extract date portion
    if (!forecastByDay[date]) {
      forecastByDay[date] = [];
    }
    forecastByDay[date].push(entry);
  });

  // Extract today's data and next days' data
  const currentDayData = forecastByDay[today] || [];
  delete forecastByDay[today]; // Remove current day from forecast

  const nextDaysData = Object.entries(forecastByDay).map(([date, entries]) => {
    // Choose an entry around noon (12:00) or average values
    const midDayEntry = entries.find((entry) => entry.dt_txt.includes("12:00:00")) || entries[0];

    
    return { date, ...midDayEntry };
  });

  return { currentDayData, nextDaysData };
};