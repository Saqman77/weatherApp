import React from 'react'
import { useTheme } from '../../utils/Theme-context'

const LeftColumn = () => {

    const { lightTheme } = useTheme()

    const data = {
        wind: '12km/h',
        humidity: '12%',
        visibility: '12km',
        airPressure: '12mb'
    }


  return (
    <div className='left-column'
    style={lightTheme ? {backgroundColor: '#ccc', color: 'black', boxShadow:'rgb(0 0 0 / 19%) 1px 1px 15px 0px inset, rgb(0 0 0 / 40%) 3px 3px 18px 0px'} : {backgroundColor: '#36363a', color: 'white', boxShadow:'box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);' }}
    >
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