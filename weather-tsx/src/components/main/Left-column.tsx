import React from 'react'

const LeftColumn = () => {

    const data = {
        wind: '12km/h',
        humidity: '12%',
        visibility: '12km',
        airPressure: '12mb'
    }


  return (
    <div className='left-column'>
        <div className="leftContent wind">
            <h2>Wind status:</h2>
            <p>{data.wind}</p>
        </div>
        <div className="leftContent humidity">
            <h2>Humidity:</h2>
            <p>{data.humidity}</p>
        </div>
        <div className="leftContent visibility">
            <h2>Visibility:</h2>
            <p>{data.visibility}</p>
        </div>
        <div className="leftContent air-pressure">
            <h2>Air Pressure:</h2>
            <p>{data.airPressure}</p>
        </div>
    </div>
  )
}

export default LeftColumn