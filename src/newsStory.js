import React, { useState } from "react";

const NewsStory = (props) => {
  const story = props.story;

  return (
    <div className='news-story'>
      <h3>
        <a className='storyLink' href={story.url} target='_blank'>{story.title}</a>
      </h3>
      <span className='news-author'>{story.source.Name}</span>
    </div>
  )
};

export default NewsStory;