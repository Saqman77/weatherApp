import './cards.scss'
import image from '../../assets/icons/Sunnny Windy Icon 1.svg'
import { useTheme } from '../../utils/Theme-context'
const Card = () => {

  const { lightTheme } = useTheme()

  const data = {
    day: 'Monday',
    time: '12:30pm',
    temp: '12°C',
    weather: 'Weather Description'
  }


  return (
    <div className='Cardcontainer'>
        <div className='card'
          style={lightTheme ? {backgroundColor: '#ccc', color: 'black', boxShadow:'inset 3px 2px 15px 2px rgb(0 0 0 / 19%), 9px 7px 18px 0 rgb(0 0 0 / 32%)'} : {backgroundColor: '#36363a', color: 'white', boxShadow:'box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);' }}
        >
            <div className='card-header'>
              <h2>{data.day}</h2>
              <p>{data.time}</p>
            </div>
            <div className='card-body'>
              <div className='temp'>
                  <div className="icon">
                      <img src={image} alt="" />
                  </div>
                  <p>{data.temp}</p>
              </div>
            <div className='weather'>
                <h2>Weather</h2>
                <p>{data.weather}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Card