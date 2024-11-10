import './UserProfile.css';
import ThemeToggle from '../HomePageComps/ThemeToggle';

export default function UserProfilePage() {
  return (
    <div class="container mx-auto p-4 pt-6 max-w-full min-h-screen bg-white dark:bg-gray-900">
      <div>
        <ThemeToggle />
      </div>
      <div class="flex justify-center">
        <div class="w-48 h-48 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
      </div>
      <div class="mt-4">
        <div class="h-4 bg-gray-300 dark:bg-gray-700 w-1/2 rounded animate-pulse"></div>
        <div class="h-4 bg-gray-300 dark:bg-gray-700 w-1/4 rounded animate-pulse mt-2"></div>
      </div>
      <div class="mt-6">
        <h2 class="text-lg font-bold dark:text-gray-100">Authored Posts</h2>
        <div class="mt-4">
          <div class="bg-gray-300 dark:bg-gray-700 h-12 rounded animate-pulse mb-4"></div>
          <div class="bg-gray-300 dark:bg-gray-700 h-12 rounded animate-pulse mb-4"></div>
          <div class="bg-gray-300 dark:bg-gray-700 h-12 rounded animate-pulse mb-4"></div>
        </div>
      </div>
    </div>
  );
}
