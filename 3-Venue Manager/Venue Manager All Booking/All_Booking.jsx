import { NavLink } from 'react-router-dom';


import'./All_Booking.css';
import Sidebar from '../Venue Manager Sidebar/VeSideBar';
const All_Booking = () => {
    return (
        <>
        <Sidebar></Sidebar>
    <div>
      <h1>All Booking</h1>
      {/* Your component content goes here */}
    </div>
    </>
  );
};

export default All_Booking; // Ensure this line is present
