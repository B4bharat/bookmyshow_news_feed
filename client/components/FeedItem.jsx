import React from 'react';
import { Link } from 'react-router-dom';

export default function FeedItem(props) {
  return (
    <div className='feed-item'>
      <Link to={`/newsfeed/${props.articleId}`}>
        <img src="http://lorempixel.com/375/300/fashion/" alt="fashion 1"/>
      </Link>
      <span className='feed-item-category'>{props.category}</span>
      <div className='feed-article-container'>
        <Link to={`/newsfeed/${props.articleId}`}>
          <h1>{props.title}</h1>
        </Link>
        <ul className='feed-item-publish-details'>
          <li className='published-date'>{props.publishDate}</li>
          <li className='reading-length'>{props.lengthInMins} min read</li>
          <li className='readers-count'>{props.readerCount} readers</li>
        </ul>
        <div className='article-snippet'>
          {props.articleText.slice(0, 400)}
        </div>
        <div className='read-more'>
          <Link to={`/newsfeed/${props.articleId}`}>Read more...</Link>
          <span>{props.bookmarks} bookmarks</span>
        </div>
        <div className='author-details'>
          <span className='author-pic'></span>
          <span className='author-name'>{props.authorName}</span>
          <span className='subscriber-count'>{props.authorSubscribers} subscribers</span>
        </div>
      </div>
    </div>
  );
}