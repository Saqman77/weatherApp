import React from 'react'

const RightColumn = () => {

    const data = {
        uvIndex: 'UV: 3%'
    }

  return (
    <div className="uv-container">
    <div className='uv-wrapper'>
        <div className="uv">
            <div className="outer">
                <div className="inner">
                    <div id="uvIndex">
                        {data.uvIndex}
                    </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
            <defs>
                <linearGradient id="GradientColor" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#fcb042" />
                <stop offset="100%" stop-color="#f59522" />
                </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke="url(#GradientColor)" stroke-width="10" fill="none" stroke-linecap="round" />
        </svg>
    </div>
</div>
  )
}

export default RightColumn