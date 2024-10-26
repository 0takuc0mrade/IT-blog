import './App.css';
import Header from './Components/HomePageComps/Header';
import Body from './Components/HomePageComps/Body';
import Footer from './Components/HomePageComps/Footer';

function App() {
  return (
    <>
      <div className="max-w-[100vw]">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
