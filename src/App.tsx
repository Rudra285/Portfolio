import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
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
        <div className="footer-connect">
          <div className="footer-word">
            Let&apos;s connect<span>.</span>
          </div>
          <div className="footer-social-links" aria-label="Social profiles">
            <a
              className="footer-social footer-social--github"
              href="https://github.com/Rudra285"
              target="_blank"
              rel="noreferrer"
              aria-label="Rudra Patel on GitHub"
            >
              <FaGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              className="footer-social footer-social--linkedin"
              href="https://linkedin.com/in/rudra-patel-1b542b1b5"
              target="_blank"
              rel="noreferrer"
              aria-label="Rudra Patel on LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Thoughtful systems. Meaningful software.</span>
          <span>© 2026 Rudra Patel. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
export default App;
