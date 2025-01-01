import { useEffect } from 'react';
import Card from './Card'
import './cards.scss'
import { useTheme } from '../../utils/Theme-context';
interface MainProps {
  data: any; // Replace 'any' with the appropriate type if known
}

const TopColumn = ({ data }: MainProps): JSX.Element => {

  const formatDateTime = (dt_txt: string) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    const date = new Date(dt_txt); // Convert to a Date object
    const day = daysOfWeek[date.getDay()]; // Get day of the week
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Format time to 12-hour clock with AM/PM
    const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
  
      return { day, time: formattedTime };
    }


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
    {...data}
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