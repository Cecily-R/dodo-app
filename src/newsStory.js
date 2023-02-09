import React, { useState } from "react";

const NewsStory = (props) => {
  const story = props.story;

  return (
    <div className='news'>
      <h3>
        <a href={story.url} target='_blank' rel="noreferrer">{story.title} </a>
      </h3>
      <span className='news-author'>{story.source.Name}</span>
    </div>
  )
};

export default NewsStory;