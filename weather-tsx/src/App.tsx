import React, { useEffect, useState } from 'react'
import './App.scss'
import Header from './components/header/Header'
import TopColumn from './components/cards/Top-column'
import Main from './components/main/Main'
import { useTheme } from './utils/Theme-context'
import { useWeatherData } from './utils/UseWeatherData'
import { processWeatherData } from './utils/Process-data'

const App = () => {

  const [city, setCity] = useState<string>("London");
  const { weatherData, error, loading, refetch } = useWeatherData(city);
  const processedData = weatherData ? processWeatherData(weatherData) : null;
  const nextDaysData = processedData?.nextDaysData;
  const currentDayData = processedData?.currentDayData[0];
    useEffect(() => {
      console.log(processedData?.currentDayData[0]);
    }, [processedData]);
  const { lightTheme } = useTheme()

  return (
    <div className='App'
    {...processedData}
    style={lightTheme ? {backgroundColor: 'rgb(217 217 217)', color: 'black'} : {backgroundColor: '#212022', color: 'white'}}
    >
      <Header />
      <TopColumn

        error={error}
        loading={loading}
        refetch={refetch}
      />
      <Main
        data={currentDayData}
        // error={error}
        // loading={loading}
        // refetch={refetch}
      />
    </div>
  )
}

export default App