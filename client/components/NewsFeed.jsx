import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import FeedItem from './FeedItem.jsx';
import articleAPI from '../utils/articleAPI.js';

export default class NewsFeed extends React.Component {
  render() {

    return (
      <div className='container'>
        <SwipeableViews axis='y' animateHeight={true} enableMouseEvents={true}>
          {
            articleAPI.all().map(article => (
              <FeedItem
                key={article.id}
                category={article.category}
                title={article.title}
                publishDate={article.publishDate}
                lengthInMins={article.lengthInMins}
                readerCount={article.readerCount}
                bookmarks={article.bookmarks}
                articleText={article.articleText}
                authorName={article.articleAuthor.name}
                authorSubscribers={article.articleAuthor.subscribers}
              >
              </FeedItem>
            ))
          }
        </SwipeableViews>
      </div>
    );
  }
}