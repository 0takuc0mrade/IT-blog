import React from 'react';

export default function Body() {
  return (
    <div className="flex flex-wrap items-center flex-col my-10">
      <div className="skeleton h-[500px] w-[70%]"></div>
      <div className="flex flex-col my-10 w-[70%] lg:w-[70%]">
        <h1 className="text-2xl font-bold text-left my-5">Latest Posts</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-y-8 gap-x-16 w-full">
          <div className="card bg-accent h-48 lg:h-64">
            <figure className="h-3/4">
              <img
                src="https://picsum.photos/300/200"
                alt="Random blog post image"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body text-wrap p-4">
              <h2 className="card-title text-lg">
                The Future of AI in Healthcare
              </h2>
              <p className="text-sm">By Dr. Emily Chen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
