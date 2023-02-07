import React, { useState } from "react";

const News = (news) => {
  return (
    <div className='news-component'>
      <p>{news.news.title}</p>
    </div>
  )
}

export default News;