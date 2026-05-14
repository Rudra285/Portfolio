import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight - 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed-top site-nav ${visible ? 'is-visible' : ''}`}
      style={{
        top: visible ? '0' : '-80px',
        width: '100%',
        zIndex: 999,
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center px-4">

        {/* Left: Brand + Socials */}
        <div className="d-flex align-items-center gap-3">
          <span className="navbar-brand text-white fw-bold mb-0">Rudra Patel</span>
          <a className="nav-link icon-link github" href="https://github.com/Rudra285" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a className="nav-link icon-link linkedin" href="https://linkedin.com/in/rudra-patel-1b542b1b5" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        {/* Right: Links (only on desktop) */}
        <ul className="navbar-nav gap-4 mb-0 d-none d-md-flex flex-row">
          <li className="nav-item">
            <a className="nav-link text-white" href="#about">Background</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

