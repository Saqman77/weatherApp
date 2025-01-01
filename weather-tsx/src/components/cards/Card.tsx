import './cards.scss'
// import image from '../../assets/icons/Sunnny Windy Icon 1.svg'
import { useTheme } from '../../utils/Theme-context'

interface CenterProps {
  day: string;
  weather: string;
  temp: string;
  time: string;
  wind: string;
  speed: string;
  icon: string;
}


const Card: React.FC<CenterProps> = ({day, time, temp, weather, wind,icon}) => {

  

  const { lightTheme } = useTheme()


  return (
    <div className='Cardcontainer'>
        <div className='card'
          style={lightTheme ? {backgroundColor: '#ccc', color: 'black', boxShadow:'inset 3px 2px 15px 2px rgb(0 0 0 / 1%), 9px 7px 18px 0 rgb(0 0 0 / 32%)'} : {backgroundColor: '#36363a', color: 'white', boxShadow:'box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5)' }}
        >
            <div className='card-header'>
              <h2>{day}</h2>
              <p>{time}</p>
            </div>
            <div className='card-body'>
              <div className='temp'>
                  <div className="icon">
                      <img src={icon} alt="icon" />
                  </div>
                  <p>{temp} °C </p>
              </div>
            <div className='weather'>
                <h2>{ wind} km/h</h2>
                <p>{weather}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Card

