import { useEffect } from "react";
import profile from "../assets/profile.JPG?url";

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

export default function Home() {
  useEffect(() => {
    let frame = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateReveal = () => {
      frame = 0;
      const distance = Math.max(window.innerHeight * 0.9, 1);
      const rawProgress = clamp(window.scrollY / distance);
      const progress = reducedMotion.matches
        ? rawProgress > 0
          ? 1
          : 0
        : rawProgress;
      const copyProgress = clamp((progress - 0.12) / 0.58);
      const root = document.documentElement;

      root.style.setProperty("--portrait-reveal", `${progress * 100}%`);
      root.style.setProperty("--portrait-scale", `${1.08 - progress * 0.08}`);
      root.style.setProperty("--hero-copy-opacity", `${copyProgress}`);
      root.style.setProperty(
        "--hero-copy-shift",
        `${(1 - copyProgress) * 38}px`,
      );
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateReveal);
    };

    updateReveal();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
    };
  }, []);

  return (
    <section id="home" className="hero hero-scroll-reveal">
      <div className="hero-reveal-track">
        <div className="hero-reveal-stage">
          <div className="hero-primary">
            <div className="hero-topline">
              <span className="eyebrow">
                <span className="status-dot" /> SOFTWARE ENGINEER
              </span>
              <span className="eyebrow hero-edition">
                PERSONAL PORTFOLIO / R. PATEL
              </span>
            </div>
            <div className="hero-heading">
              <h1>
                Rudra
                <span>
                  Patel<span className="title-period">.</span>
                </span>
              </h1>
              <div className="hero-intro">
                <span className="intro-mark" aria-hidden="true">
                  ↳
                </span>
                <p>
                  I build software <br />
                  that holds up <br />
                  <em>in the real world.</em>
                </p>
                <a className="primary-link" href="#projects">
                  Explore projects <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="hero-footnote">
              <span>PERFORMANCE. SAFETY. REAL-WORLD IMPACT.</span>
              <span>KEEP SCROLLING ↓</span>
            </div>
          </div>
          <div className="portrait-curtain">
            <img src={profile} alt="Rudra Patel at a mountain lake" />
            <div className="portrait-shade" />
            <div className="portrait-caption">
              <span>RUDRA PATEL / SOFTWARE ENGINEER</span>
              <span>SCROLL TO REVEAL ↓</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-after-reveal">
        <div className="hero-bottom">
          <div className="engineering-plate" aria-hidden="true">
            <div className="plate-label">
              SYSTEMS THINKING, FROM THE GROUND UP
            </div>
            <svg viewBox="0 0 700 220" fill="none">
              <g stroke="currentColor" strokeWidth="1">
                <path d="M45 150 240 45 445 150 250 255ZM145 100 340 -5 545 100 350 205ZM245 50 440 -55 645 50 450 155" />
                <path d="M45 120 240 15 445 120 250 225ZM145 70 340 -35 545 70 350 175ZM245 20 440 -85 645 20 450 125" />
                <path d="M45 120v30m400-30v30m-195 75v30m-105-185v30m400-30v30m-195 75v30" />
                <circle cx="345" cy="116" r="47" />
                <circle cx="345" cy="116" r="65" strokeDasharray="3 7" />
                <path d="M345 30v172M260 116h170" />
              </g>
              <circle cx="345" cy="116" r="5" fill="currentColor" />
            </svg>
            <div className="plate-footer">
              <span>FIRMWARE → SYSTEMS → APPLICATIONS</span>
              <span>FIG. 001</span>
            </div>
          </div>
          <div className="profile-note">
            <img src={profile} alt="" />
            <div>
              <span className="eyebrow">BEHIND THE CODE</span>
              <p>
                Curious by nature. <br />
                Engineer by practice.
              </p>
              <a href="#about">My background ↗</a>
            </div>
          </div>
        </div>
        <div className="hero-footnote">
          <span>FROM EMBEDDED FIRMWARE TO PRODUCT SOFTWARE.</span>
          <span>CONTINUE TO MY BACKGROUND ↓</span>
        </div>
      </div>
    </section>
  );
}
