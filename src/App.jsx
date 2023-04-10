import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/App';

import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Header />
     <main className='main'>
        <Home />
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
