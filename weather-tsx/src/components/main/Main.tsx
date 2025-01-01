import { useTheme } from '../../utils/Theme-context'
import Center from './Center'
import LeftColumn from './Left-column'
import './main.scss'
import RightColumn from './Right-column'

const Main = () => {

  const { lightTheme } = useTheme()

  return (
    <div 
      style={lightTheme ? {backgroundColor: '#ccc', color: 'black', boxShadow: `rgba(0, 0, 0, 0.15) 6px 6px 10px -1px,
         rgba(255, 255, 255, 0.7) -6px -6px 10px -1px,
          inset 0 3px 10px 0 rgb(0 0 0 / 55%)
      `,} : {backgroundColor: '#36363a', color: 'white'}}
    className='main-card'>
      <div className='main-card-header'>
        <h2>Today's Highlights</h2>
      </div>
      <div className="bottom-wrapper">
        <LeftColumn />
        <Center />
        <RightColumn />
      </div>
    </div>
  )
}

export default Main