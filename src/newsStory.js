import React, { useState } from "react";

const NewsStory = (props) => {
  const story = props.story;

  return (
    <div className='news-story'>
      {console.log(story)}
      <h3>
        <a href={story.url} target='_blank'>{story.title}</a>
      </h3>
      <span className='news-author'>{story.author}</span>
    </div>
  )
};

export default NewsStory;