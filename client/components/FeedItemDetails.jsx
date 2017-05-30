import React from 'react';
import articleAPI from '../utils/articleAPI.js';
import { HeaderNavigation } from './FeedItemElements.jsx';

export default function FeedItemDetails(props) {
  const article = articleAPI.get(
    parseInt(props.match.params.articleId, 10)
  );
  
  return (
    <div className='container feed-item-detail'>
      <HeaderNavigation articleId={props.match.params.articleId}></HeaderNavigation>
      <div className='cover-photo'>
        <img src="http://lorempixel.com/375/300/fashion/" alt="fashion 1"/>
      </div>
      <div className='feed-article'>
        {article.articleText}
      </div>
    </div>
  );
}