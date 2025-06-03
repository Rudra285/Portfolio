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
      className="navbar fixed-top"
      style={{
        backgroundColor: 'transparent',
        color: 'white',
        transition: 'top 0.3s, background-color 0.3s',
        top: visible ? '0' : '-80px',
        width: '100%',
        zIndex: 999,
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center px-4">

        {/* Left: Brand + Socials */}
        <div className="d-flex align-items-center gap-3">
          <span className="navbar-brand text-white fw-bold mb-0">Rudra Patel</span>
          <a className="nav-link text-white" href="https://github.com/Rudra285" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a className="nav-link text-white" href="https://linkedin.com/in/rudra-patel-1b542b1b5" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>

        {/* Right: Links (only on desktop) */}
        <ul className="navbar-nav gap-4 mb-0 d-none d-md-flex flex-row">
          <li className="nav-item">
            <a className="nav-link text-white" href="#about">About</a>
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

