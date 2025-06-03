import aurora from '../assets/aurora.gif';
import profile from '../assets/profile.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${aurora})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        padding: '0 5%',
      }}
    >
      {/* Left Side: Name + Icons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>Rudra Patel</h1>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '2rem' }}>
          <a href="#about" className="nav-link text-white">About Me</a>
          <a href="#projects" className="nav-link text-white">My Projects</a>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '2rem' }}>
          <a
            href="https://github.com/Rudra285"
            target="_blank"
            rel="noreferrer"
            className="icon-link github"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/rudra-patel-1b542b1b5"
            target="_blank"
            rel="noreferrer"
            className="icon-link linkedin"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Right Side: Same size and behavior as in About section */}
      <div className="col-1-home">
        <img
          src={profile}
          alt="Profile"
          className="img-fluid"
          style={{
            width: '30vw',          // scales with window width
            maxWidth: '400px',      // cap to prevent excessive size on large screens
            height: 'auto',
            borderRadius: '12px',
          }}
        />
      </div>
    </section>
  );
};

export default Home;
