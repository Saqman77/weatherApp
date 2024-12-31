import React from 'react'

const RightColumn = () => {

    const data = {
        uvIndex: '3'
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
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
        </svg>
    </div>
</div>
  )
}

export default RightColumn