import { FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Navbar() {
  return <><a className="skip-link" href="#main">Skip to content</a><header className="site-header"><a className="brand" href="#home" aria-label="Rudra Patel home">r<span>p</span><span className="brand-dot">.</span></a><nav aria-label="Main navigation"><a href="#about">About <span>01</span></a><a href="#projects">Projects <span>02</span></a></nav><div className="header-socials"><a href="https://github.com/Rudra285" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://linkedin.com/in/rudra-patel-1b542b1b5" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a></div></header></>;
}
