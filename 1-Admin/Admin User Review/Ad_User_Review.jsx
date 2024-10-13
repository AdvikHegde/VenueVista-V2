
import '../../2-User/User Personal Details/User_Personal_Details.css';
import { useEffect, useState } from 'react';
import image from '../../2-User/User Personal Details/user.png';

import'./Ad_User_Review.css';
import Sidebar from '../Admin Sidebar/AdSideBar';

const Ad_User_Review = () => {
  const [data, setData] = useState(null);  // Initialize as null
  const [loading, setLoading] = useState(true);  // Loading state

  // Fetch user data using async/await
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/getallusers', { method: 'GET' });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);  // Set loading to false after fetch
      }
    };
    fetchData();
  }, []);

  // Function to convert date format
  const convertDateFormat = (dateString) => {
    if (!dateString) return '';  // Prevent error if DOB is undefined
    const [day, month, year] = dateString.split('-');
    return `${year}-${month}-${day}`;
  };

  // Display loading message or handle empty data
  if (loading) {
    return <p>Loading user details...</p>;
  }

  if (!data || data.length === 0) {
    return <p>No user data available.</p>;
  }

  // Render the form once data is fetched
  return (
    <>
      <Sidebar></Sidebar>

      <div className="user-personal-details-body">
        <Sidebar />

        <div className="content-container">
          <div className="background-image-container">
            <img className="background-image" src={image} alt="" />
          </div>

          <div className="booking-card">
            <div className="card-header">
              <h2>My Details</h2>
            </div>
            <div className="card-body">
              <div className="profile-picture">
                <img src={image} alt="" />
              </div>

              <div className="user-details">
                <div>
                  <label htmlFor="name"><strong>Name:</strong></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={data[0]?.name || ''}  // Use optional chaining and provide default empty string
                    readOnly
                  />
                </div>

                <div>
                  <label htmlFor="email"><strong>Email:</strong></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={data[0]?.email || ''}
                    readOnly
                  />
                </div>

                <div>
                  <label htmlFor="phone"><strong>Phone:</strong></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={data[0]?.phone || ''}
                    readOnly
                  />
                </div>

                <div>
                  <label><strong>Date of Birth:</strong></label>
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    value={convertDateFormat(data[0]?.DOB) || ''}
                    readOnly
                  />
                </div>
              </div>

              <div className="account-information">
                <div>
                  <label><strong>Username:</strong></label>
                  <input
                    type="text"
                    placeholder="Username"
                    value={data[0]?.username || ''}
                    readOnly
                  />
                </div>

                <div>
                  <label><strong>Password:</strong></label>
                  <input
                    type="text"
                    placeholder="Password"
                    value={data[0]?.password || ''}
                    readOnly
                  />
                </div>
              </div>

              <div className="address-location-information-container">
                <div>
                  <label><strong>Address:</strong></label>
                  <input
                    type="text"
                    placeholder="Address.."
                    value={data[0]?.address || ''}
                    readOnly
                  />
                </div>

                <div>
                  <label><strong>Country:</strong></label>
                  <input
                    type="text"
                    placeholder="Country"
                    value={data[0]?.Country || ''}
                    readOnly
                  />
                </div>
              </div>

              <button className="submit" type="submit">Submit</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ad_User_Review; // Ensure this line is presentz




