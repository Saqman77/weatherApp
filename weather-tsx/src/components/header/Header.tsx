import './header.scss'
import logo from '../../assets/icons/football-grass-green-nature-soccer-svgrepo-com.svg'
import searchIcon from '../../assets/icons/search-svgrepo-com.svg'
const Header = () => {
  return (
    <>
    <div className='header'>
      <div className="logo"
        style={{
          width: '30px',
          height: '30px',
        }}
      >
        <img
            style={{
              width: '30px',
              height: '30px',
            }}
        src={logo} alt="" />
      </div>
      <div className="search-wrapper">
        <input type="text" placeholder="Search for city" className='search' />
        <button
        style={{
          width: '40px',
          height: '40px',
          // backgroundColor: 'transparent',
        }}
        ><img 
        style={{
          // width: '30px',
          // height: '30px',
          // zIndex: 1,
        }}
        src={searchIcon} alt="" className='searchImg'/></button>
      </div>
      <div className="toggle">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider-round"></span>
        </label>
      </div>
    </div>
    </>
  )
}

export default Header