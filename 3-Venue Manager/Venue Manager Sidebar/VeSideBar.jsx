import './VeSideBar.css'

import { NavLink } from 'react-router-dom';

import bookvenue from './Icons/bookvenues.png'
import bookinghistory from './Icons/bookinghistory.png'
import contactadmin from './Icons/contactadmin.png'
import mydetails from './Icons/mydetails.png'
import leavereview from './Icons/review.png'
import VenueManger from  './Icons/Vema.png'

function VeSidebar(){
  return(
    <>
      <nav className="sidebar">
        <h1 id="app1">VenueVista</h1>
        <ul className="nav-list">
          <li className="list-element"> 
            <img src={bookvenue} alt="" /> 
            <NavLink to="/manager-details" className="nav-link">
              Home
            </NavLink>
          </li>

          <li className="list-element"> 
            <img src={VenueManger} alt="" />
            <NavLink to="/add-venue-latest" className="nav-link">
            Update your Venue details</NavLink>
          </li>

          {/* <li className="list-element"> 
            <img src={contactadmin} alt="" />
            <NavLink to="/contact-admin" className="nav-link">
           Venue Details
            </NavLink>
          </li> */}

          <li className="list-element"> 
            <img src={mydetails} alt="" />
            <NavLink to="/my-venue-booking-history" className="nav-link">
            Bookings List
            </NavLink>
          </li>

          <li className="list-element">
             <img src={leavereview} alt="" />
             <NavLink to="/venue-user-review" className="nav-link">
             Customer Feedbacks
             </NavLink>
          </li>
          <li className="list-element"> 
            <img src={mydetails} alt="" />
            <NavLink to="/discounts" className="nav-link">
            Offer Discounts
            </NavLink>
          </li>
          <li className="list-element"> 
            <img src={mydetails} alt="" />
            <NavLink to="/VM-contact-admin" className="nav-link">
            Contact Admin
            </NavLink>
          </li>

        </ul>
      </nav>
    </>
  )
}
export default VeSidebar;