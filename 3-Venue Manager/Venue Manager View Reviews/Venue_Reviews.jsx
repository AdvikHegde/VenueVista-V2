import { NavLink } from 'react-router-dom';


import'./Venue_Reviews.css';
import Sidebar from '../Venue Manager Sidebar/VeSideBar';

function Venue_Reviews()  {
        return (
            <>
            <Sidebar></Sidebar>
      <div>
        <h1>Venue Reviews</h1>
        {/* Your component content goes here */}
      </div>
      </>
    );
  };

  export default Venue_Reviews;