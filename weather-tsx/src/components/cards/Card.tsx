import './cards.scss'

const Card = () => {
  return (
    <div className='Cardcontainer'>
        <div className='card'>
            <div className='card-header'>
            <h2>Monday</h2>
            <p>12:30pm</p>
            </div>
            <div className='card-body'>
            <div className='temp'>
                <h2>Temperature</h2>
                <p>°C</p>
            </div>
            <div className='weather'>
                <h2>Weather</h2>
                <p>Weather Description</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Card