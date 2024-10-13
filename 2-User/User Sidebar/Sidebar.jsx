import './Sidebar.css'

import { NavLink } from 'react-router-dom';

import bookvenue from './Icons/bookvenues.png'
import bookinghistory from './Icons/bookinghistory.png'
import contactadmin from './Icons/contactadmin.png'
import mydetails from './Icons/mydetails.png'
import leavereview from './Icons/review.png'


function Sidebar(){
  return(
    <>
      <nav className="sidebar">
        <ul className="nav-list">

          <div className="dashboard-element-container-div">
            <img src={bookvenue} alt="" /> 
            <li className="list-element"> 
              <NavLink to="/home" className="nav-link">
                Book Venue
              </NavLink>
            </li>
          </div>

          <div className="dashboard-element-container-div">
            <img src={bookinghistory} alt="" />
            <li className="list-element"> 
              <NavLink to="/booking-history" className="nav-link">
              Booking History</NavLink>
            </li>
          </div>


          <div className="dashboard-element-container-div">
            <img src={contactadmin} alt="" />
            <li className="list-element"> 
              <NavLink to="/contact-admin" className="nav-link">
              Contact Admin
              </NavLink>
            </li>
          </div>
            {/* <NavLink to="/contactadmin" className="nav-link">
            Contact Admin
            </NavLink>
          </li> */}


          <div className="dashboard-element-container-div">
            <img src={mydetails} alt="" />
            <li className="list-element"> 
              <NavLink to="/my-details" className="nav-link">
              My Details
              </NavLink>
            </li>

          </div>


          <div className="dashboard-element-container-div">
            <img src={leavereview} alt="" />
            <li className="list-element">
                <NavLink to="/leave-review" className="nav-link">
                Leave a Review
                </NavLink>
            </li>

          </div>




        </ul>
      </nav>
    </>
  )
}
export default Sidebar;