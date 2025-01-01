import './header.scss'
import logo from '../../assets/icons/football-grass-green-nature-soccer-svgrepo-com.svg'
import searchIcon from '../../assets/icons/search-svgrepo-com.svg'

import { useCity, useTheme } from '../../utils/Theme-context'
import { useRef } from 'react'
const Header = () => {
  const {lightTheme, setLightTheme} = useTheme();

  const { city, setCity } = useCity();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current) {
      setCity(inputRef.current.value); // Set the city to the state using input's value
    }
    // resert search input
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const toggleTheme = () => {
    setLightTheme(!lightTheme)};
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
        <input ref={inputRef} type="text" placeholder="Search for city" className='search' 
        style={lightTheme?{boxShadow:'-5px -3px 6px 0 rgb(255 255 255), inset 2px 3px 4px 1px rgb(0 0 0 / 28%), 2px 3px 10px 0 rgb(0 0 0 / 58%)'}
        :{boxShadow:'inset 0 3px 5px 0 rgb(0 0 0), -2px -3px 4px 1px rgb(231 228 228 / 29%)'}}
        />
        <button 
        onClick={handleSearch}
        style={{
          boxShadow: lightTheme ? '-5px -3px 6px 0 rgb(255 255 255), 2px 3px 10px 0 rgb(0 0 0 / 58%)' 
          : '1px 2px 10px 0 rgba(0, 0, 0, 0.5), 0 0 10px 0 rgba(0, 0, 0, 0.4),  -2px -3px 4px 1px rgb(231 228 228 / 29%)',
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
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider-round"
            style={lightTheme?{boxShadow:'-5px -3px 6px 0 rgb(255 255 255), inset 2px 3px 4px 1px rgb(0 0 0 / 28%), 2px 3px 10px 0 rgb(0 0 0 / 58%)'}
            :{boxShadow:'inset 0 3px 5px 0 rgb(0 0 0), -2px -3px 4px 1px rgb(231 228 228 / 29%)'}}
          ></span>
        </label>
      </div>
    </div>
    </>
  )
}

export default Header