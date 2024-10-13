import './User_Personal_Details.css';
import Sidebar from '../User Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import image from './user.png';
import background from './access-denied.png';

function User_Personal_Details() {
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
      <div className="user-personal-details-body">
        <Sidebar />

        <div className="content-container">
          <div className="background-image-container">
            <img className="background-image" src={background} alt="" />
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
}

export default User_Personal_Details;

// import './User_Personal_Details.css';
// import Sidebar from '../6-sidebar/Sidebar';
// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom'; // To access the passed state
// import image from './user.png';
// import background from './access-denied.png';

// function User_Personal_Details() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);  // State for handling errors

//   const location = useLocation();
//   const username = location.state?.username;

//   useEffect(() => {
//     const controller = new AbortController();  // To manage timeouts
//     const signal = controller.signal;

//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/getuser/${username}`, {
//           method: 'GET',
//           signal: signal  // Add signal to abort fetch
//         });
        
//         if (!response.ok) {
//           throw new Error(`Failed to fetch user data, status: ${response.status}`);
//         }
        
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         if (error.name !== 'AbortError') {
//           setError('Error fetching user data. Please try again later.');
//           console.error('Error fetching user data:', error);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (username) {
//       fetchData();
//     } else {
//       setLoading(false);  // No username, no need to fetch
//     }

//     return () => controller.abort();  // Cleanup to cancel fetch if component unmounts
//   }, [username]);

//   const convertDateFormat = (dateString) => {
//     if (!dateString) return '';
//     const [day, month, year] = dateString.split('-');
//     return `${year}-${month}-${day}`;
//   };

//   if (loading) {
//     return <p>Loading user details...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;  // Display error message
//   }

//   // Display a message if no user data is available but show the username
//   if (!data) {
//     return (
//       <div className="user-personal-details-body">
//         <Sidebar />

//         <div className="content-container">
//           <div className="background-image-container">
//             <img className="background-image" src={background} alt="" />
//           </div>

//           <div className="booking-card">
//             <div className="card-header">
//               <h2>User Details Not Found</h2>
//             </div>
//             <div className="card-body">
//               <div className="profile-picture">
//                 <img src={image} alt="" />
//               </div>

//               <div className="user-details">
//                 <div>
//                   <label><strong>Username:</strong></label>
//                   <input
//                     type="text"
//                     value={username || 'N/A'}
//                     readOnly  // Still show the username, but make it read-only
//                   />
//               {username} 
//                 </div>
//                 <p>No details found for the user "{username}".</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="user-personal-details-body">
//       <Sidebar />

//       <div className="content-container">
//         <div className="background-image-container">
//           <img className="background-image" src={background} alt="" />
//         </div>

//         <div className="booking-card">
//           <div className="card-header">
//             <h2>My Details</h2>
//           </div>
//           <div className="card-body">
//             <div className="profile-picture">
//               <img src={image} alt="" />
//             </div>

//             <div className="user-details">
//               <div>
//                 <label htmlFor="name"><strong>Name:</strong></label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={data.name || ''}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email"><strong>Email:</strong></label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={data.email || ''}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="phone"><strong>Phone:</strong></label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={data.phone || ''}
//                 />
//               </div>

//               <div>
//                 <label><strong>Date of Birth:</strong></label>
//                 <input
//                   type="date"
//                   value={convertDateFormat(data.DOB) || ''}
//                 />
//               </div>
//             </div>

//             <div className="account-information">
//               <div>
//                 <label><strong>Username:</strong></label>
//                 <input
//                   type="text"
//                   value={data.username || username || ''}
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label><strong>Password:</strong></label>
//                 <input
//                   type="text"
//                   value={data.password || ''}
//                 />
//               </div>
//             </div>

//             <div className="address-location-information-container">
//               <div>
//                 <label><strong>Address:</strong></label>
//                 <input
//                   type="text"
//                   value={data.address || ''}
//                 />
//               </div>

//               <div>
//                 <label><strong>Country:</strong></label>
//                 <input
//                   type="text"
//                   value={data.Country || ''}
//                 />
//               </div>
//             </div>

//             <button className="submit" type="submit">Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default User_Personal_Details;
