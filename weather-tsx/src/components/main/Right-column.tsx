
import { useTheme } from '../../utils/Theme-context'

const RightColumn = () => {

    const { lightTheme } = useTheme()

    const data = {
        uvIndex: 'UV: 3%'
    }

    return (
        <div className="uv-container">
            <div className='uv-wrapper'>
                <div className="uv">
                    <div className="outer"
                        style={lightTheme ? {
                            boxShadow: '6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)'
                        } : {
                            boxShadow: '6px 6px 10px -1px rgba(0, 0, 0, 0.4), -6px -6px 10px -1px rgba(98, 98, 103, 0.7)'
                        }}
                    >
                        <div className="inner"
                            style={lightTheme ? {
                                boxShadow: `inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
                                    -0.5px -0.5px 0px rgba(255, 255, 255, 1), 0.5px 0.5px 0px rgba(0,0,0,0.15),
                                    0px 12px 10px -10px rgba(0,0,0,0.05)`
                            } : {
                                boxShadow: `inset 4px 4px 6px -1px rgba(0, 0, 0, 0.25),
                                    inset -4px -4px 6px -1px rgba(98, 98, 103, 0.7),
                                    0.5px 0.5px 0px rgba(98, 98, 103, 1),
                                    -0.5px -0.5px 0px rgba(0, 0, 0, 0.15),
                                    0px 12px 10px -10px rgba(0, 0, 0, 0.05)`
                            }}
                        >
                            <div id="uvIndex">
                                {data.uvIndex}
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                        <linearGradient id="GradientColor" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fcb042" />
                            <stop offset="100%" stopColor="#f59522" />
                        </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke="url(#GradientColor)" strokeWidth="10" fill="none" strokeLinecap="round"
                        style={{
                            strokeDasharray: '472',
                        }}
                    />
                </svg>
            </div>
        </div>
    )
}

export default RightColumn