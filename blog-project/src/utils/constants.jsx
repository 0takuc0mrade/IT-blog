import App from '../App.jsx';
import SignUpSection from '../Components/Sign/SignUpSection.jsx';
import LoginSection from '../Components/Sign/LoginSection.jsx';
import SingleBlogPostPage from '../Components/singleBlogPostPage/singleBlogPostPage.jsx';
import UserProfilePage from '../Components/UserProfilePageComps/UserProfilePage.jsx';
import NotFound from '../Components/404/NotFound.jsx';
import LandPage from '../Components/LandPageComps/LandPage.jsx';

export const routes = [
  {
    path: '/',
    element: <LandPage />,
  },
  {
    path: '/Signup',
    element: <SignUpSection />,
  },
  {
    path: '/login',
    element: <LoginSection />,
  },
  {
    path: '/home',
    element: <App />,
  },
  {
    path: '/blogPage',
    element: <SingleBlogPostPage />,
  },
  {
    path: '/userProfile',
    element: <UserProfilePage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
