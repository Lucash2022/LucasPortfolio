import React from 'react';
import '../../App.css';    // make sure to import the css file where you will put the animation

function ReduxIcon() {
  return (
    <div className="redux-logo-container" style={{ 
      backgroundColor: 'white',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10%'
    }}>
      <img 
        className="redux-logo"
        src={`${process.env.PUBLIC_URL}/SVG/redux.svg`} 
        alt="Redux" 
        style={{width: '40px', height: '40px'}} 
      />
    </div>
  );
}

export default ReduxIcon;
