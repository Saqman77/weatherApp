import def from '../../assets/icons/Sunnny Windy Icon 1.svg'
import { useCity } from '../../utils/Theme-context';

interface CenterProps {
    day: string;
    weather: string;
    temp: string;
    image: string;
    time: string;
}

const Center: React.FC<CenterProps> = ({ day, weather, temp, image, time }) => {

    const { city } = useCity();

    const data = {
        day,
        time,
        temp,
        weather,

    }

  return (
    <div className="center-container">
        <div className='center'>
            <div className="pill day">
                <h2>{data.day}</h2>
            </div>
            <div className="pill time">
                <h2>{data.time}</h2>
            </div>
            <div className="pill center-temp">
                <p>{data.temp}°C </p>
            </div>
        </div>
        <div className="weather-icon">
            <div className="center-icon">
                    <img src={city? (image) : (def)} alt="icon" className='c-icon' />
            </div>
            <div className="icon-day">
                <h2>{data.weather}</h2>
            </div>
        </div>
    </div>
  )
}

export default Center