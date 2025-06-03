import { useEffect, useRef, useState } from 'react';
import hubbellLogo from '../assets/Hubbell.png';
import pythonLogo from '../assets/python.png';
import cppLogo from '../assets/c++.png';
import cLogo from '../assets/c.png';
import javaLogo from '../assets/java.png';
import jsLogo from '../assets/js.png';
import swiftLogo from '../assets/swift.png';
import bashLogo from '../assets/bash.png';
import rustLogo from '../assets/rust.png';
import sqlLogo from '../assets/sql.png';
import asmLogo from '../assets/asm.svg';
import matlabLogo from '../assets/matlab.png';
import buLogo from '../assets/bu.png';
import meuLogo from '../assets/meu.svg';
import '../styles/style.css'; // Ensure you have the correct path to your CSS file

const About = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [_, setAnimatingOut] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState<any>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const originalRect = useRef<DOMRect | null>(null);

  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden'; // prevent scroll on <html>
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [showOverlay]);

  const handleLogoClick = () => {
    if (logoRef.current) {
      const rect = logoRef.current.getBoundingClientRect();
      originalRect.current = rect;

      setOverlayStyle({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        position: 'fixed',
        backgroundColor: '#FFDD00',
        zIndex: 9999,
        overflow: 'hidden',
        transition: 'all 0.5s ease-in-out',
      });

      setShowOverlay(true);

      setTimeout(() => {
        setOverlayStyle((prev: any) => ({
          ...prev,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        }));
      }, 20);
    }
  };

  const handleClose = () => {
    if (originalRect.current) {
      setAnimatingOut(true);
      setOverlayStyle((prev: any) => ({
        ...prev,
        top: originalRect.current!.top,
        left: originalRect.current!.left,
        width: originalRect.current!.width,
        height: originalRect.current!.height,
      }));

      // Wait for animation to finish, then hide
      setTimeout(() => {
        setShowOverlay(false);
        setAnimatingOut(false);
      }, 500); // match transition duration
    }
  };

  return (
    <section
      id="about"
      className="container-fluid text-white"
      style={{ padding: '4rem 0', width: '100%', }}
    >
      <div className="container">
        <h2 className="mb-5 text-center" style={{ fontWeight: 'bold' }}>About Me</h2>

        {/* Work */}
        <div className="row mb-5">
          <div className="col text-center">
            <h3
              style={{
                borderBottom: '2px solid #444',
                paddingBottom: '0.5rem',
                marginBottom: '1.5rem',
              }}
            >
              Work Experience
            </h3>

            {/* Hubbell Logo Card BELOW the heading */}
            <div
              style={{
                width: '200px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: '16px',
                backgroundColor: '#FFDD00',
                padding: '1rem',
                margin: '0 auto', // ✅ center horizontally
                transition: 'transform 0.3s ease-in-out',
              }}
              onClick={handleLogoClick}
            >
              <img
                ref={logoRef}
                src={hubbellLogo}
                alt="Hubbell Logo"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out',
                  objectFit: 'contain',
                }}
                className="img-fluid hubbell-hover"
              />
            </div>
            {/* Small Instruction Text */}
            <p style={{ fontSize: '0.75rem', color: '#bbb', marginTop: '0.5rem' }}>
              Click to expand
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="row mb-5">
          {/* Education Left */}
          <div className="col-md-6">
            <h3 style={{ borderBottom: '2px solid #444', paddingBottom: '0.5rem' }}>Education</h3>

            {/* MacEwan */}
            <div className="d-flex align-items-center gap-4 p-3 mt-4 rounded" style={{ backgroundColor: '#6E1919', color: 'white' }}>
              <img
                src={meuLogo}
                alt="MacEwan University"
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain',
                  backgroundColor: 'white',
                  padding: '0.5rem',
                  borderRadius: '12px',
                }}
              />
              <div>
                <p style={{ margin: 0, fontWeight: 'bold' }}>Grant MacEwan University</p>
                <p style={{ margin: 0 }}>September 2018 – June 2023</p>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>BSc. Computer Science<br />Minor: Mathematics</p>
              </div>
            </div>

            {/* BU */}
            <div className="d-flex align-items-center gap-4 p-3 mt-4 rounded" style={{ backgroundColor: '#CC0000', color: 'white' }}>
              <img 
                src={buLogo} 
                alt="Boston University" 
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain',
                  backgroundColor: 'white',
                  padding: '0.5rem',
                  borderRadius: '12px',
                }} 
              />
              <div>
                <p style={{ margin: 0, fontWeight: 'bold' }}>Boston University</p>
                <p style={{ margin: 0 }}>May 2024 – August 2025</p>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>MS in Computer ScienceSoftware Development</p>
              </div>
            </div>
          </div>

          {/* Certificates Right */}
          <div className="col-md-6 mt-4 mt-md-0">
            <h3 style={{ borderBottom: '2px solid #444', paddingBottom: '0.5rem' }}>Certificates</h3>
            <ul className="mt-3" style={{ lineHeight: '1.8' }}>
              <li>National Cyber League Individual CTF Spring 2022 (Cyber Skyline)</li>
              <li>Professional Graphics Design Module 1 (Shaw Academy)</li>
              <li>Ultimate Rust Crash Course (Udemy)</li>
              <li>Docker for Beginner – Hands On – DevOps (Udemy)</li>
            </ul>
          </div>
        </div>

        


        <div className="row justify-content-center mt-4">
        {/* Programming Languages Section */}
        <div className="col-md-4">
          <h3 style={{ borderBottom: '2px solid #444', paddingBottom: '0.5rem' }}>
            Programming Languages
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 60px)',
              gap: '16px',
              justifyItems: 'center',
              maxWidth: '100%',
              marginTop: '1rem',
            }}
          >
            <img src={pythonLogo} alt="Python" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
            <img src={cppLogo} alt="C++" style={{ width: '55px', height: '55px', objectFit: 'contain' }} />
            <img src={cLogo} alt="C" style={{ width: '70px', height: '60px', objectFit: 'contain' }} />
            <img src={javaLogo} alt="Java" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
            <img src={rustLogo} alt="Rust" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
            <img src={sqlLogo} alt="SQL" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
            <img src={asmLogo} alt="Assembly" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
            <img src={matlabLogo} alt="MATLAB" style={{ width: '70px', height: '60px', objectFit: 'contain' }} />
            <img src={swiftLogo} alt="Swift" style={{ width: '80px', height: '60px', objectFit: 'contain' }} />
            <img src={jsLogo} alt="JavaScript" style={{ width: '40px', height: '60px', objectFit: 'contain' }} />
            <img src={bashLogo} alt="Bash" style={{ width: '80px', height: '60px', objectFit: 'contain' }} />
          </div>
        </div>

        {/* Tools & Technologies Section */}
        <div className="col-md-4">
          <h3 style={{ borderBottom: '2px solid #444', paddingBottom: '0.5rem' }}>
            Tools & Technologies
          </h3>
          <div className="col-auto">
            <ul>
              <li>Android Studio</li>
              <li>Wireshark</li>
              <li>PyTorch</li>
              <li>Scikit-learn</li>
              <li>Selenium</li>
              <li>Pytest</li>
              <li>BigChainDB</li>
              <li>KivyMD</li>
              <li>React</li>
              <li>Lucidchart</li>
              <li>Figma</li>
              <li>Git</li>
              <li>Docker</li>
              <li>React</li>
              <li>Azure DevOps</li>
              <li>Postman</li>
              <li>Saleae Logic Pro 2</li>
              <li>Simplicity Commander</li>
            </ul>
          </div>
        </div>


        <div className="col-md-2">
          <h3 style={{ borderBottom: '2px solid #444', paddingBottom: '0.5rem' }}>
            Other
          </h3>
          <div className="row mt-3">
            <div >
              <ul style={{ lineHeight: '1.8' }}>
                <li>Soldering</li>
                <li>RESTful API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* </div> */}

      {/* Animated overlay */}
      {showOverlay && (
        <div style={overlayStyle}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1.5rem 2rem',
            }}
          >
            <img src={hubbellLogo} alt="Hubbell" style={{ height: '60px' }} />
            <button
              onClick={handleClose}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>
          </div>

          {/* Scrollable content */}
          <div
            style={{
              height: 'calc(100% - 90px)',
              overflowY: 'auto',
              padding: '2rem',
              color: 'white',
            }}
          >
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h1>Hubbell Power Systems</h1>
              <h2>Associate Embedded Software Engineer</h2>
              <h3>April 2023 - April 2025</h3>
              <div style={{ color: 'black'}}>
                <h4>Firmware Team</h4>
                <p style={{ color: 'black'}}>
                  I worked as an Associate Embedded Software Engineer at Hubbell Power Systems, where
                  I started out on the firmware development team, and built embedded firmware in Rust and C.
                  I used Logic Pro 2 by Saleae, Simplicity Studio, VSCode, and Simplicity Commander during the development.
                  I was on this team for about a year, I gained experience in working with reference manuals, and schematics
                  to determine how to use registers for the different microcontrollers. I migrated C code from an old microcontroller
                  to a new microcontroller which was being developed in Rust.
                </p>
              </div>
              <div style={{ color: 'black'}}>
                <h4>DevOps Team</h4>
                <p style={{ color: 'black'}}>
                  After a year, I transitioned to the DevOps team, where I focused on automating the build and deployment processes.
                  This was a new team for this project, and I was chosen to be a part of this team, with new team members. 
                  As part of this team, I got to interact with many other development teams throughout this project to determine 
                  requirements needed to build the automation pipelines.
                </p>
                <p style={{ color: 'black'}}>
                  In the DevOps team, I built automated test scripts via pytest, and later on I worked with the selenium library for
                  browser automation. A major part during working on DevOps for this project was building and integrating Hardware-in-Loop
                  tests. I was working fully remotely within my team, since I was working from a different office, so I perfomed majority
                  of the HIL setups for my office, including soldering wires and connections. Later on, I was given an opportunity
                  to bringup the GPS setup of the HIL test fixture, where I wrote a thourough document on how to set it up, and
                  a detailed report on the financial costs, problems, and solutions for the GPS setup. This document was used to
                  determine how to proceed with the GPS setup, for the rest of the team in the other locations.
                </p>
                <p style={{ color: 'black'}}>
                  Throughout my time on the DevOps team, I gained experience using Azure DevOps, and implpemented CI/CD pipelines,
                  for automated testing, and DFW. I also got to learn how to work with Docker, although we didn't use it in the long run.
                  I got a lot of practice writing scripts in python and bash, and I validated lot of REST API tests using JWT.
                </p>
              </div>
              <div>
                <p style={{ color: 'black'}}>
                  I was laid off in April 2025 due to project getting shutdown.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;








