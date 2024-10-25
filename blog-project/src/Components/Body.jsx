import React from 'react';
import IntroPost from './IntroPost';
import BlogTags from './BlogTags';
import BlogList from './BlogList';

export default function Body() {
  return (
    <>
      <div className="max-w-screen-2xl">
        <IntroPost />
        <BlogTags />
        <BlogList />
      </div>
    </>
  );
}
