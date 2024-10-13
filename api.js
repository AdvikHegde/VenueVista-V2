// Example API functions in api.js
const register = (userData) => {
    return fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }).then(response => response.json());
  };
  
  export default { register };
  