// import React, { useState } from 'react';
// import '../styles/style.css';
// import profile from '../assets/profile.jpg';

// const About = () => {
//   const [activeTab, setActiveTab] = useState<'skills' | 'education'>('skills');

//   return (
//     <div id="about" className="container-fluid">
//       <div className="row align-items-center">
//         <div className="col-md-4 mb-4">
//           <img src={profile} alt="profile" className="img-fluid rounded shadow" />
//         </div>
//         <div className="col-md-8">
//           <h3 id="sub-title">About Me</h3>
//           <p>
//             Hello, my name is Rudra, I have a Bachelor of Science in Computer Science from Grant MacEwan University. I am currently
//             attending a part-time online Master of Science program in Computer Science - Software Develoipment at Boston University Metropolitan College, slated to end in August 2025.
//             <br /><br />
//             I am interested in software development and software engineering, building mobile applications,
//             web applications, and web development. I am also learning about game development on the side via Unity.
//           </p>

//           {/* Tabs */}
//           <div className="d-flex gap-4 mt-3">
//             <h5
//               className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
//               onClick={() => setActiveTab('skills')}
//             >
//               Skills
//             </h5>
//             <h5
//               className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
//               onClick={() => setActiveTab('education')}
//             >
//               Education
//             </h5>
//           </div>

