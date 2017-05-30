import React from 'react';
import articleAPI from '../utils/articleAPI.js';

export default function FeedItemDetails(props) {
  const article = articleAPI.get(
    parseInt(props.match.params.articleId, 10)
  );
  
  return (
    <div className='container'>
      <div className='cover-photo'>
        <img src="http://lorempixel.com/375/300/fashion/" alt="fashion 1"/>
      </div>
      <div className='feed-article'>
        {article.articleText}
      </div>
    </div>
  );
}