import React from 'react';

export default function FeedItem(props) {
  return (
    <div className='feed-item'>
      <a href="#fixme">
        <img src="http://lorempixel.com/375/300/fashion/" alt="fashion 1"/>
      </a>
      <span className='feed-item-category'>{props.category}</span>
      <div className='feed-article-container'>
        <a className='feed-item-title' href="#fixme">
          <h1>{props.title}</h1>
        </a>
        <ul className='feed-item-publish-details'>
          <li className='published-date'>{props.publishDate}</li>
          <li className='reading-length'>{props.lengthInMins} min read</li>
          <li className='readers-count'>{props.readerCount} readers</li>
        </ul>
        <div className='article-snippet'>
          {props.articleText.slice(1, 400)}
        </div>
        <div className='read-more'>
          <a href="#fixme">Read more...</a>
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