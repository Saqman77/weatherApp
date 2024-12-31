import { useEffect } from 'react';
import Card from './Card'
import './cards.scss'

const TopColumn = () => {

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
    <div className='column'>
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