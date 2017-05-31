import React from 'react';
import { Link } from 'react-router-dom';

function HeaderNavigation(props) {
  return (
    <div className='header-navigation'>
      {
        props.articleId ? <div><span>Back</span><span className='app-title'>modus</span></div> : <div><i className="fa fa-bars" aria-hidden="true"></i><span className='app-title'>modus</span></div>
      }
    </div>
  );
}

function ArticleHeaderImage(props) {
  return (
    <Link to={`/newsfeed/${props.articleId}`}>
      <img src="http://lorempixel.com/375/300/fashion/" alt="fashion 1"/>
    </Link>
  );
}

function ArticleTitle(props) {
  return (
    <Link to={`/newsfeed/${props.articleId}`} className='feed-item-title'>
      <h1>{props.title}</h1>
    </Link>
  );
}

function PublishDetails(props) {
  return (
    <ul className='feed-item-publish-details'>
      <li className='published-date'>{props.publishDate}</li>
      <li className='reading-length'>{props.lengthInMins} min read</li>
      <li className='readers-count'>{props.readerCount} readers</li>
    </ul>
  );
}

function ArticleSnippet(props) {
  return (
    <div className='article-snippet'>
      {props.articleText.slice(0, 400)}
    </div>
  );
}

function ReadMore(props) {
  return (
    <div className='read-more'>
      <Link to={`/newsfeed/${props.articleId}`}>Read more...</Link>
      <span>{props.bookmarks} bookmarks</span>
    </div>
  );
}

function AuthorDetails(props) {
  return (
    <div className='author-details'>
      <span className='author-pic'></span>
      <span className='author-name'>{props.authorName}</span>
      <span className='subscriber-count'>{props.authorSubscribers} subscribers</span>
    </div>
  );
}

export { HeaderNavigation, ArticleHeaderImage, ArticleTitle, PublishDetails, ArticleSnippet, ReadMore, AuthorDetails };