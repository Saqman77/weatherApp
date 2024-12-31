import React from 'react'

const RightColumn = () => {

    const data = {
        uvIndex: '3'
    }

  return (
    <div>
        <div className="uv">
            <div className="outer">
                <div className="inner">
                    <div id="uvIndex">
                        {data.uvIndex}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightColumn