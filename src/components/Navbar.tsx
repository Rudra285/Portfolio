import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isIsland, setIsIsland] = useState(false);

  useEffect(() => {
    const updateHeader = () =>
      setIsIsland(window.scrollY >= window.innerHeight * 0.9);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header
        className={`site-header${isIsland ? " site-header--island" : ""}`}
      >
        <a className="brand" href="#home" aria-label="Rudra Patel home">
          r<span>p</span>
          <span className="brand-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">
            About <span>01</span>
          </a>
          <a href="#projects">
            Projects <span>02</span>
          </a>
        </nav>
        <div className="header-socials">
          <a
            href="https://github.com/Rudra285"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/rudra-patel-1b542b1b5"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </header>
    </>
  );
}
