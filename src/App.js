import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Service from './Service';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Service />
      <Project />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
