import './header.scss'

const Header = () => {
  return (
    <>
    <div className='header'>
      <div className="search-wrapper">
        <input type="text" placeholder="Search for city" className='search' />
        <button>s</button>
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