//           {/* Content */}
//           <div className="mt-4">
//             {activeTab === 'skills' && (
//               <div className="row">
//                 {[
//                   { name: 'Python', level: 90 },
//                   { name: 'C', level: 60 },
//                   { name: 'C++', level: 40 },
//                   { name: 'Java', level: 40 },
//                   { name: 'SQL', level: 20 },
//                   { name: 'ASM', level: 75 },
//                   { name: 'MATLAB', level: 30 }
//                 ].map(skill => (
//                   <div key={skill.name} className="col-sm-6 mb-3">
//                     <p className="mb-1">{skill.name}</p>
//                     <div className="progress" style={{ height: '22px' }}>
//                       <div
//                         className="progress-bar"
//                         role="progressbar"
//                         style={{ width: `${skill.level}%` }}
//                         aria-valuenow={skill.level}
//                         aria-valuemin={0}
//                         aria-valuemax={100}
//                       >
//                         {skill.level}%
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {activeTab === 'education' && (
//               <div className="mt-3">
//                 <h5 className="fw-bold">Post-Secondary</h5>
//                 <ul>
//                   <li>
//                     <strong>Grant MacEwan University</strong> (September 2018 - June 2023)<br />
//                     Major: BSc. Computer Science<br />
//                     Minor: Mathematics
//                   </li>
//                   <li>
//                     <strong>Boston University Metropolitan College</strong> (May 2024 - August 2025)<br />
//                     Major: MS Software Development
//                   </li>
//                 </ul>
//                 <h5 className="fw-bold">Certificates</h5>
//                 <ul>
//                   <li>Graphics Design Module 1 - Shaw Academy</li>
//                   <li>National Cyber League Individual CTF Spring 2022 - Cyber Skyline</li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;