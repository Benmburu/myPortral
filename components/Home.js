//Homepage
import React from 'react';

const myHome = () => {
  return (
    <div style={styles.container}>
      <h1>Hello World!</h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#f5f5f5', // Beige background color
  },
};


export default myHome;
