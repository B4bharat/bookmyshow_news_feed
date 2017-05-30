import React from 'react';

export default function Landing(props) {
  return (
    <div>
      <div className='title-image'>
        <img src={require('../images/modus_green.png')} alt="title image"/>
      </div>
      <div className='intro-text'>
        <h1>Welcome Aboard!</h1>
        <p>A one of a kind platform to discover, create, manage blogs</p>
      </div>
      <div className='intro-button'>
        start your journey
      </div>
    </div>
  );
}