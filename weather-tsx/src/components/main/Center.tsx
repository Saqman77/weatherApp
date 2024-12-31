import image from '../../assets/icons/Sunnny Windy Icon 1.svg'

const Center = () => {

    const data = {
        day: 'Monday',
        time: '12:30pm',
        temp: '12°C',
        weather: 'Weather Description',

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
                <p>{data.temp} </p>
            </div>
        </div>
        <div className="weather-icon">
            <div className="center-icon">
                    <img src={image} alt="icon" className='c-icon' />
            </div>
            <div className="icon-day">
                <h2>{data.day}</h2>
            </div>
        </div>
    </div>
  )
}

export default Center