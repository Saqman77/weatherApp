import './cards.scss'
import image from '../../assets/icons/Sunnny Windy Icon 1.svg'
const Card = () => {

  const data = {
    day: 'Monday',
    time: '12:30pm',
    temp: '12°C',
    weather: 'Weather Description'
  }


  return (
    <div className='Cardcontainer'>
        <div className='card'>
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