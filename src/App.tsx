import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Home />
        <About />
        <Projects />
      </main>
      <footer className="site-footer">
        <span className="eyebrow">RUDRA PATEL / SOFTWARE ENGINEER</span>
        <a href="#home">Back to the top ↑</a>
        <div className="footer-word" aria-hidden="true">Always building<span>.</span></div>
        <div className="footer-bottom">
          <span>Thoughtful systems. Meaningful software.</span>
          <a href="https://github.com/Rudra285" target="_blank" rel="noreferrer">Find me on GitHub ↗</a>
        </div>
      </footer>
    </>
  );
}
export default App;
