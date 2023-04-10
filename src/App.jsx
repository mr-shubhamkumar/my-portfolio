import './App.css';
import About from './components/about/About';
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
      </main>
    </>
  );
}

export default App;
