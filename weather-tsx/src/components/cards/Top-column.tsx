import { useEffect } from 'react';
import Card from './Card'
import './cards.scss'
import { useTheme } from '../../utils/Theme-context';

const TopColumn = () => {


  const { lightTheme } = useTheme()

  // get height of Cardcontainer  and set it to the height of the column
  useEffect(() => {
    const cardContainer = document.querySelector('.Cardcontainer') as HTMLElement;
    const column = document.querySelector('.column') as HTMLElement;

    if (cardContainer && column) {
      column.style.height = cardContainer.clientHeight + 'px';
    }

    // Optional: Add cleanup if needed
    return () => {
      if (column) {
        column.style.height = ''; // Reset the height if necessary
      }
    };
  }, []); // Empty dependency array ensures it runs once after mount



  return (
    <div className='column'
    style={lightTheme ? {backgroundColor: '#ccc', color: 'black', boxShadow: `rgba(0, 0, 0, 0.15) 6px 6px 10px -1px,
      rgba(255, 255, 255, 0.7) -6px -6px 10px -1px,
       inset 0 3px 10px 0 rgb(0 0 0 / 55%)
   `,} : {backgroundColor: '#36363a', color: 'white'}}
    >
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default TopColumn