import React from 'react';
import IntroPost from './IntroPost';
import BlogTags from './BlogTags';
import BlogList from './BlogList';

export default function Body() {
  return (
    <>
      <div className="max-w-[100vw]">
        <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
          <IntroPost />
          <BlogTags />
          <BlogList />
        </div>
      </div>
    </>
  );
}
