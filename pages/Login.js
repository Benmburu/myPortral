//Components are reusable building blocks.
//login page

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const logIn = () => {
  const [serviceNumber, setServiceNumber] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleServiceNumberChange = (event) => {
    setServiceNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login authentication logic here, such as API calls to validate the service number and password.

    if (serviceNumber === '12345' && password === 'secret') {
        // Redirect to the home page on successful login
        history.push('/home');
    } else {
        alert('Invalid service number or password');
      } 

    // For this example, we'll simply log the service number and password to the console.
    //console.log('Service Number:', serviceNumber);
    //console.log('Password:', password);
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        {/* Replace 'college_logo.png' with the path to your college logo image */}
        <img src="/deftec.png" alt="College Logo" style={styles.logo} />
      </div>

    {/*This is the log in component here*/}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Service Number"
          value={serviceNumber}
          onChange={handleServiceNumberChange}
          style={styles.input}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          style={styles.input}
        />
        <br />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

  // Your existing styles here...
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#5CDB95',
    },
    logoContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 40,
      padding: '20px',
    },
    logo: {
      width: 400,
      height: 300,
      marginBottom: 20,
    },
    button: {
        padding: '10px 20px',
        margin: '10px 0',
        background: '#444', // Dark grey background color for the button
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      },
      input: {
        padding: '10px',
        margin: '5px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '250px',
      },
};
export default logIn;
