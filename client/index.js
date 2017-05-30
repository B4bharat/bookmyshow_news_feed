import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Landing from './components/Landing.jsx';
import NewsFeed from './components/NewsFeed.jsx';
import FeedItemDetails from './components/FeedItemDetails.jsx';

import './index.css';

ReactDOM.render((
<Router>
  <div>
    <Route exact path='/' component={Landing}></Route>
    <Switch>
      <Route exact path='/newsfeed' component={NewsFeed}></Route>
      <Route path='/newsfeed/:articleId' component={FeedItemDetails}></Route>
    </Switch>
  </div>
</Router>
), document.getElementById('root'));