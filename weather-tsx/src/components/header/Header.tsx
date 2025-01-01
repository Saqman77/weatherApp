import './header.scss'
import logo from '../../assets/icons/football-grass-green-nature-soccer-svgrepo-com.svg'
import searchIcon from '../../assets/icons/search-svgrepo-com.svg'
import { useCity, useTheme } from '../../utils/Theme-context'

import { useRef, useState } from 'react'


const Header = () => {

  const {lightTheme, setLightTheme} = useTheme();
  const { city, setCity } = useCity();
  const inputRef = useRef<HTMLInputElement>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]); 
  const [loading, setLoading] = useState<boolean>(false); 
  const [debounceTimer, setDebounceTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const API_KEY = '187215d262353d3ff1cb64376423cc36'; // Replace with your API key
  const SEARCH_API_URL = 'https://api.openweathermap.org/data/2.5/find'; // OpenWeather API URL

  // Function to fetch city suggestions based on input
  const fetchCitySuggestions = async (query: string) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${SEARCH_API_URL}?q=${query}&type=like&sort=population&cnt=5&appid=${API_KEY}`);
      const data = await response.json();
      setSuggestions(data.list.map((item: any) => item.name)); // Extract city names
    } catch (error) {
      console.error("Error fetching city suggestions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = inputRef.current?.value || '';
    // setCity(query);
  
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
  
    const timer = window.setTimeout(() => {
      fetchCitySuggestions(query);
    }, 10);
  
    setDebounceTimer(timer);
  };

  // Handle city selection from the suggestions list
  const handleCitySelect = (selectedCity: string) => {
    setCity(selectedCity); // Set selected city to the state
    setSuggestions([]); // Clear suggestions
    // Optionally, fetch additional data like weather for the selected city
  };


  const handleSearch = () => {
    if (inputRef.current) {
      setCity(inputRef.current.value); // Set the city to the state using input's value
    }
    // resert search input
    // if (inputRef.current) {
    //   inputRef.current.value = '';
    // }
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
        <input 
        ref={inputRef}
        value={city}
        onChange={handleInputChange}
        type="text" placeholder="Search for city" className='search' 
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
        {loading && <p>Loading...</p>}
      </div>
      {suggestions.length > 0 && !loading && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleCitySelect(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
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