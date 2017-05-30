import React from 'react';

export default function FeedItem(props) {
  return (
    <div className='feed-item'>
      <a href="#fixme">
        <img src="http://lorempixel.com/375/300/fashion/" alt="fashion 1"/>
      </a>
      <span>{props.category}</span>
      <div>
        <a href="#fixme">
          <h1>{props.title}</h1>
        </a>
        <ul>
          <li className='published-date'>{props.publishDate}</li>
          <li className='reading-length'>{props.lengthInMins}</li>
          <li className='readers-count'>{props.readerCount}</li>
        </ul>
        <div className='article-snippet'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eveniet a adipisci provident soluta blanditiis qui nobis, impedit sequi ratione nihil, delectus odio voluptatibus, voluptatem voluptate corporis? Consectetur ad voluptate molestias similique quibusdam eum aspernatur, nesciunt. Consequuntur inventore quo doloribus, labore quidem ullam suscipit iusto placeat explicabo ipsa nesciunt, eligendi dolores fugit corporis dolorem porro iste odit molestiae facere magni necessitatibus quibusdam quia.
        </div>
        <div className='read-more'>
          <a href="#fixme">read more...</a>
          <span>{props.bookmarks}</span>
        </div>
        <div className='author-details'>
          <span className='author-pic'></span>
          <span className='author-name'>{props.authorName}</span>
          <span className='subscriber-count'>{props.authorSubscribers}</span>
        </div>
      </div>
    </div>
  );
}