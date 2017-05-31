import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleHeaderImage, ArticleTitle, PublishDetails, ArticleSnippet, ReadMore, AuthorDetails} from './FeedItemElements.jsx';

export default function FeedItem(props) {
  return (
    <div className='feed-item'>
      <ArticleHeaderImage articleId={props.articleId} imgCategory={props.imgCategory}></ArticleHeaderImage>
      <span className='feed-item-category'>{props.category}</span>
      <div className='feed-article-container'>
        <ArticleTitle
          articleId={props.articleId}
          title={props.title}
        >
        </ArticleTitle>
        <PublishDetails
          publishDate={props.publishDate}
          lengthInMins={props.lengthInMins}
          readerCount={props.readerCount}
        >
        </PublishDetails>
        <ArticleSnippet
          articleText={props.articleText}
        >
        </ArticleSnippet>
        <ReadMore
          articleId={props.articleId}
          bookmarks={props.bookmarks}
        >
        </ReadMore>
        <AuthorDetails
          authorName={props.authorName}
          authorSubscribers={props.authorSubscribers}
        >
        </AuthorDetails>
      </div>
    </div>
  );
}