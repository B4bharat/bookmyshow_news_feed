import React from 'react';
import articleAPI from '../utils/articleAPI.js';
import { HeaderNavigation, PublishDetails } from './FeedItemElements.jsx';

export default function FeedItemDetails(props) {
  const article = articleAPI.get(
    parseInt(props.match.params.articleId, 10)
  );

  const coverPhotoStyle = {
    backgroundImage: `url(http://lorempixel.com/375/350/${article.imgCategory}/)`
  };

  return (
    <div className='container feed-item-detail'>
      <HeaderNavigation articleId={props.match.params.articleId}></HeaderNavigation>
      <div className='cover-photo' style={coverPhotoStyle}>
        <div className='article-category'>{article.category}</div>
        <h1 className='article-title'>{article.title}</h1>
        <PublishDetails
          publishDate={article.publishDate}
          lengthInMins={article.lengthInMins}
          readerCount={article.readerCount}
        ></PublishDetails>
      </div>
      <div className='feed-article'>
        {article.articleText}
      </div>
    </div>
  );
}