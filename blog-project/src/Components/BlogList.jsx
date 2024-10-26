import React, { useState } from 'react';

export default function BlogList() {
  const [blogSets, setBlogSets] = useState(1);

  const handleShowMore = () => {
    setBlogSets((prevSets) => prevSets + 1);
  };

  const BlogItems = () => (
    <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="skeleton w-[80%] h-48 sm:h-56 lg:h-64 rounded-lg shadow-md my-4 sm:my-6 lg:my-8"
        >
          BlogList
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="container mx-auto px-2 sm:px-4 my-6 sm:my-8 lg:my-10">
        {[...Array(blogSets)].map((_, index) => (
          <BlogItems key={index} />
        ))}
      </div>
      <div className="flex justify-center mt-6 sm:mt-8">
        <button
          onClick={handleShowMore}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
        >
          Show More
        </button>
      </div>
    </>
  );
}
