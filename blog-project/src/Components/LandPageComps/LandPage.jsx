import './LandPage.css';
import LandingHeader from './LandingHeader';
import LandingBody from './LandingBody';
import Footer from '../HomePageComps/Footer';

export default function LandPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingHeader />
      <div className="flex-grow">
        <LandingBody />
      </div>
      <Footer />
    </div>
  );
}
