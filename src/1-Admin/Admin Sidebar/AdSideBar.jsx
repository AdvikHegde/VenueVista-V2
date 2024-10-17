// import './AdSideBar.css'

// import { NavLink } from 'react-router-dom';

// import bookvenue from './Icons/bookvenues.png'
// import contactadmin from './Icons/contactadmin.png'
// import VenueManger from  './Icons/Vema.png'

// function Sidebar(){
//   return(
//     <>
//       <nav className="sidebar">
//         <ul className="nav-list">
//           <li className="list-element"> 
//             <img src={bookvenue} alt="" /> 
//             <NavLink to="/view-reviews" className="nav-link">
//               View Venue Reviews
//             </NavLink>
//           </li>

//           <li className="list-element"> 
//             <img src={VenueManger} alt="" />
//             <NavLink to="/view-user-details" className="nav-link">
//             View Customer Details</NavLink>
//           </li>

//           <li className="list-element"> 
//             <img src={contactadmin} alt="" />
//             <NavLink to="/view-venue-details" className="nav-link">
//             View Venue Details
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </>
//   )
// }
// export default Sidebar;
import './AdSideBar.css';
import { NavLink } from 'react-router-dom';
import bookvenue from './Icons/bookvenues.png';
import contactadmin from './Icons/contactadmin.png';
import VenueManger from './Icons/Vema.png';
import Home from'./Icons/home.png';
import Customer from'./Icons/customer.png';
import Review from'./Icons/review.png';
function Sidebar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
               
                <li className="list-element">
                <img src={Home} alt="Book Venue" />
                    <NavLink to="/AdminHome" className="nav-link">
                        Home
                    </NavLink>
                </li>

                <li className="list-element">
                <img src={Customer} alt="Book Venue" />
                    <NavLink to="/view-user-details" className="nav-link">
                        View Customer Details
                    </NavLink>
                </li>

                <li className="list-element">                  
                    <img src={VenueManger} alt="Venue Manager" />
                    <NavLink to="/view-venue-details" className="nav-link">
                        View Venue Details
                    </NavLink>

                    <li className="list-element">
                    <img src={Review} alt="Contact Admin" />
                    <NavLink to="/view-reviews" className="nav-link">
                        View Venue Reviews
                    </NavLink>
                </li>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;
