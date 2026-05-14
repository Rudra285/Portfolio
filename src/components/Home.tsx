import aurora from '../assets/aurora.gif';
import profile from '../assets/profile.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="home-hero"
      style={{ backgroundImage: `url(${aurora})` }}
    >
      <div className="home-hero__content">
        <p className="home-hero__eyebrow">Software Engineer</p>
        <h1 className="home-hero__title">Rudra Patel</h1>
        <p className="home-hero__subtitle">
          I build creative, reliable software solutions to complex problems
          with a focus on performance, safety, and real-world impact.
        </p>

        <div className="home-hero__actions">
          <a href="#projects" className="btn-primary">
            My Projects
          </a>
          <a href="#about" className="btn-ghost">
            My Background
          </a>
        </div>

        <div className="home-hero__socials">
          <a
            href="https://github.com/Rudra285"
            target="_blank"
            rel="noreferrer"
            className="icon-link github"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/rudra-patel-1b542b1b5"
            target="_blank"
            rel="noreferrer"
            className="icon-link linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="home-hero__media">
        <div className="profile-card">
          <img src={profile} alt="Profile" className="profile-card__img" />
          <span className="profile-card__glow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Home;
