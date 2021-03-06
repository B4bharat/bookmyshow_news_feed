import React from 'react';
import NewsFeed from './NewsFeed.jsx';
import { Link } from 'react-router-dom';

export default function Landing(props) {
  return (
    <div className='container landing-container'>
      <div className='title-image'>
        <img src={require('../images/modus_green.png')} alt="title image"/>
      </div>
      <div className='intro-text'>
        <h1>Welcome Aboard!</h1>
        <p>A one of a kind platform to discover, create, manage blogs</p>
      </div>
      <div className='intro-button'>
        <Link to='/newsfeed'>
          start your journey
        </Link>
      </div>
    </div>
  );
}