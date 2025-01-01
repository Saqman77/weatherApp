import { iconMap } from '../../utils/icon'
import { useTheme } from '../../utils/Theme-context'
import {  MainWeatherData, WeatherEntry, WeatherResponse, Wind } from '../../weather-data'
import Center from './Center'
import LeftColumn from './Left-column'
import './main.scss'
import RightColumn from './Right-column'

type MainProps = {
  data: WeatherEntry;
  loading: boolean;
  refetch: () => Promise<void>;
  error: string | null;
  
}


const Main = ({ data, loading, refetch,
  error, ...props
 }: MainProps): JSX.Element => {

  const formatDateTime = (dt_txt: string) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    const date = new Date(dt_txt); // Convert to a Date object
    const day = daysOfWeek[date.getDay()]; // Get day of the week
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Format time to 12-hour clock with AM/PM
    const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
  
      return { day, time: formattedTime };
    }

  const { lightTheme } = useTheme()

  return (
    <div 
      {...data}
      style={lightTheme ? {backgroundColor: '#ccc', color: 'black', boxShadow: `rgba(0, 0, 0, 0.15) 6px 6px 10px -1px,
         rgba(255, 255, 255, 0.7) -6px -6px 10px -1px,
          inset 0 3px 10px 0 rgb(0 0 0 / 55%)
      `,} : {backgroundColor: '#36363a', color: 'white'}}
    className='main-card'>
      <div className='main-card-header'>
        <h2>Today's Highlights</h2>
      </div>
      <div className="bottom-wrapper">
        <LeftColumn 
        {...data}
          wind={!loading?(data?.wind?.speed.toString()):('loading....')}
          humidity={!loading?(data?.main?.humidity.toString()):('loading....')}
          visibility={!loading?(data?.visibility.toString()):('loading....')}
          airPressure={!loading?(data?.main?.pressure.toString()):('loading....')}
        />
        <Center 
        weather={!loading?(data?.weather[0].description):('loading....')}
        day={!loading?(formatDateTime(data?.dt_txt).day):('loading....')}
        temp={!loading?(data?.main?.temp.toString()):('loading....')}
        image={!loading?(iconMap[data?.weather[0].icon]):('loading....')}
        time={!loading?(formatDateTime(data?.dt_txt).time):('loading....')}
        />
        <RightColumn />
      </div>
    </div>
  )
}

export default Main