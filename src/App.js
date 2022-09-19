import './css/App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
    </div>
  );
}

export default App;
