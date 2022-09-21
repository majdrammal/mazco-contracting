import './css/App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Stocks from './components/Stocks';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
