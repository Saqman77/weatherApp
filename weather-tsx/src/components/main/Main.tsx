import LeftColumn from './Left-column'
import './main.scss'
import RightColumn from './Right-column'

const Main = () => {
  return (
    <div className='main-card'>
      <div className='main-card-header'>
        <h2>Today's Highlights</h2>
      </div>
      <div className="bottom-wrapper">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  )
}

export default Main