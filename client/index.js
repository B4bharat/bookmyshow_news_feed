import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Landing from './components/Landing.jsx';
import NewsFeed from './components/NewsFeed.jsx';

import './index.css';

ReactDOM.render((
<Router>
  <div>
    <Route exact path='/' component={Landing}></Route>
    <Route path='/newsfeed' component={NewsFeed}></Route>
  </div>
</Router>
), document.getElementById('root'));