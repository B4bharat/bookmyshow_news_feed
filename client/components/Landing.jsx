import React from 'react';

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className='title-image'>
          <img src={require('../images/modus_green.png')} alt="title image"/>
        </div>
      </div>
    );
  }
}