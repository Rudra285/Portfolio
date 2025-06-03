import { useRef, useState, useEffect } from 'react';
import myGarageImg from '../assets/mygarage.png';
import bigchainDBImg from '../assets/bigchaindb.jpg';
import logoImg from '../assets/logo.png';
import garageBg from '../assets/garage-back.gif';

const Project = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [_, setAnimatingOut] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState<any>(null);
  const garageRef = useRef<HTMLImageElement>(null);
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

  const handleClick = () => {
    if (garageRef.current) {
      const rect = garageRef.current.getBoundingClientRect();
      originalRect.current = rect;

      setOverlayStyle({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        position: 'fixed',
        backgroundImage: `url(${garageBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
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

      setTimeout(() => {
        setShowOverlay(false);
        setAnimatingOut(false);
      }, 500);
    }
  };

  return (
    <section
      id="projects"
      className="py-5 text-white"
      style={{ width: '100%', paddingLeft: '0', paddingRight: '0', margin: '0' }}
    >
      <h3 className="mb-5 text-center" style={{ fontWeight: 'bold' }}>My Projects</h3>

      <div className="container d-flex flex-column align-items-center">
        <div
          style={{
            width: '400px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: '16px',
            // backgroundColor: '#FFDD00',
            padding: '1rem',
            margin: '0 auto', // ✅ center horizontally
            transition: 'transform 0.3s ease-in-out',
          }}
          onClick={handleClick}
        >
          <img
            ref={garageRef}
            src={myGarageImg}
            alt="My Garage"
            className="img-fluid garage-hover"
            style={{
              maxWidth: '400px',
              maxHeight: '1100px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Instruction Text Below */}
        <p style={{ fontSize: '0.75rem', color: '#bbb', marginTop: '0.5rem' }}>
          Click to expand
        </p>
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div style={overlayStyle}>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              padding: '1rem',
              position: 'sticky',
              top: 0,
              zIndex: 10001,
              backgroundImage: `url(${garageBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2>My Garage Application</h2>
            <button
              onClick={handleClose}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '2.5rem',
                color: 'white',
                textShadow: '0 0 5px black',
                cursor: 'pointer',
                zIndex: 10002,
              }}
            >
              &times;
            </button>
          </div>

          <div
            style={{
              height: 'calc(100% - 80px)',
              overflowY: 'auto',
              padding: '2rem',
              paddingBottom: '5rem', // extra bottom space to prevent UI cutoff
              color: 'white',
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <img src={logoImg} className="img-fluid mb-3" alt="Logo" />
                  <img src={bigchainDBImg} className="img-fluid rounded" alt="BigchainDB" />
                </div>
                <div className="col-md-6" >
                  <h3>Goal</h3>
                  <div>
                    <p>
                      The goal was to develop an application using blockchain technology, where users and dealearships can buy/sell and trade digital
                      vehicle assets. Where the transactions will be safely stored on a immutable ledger. The users will be able to
                      track the vehicle assets throughout it's entire lifetime, thus making the real world experience to buy and sell
                      vehicles safer.
                    </p>
                  </div>

                  <h3>BigchainDB</h3>
                  <div>
                    <p>
                      BigchainDB was the perfect platform to showcase this concept. BigchainDB is free to use database which has its own form of smart-contracts to
                      make the transactions of assets safer. It supports decentrilization via federation of voting nodes which makes the P2P network.
                      Throughput for transactions increases linearly with the nodes.
                    </p>
                  </div>

                  <h3>Crypto Conditions</h3>
                  <div>
                    <p>As mentioned above BigchainDB has its own form of smart-contracts known as "crypto conditions". Which include:</p>
                    <ul>
                      <li><span className="cond-item">Threshold Conditions:</span> Allows for multiple owner assets to be signed in a flexible manner. Setts a conditions where if certain amount of signatures are signed, then the asset is realsed and free to be transfer.</li>
                      <li><span className="cond-item">Hashlock Conditions:</span> Similar to passwords, a secret phrase/pre-image is required so the asset can be transfered.</li>
                      <li><span className="cond-item">Timeout Conditions:</span> Essentially puts a timeout on the asset if a condition is not met within the given timeframe, then the asset is lost and can't be transferred by anyone.</li>
                    </ul>
                    <p>The conditions are all use an Escrow which releases an asset if the given condition is met.</p>
                  </div>

                  <h3>Implementation</h3>
                  <p>
                    To implememnt BigchainDB there are 2 options, JavaScript and Python. We decided to build the application in Python utilizing the Python Driver. 
                    To build the app we used Python to implememnt the backend and KivyMD for the frontend.
                  </p>

                  <h4>Resources</h4>
                  <ul>
                    <li><a href="https://www.bigchaindb.com/" target="_blank" rel="noreferrer">BigchainDB</a></li>
                    <li><a href="https://docs.bigchaindb.com/projects/py-driver/en/latest/" target="_blank" rel="noreferrer">Python Driver</a></li>
                    <li><a href="https://kivymd.readthedocs.io/en/latest/" target="_blank" rel="noreferrer">KivyMD</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
