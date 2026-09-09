import { useState } from 'react';
import DetailDialog from './DetailDialog';
const languages = ['Python', 'C', 'Java', 'Rust', 'SQL', 'Assembly', 'MATLAB', 'Swift', 'JavaScript', 'Bash'];
const tools = ['Android Studio', 'Wireshark', 'PyTorch', 'Scikit-learn', 'Selenium', 'Pytest', 'BigchainDB', 'KivyMD', 'React', 'Lucidchart', 'Figma', 'Git', 'Docker', 'Azure DevOps', 'Postman', 'Saleae Logic Pro 2', 'Simplicity Commander', 'Claude Code', 'Codex', 'GitHub Copilot'];
export default function About() {
  const [open, setOpen] = useState(false);
  return <section id="about" className="section about-section">
    <div className="section-heading"><span className="eyebrow">01 — THE ENGINEER</span><h2>Grounded in systems.<br /><em>Driven by curiosity.</em></h2></div>
    <div className="background-grid"><div className="experience-column"><span className="eyebrow">EXPERIENCE / 2023—2025</span><button className="experience-card" onClick={() => setOpen(true)}><span className="experience-logo">HUBBELL<span>POWER SYSTEMS</span></span><h3>Associate Embedded<br />Software Engineer</h3><p>Firmware in Rust and C. Automated testing, CI/CD, and hardware-in-loop systems.</p><span className="text-link">Explore my experience <span aria-hidden="true">↗</span></span></button></div>
    <div className="education-column"><span className="eyebrow">EDUCATION</span><article className="education-item"><span className="education-year">2024—2025</span><h3>Boston University</h3><p>MS in Computer Science<br />Software Development</p></article><article className="education-item"><span className="education-year">2018—2023</span><h3>Grant MacEwan University</h3><p>BSc. Computer Science<br />Minor in Mathematics</p></article></div></div>
    <div className="toolbox"><div className="toolbox-heading"><span className="eyebrow">TOOLS OF THE TRADE</span><h3>A versatile <br />working set.</h3></div><div className="toolbox-content"><h4>Languages</h4><div className="skill-tags">{languages.map(x=><span key={x}>{x}</span>)}</div><h4>Tools & technologies</h4><div className="tool-tags">{tools.map(x=><span key={x}>{x}</span>)}</div><h4>Also in the toolkit</h4><p>Soldering · RESTful APIs</p></div></div>
    <div className="certificates"><span className="eyebrow">Certifications</span><ul><li>National Cyber League Individual CTF <span>Cyber Skyline / Spring 2022</span></li><li>Ultimate Rust Crash Course <span>Udemy</span></li><li>Docker for Beginners — Hands On — DevOps <span>Udemy</span></li></ul></div>
    {open && <DetailDialog title="Hubbell Power Systems" onClose={() => setOpen(false)}><div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
            </div></DetailDialog>}
  </section>;
}
