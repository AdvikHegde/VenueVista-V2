import './AdSideBar.css'

import { NavLink } from 'react-router-dom';

import bookvenue from './Icons/bookvenues.png'
import contactadmin from './Icons/contactadmin.png'
import VenueManger from  './Icons/Vema.png'

function Sidebar(){
  return(
    <>
      <nav className="sidebar">
        <ul className="nav-list">
          <li className="list-element"> 
            <img src={bookvenue} alt="" /> 
            <NavLink to="/view-reviews" className="nav-link">
              View Venue Reviews
            </NavLink>
          </li>

          <li className="list-element"> 
            <img src={VenueManger} alt="" />
            <NavLink to="/view-customer-details" className="nav-link">
            Venue Customer Details</NavLink>
          </li>

          <li className="list-element"> 
            <img src={contactadmin} alt="" />
            <NavLink to="/view-venue-details" className="nav-link">
            View Venue Details
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Sidebar;