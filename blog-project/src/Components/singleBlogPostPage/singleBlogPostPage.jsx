import './singleBlogPostPage.css';
import ThemeToggle from '../HomePageComps/ThemeToggle';
import logod from '../../../assets/logo/logod.png';
import logos from '../../../assets/logo/logos.png';

export default function SingleBlogPostPage() {
  return (
    <div className="max-w-4xl flex flex-col min-h-screen mx-auto p-6 bg-white md:max-w-full lg:max-w-full dark:bg-gray-800 shadow-md">
      <div className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-white dark:hidden">
          <img
            src={logos}
            alt=""
            className="w-20 h-24 lg:w-32 lg:h-28 object-contain"
          />
        </div>

        <div className="text-2xl font-bold text-white hidden dark:block">
          <img
            src={logod}
            alt=""
            className="w-24 h-20 lg:w-32 lg:h-28 object-contain"
          />
        </div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>

      {/* Cover Image Skeleton */}
      <div className="h-72 w-full mt-5 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-lg"></div>

      {/* Author Details Skeleton */}
      <div className="flex items-center mt-4 space-x-4">
        <div className="h-12 w-12 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-full"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 animate-pulse rounded w-1/2"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="mt-6 space-y-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
      </div>

      {/* Comment Section Skeleton */}
      <div className="mt-8 space-y-2">
        <div className="h-5 bg-gray-300 dark:bg-gray-700 animate-pulse rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded"></div>
      </div>
    </div>
  );
}
