import { NavLink } from 'react-router-dom';
import './Add_Venue.css';
import VeSidebar from '../Venue Manager Sidebar/VeSideBar';

const Add_Venue = () => {
  return (
    <>
      <VeSidebar />
      <div className="add-venue-container">
        <h1>Update your Venue's Details</h1>
        <form className="venue-form">
          <div className="form-group">
            <label htmlFor="venueName">Venue Name:</label>
            <input type="text" id="venueName" placeholder="Enter venue name" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" placeholder="Enter street address" required />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" placeholder="Enter city" required />
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input type="text" id="state" placeholder="Enter state" required />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" placeholder="Enter country" required />
          </div>
          <div className="form-group">
            <label htmlFor="zipcode">Zip/Postal Code:</label>
            <input type="text" id="zipcode" placeholder="Enter zip code" required />
          </div>
          <div className="form-group">
            <label htmlFor="venueCategory">Venue Category:</label>
            <select id="venueCategory" required>
              <option value="">Select category</option>
              <option value="conference">Conference</option>
              <option value="wedding">Wedding</option>
              <option value="party">Party</option>
              <option value="concert">Concert</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="services">Available Services:</label>
            <textarea id="services" placeholder="Enter available services (e.g., catering, parking)" required />
          </div>
          <div className="form-group">
            <label htmlFor="targetAudience">Target Audience:</label>
            <input type="text" id="targetAudience" placeholder="Enter target audience" required />
          </div>
          <button type="submit" className="submit-button">Add Venue</button>
        </form>
      </div>
    </>
  );
};

export default Add_Venue;
