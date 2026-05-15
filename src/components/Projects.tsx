import { useRef, useState, useEffect, type ComponentType } from 'react';
import myGarageImg from '../assets/mygarage.png';
import squadImg from '../assets/squad.png';
import sfssImg from '../assets/sfss.png';
import bigchainDBImg from '../assets/bigchaindb.jpg';
import reactExpoImg from '../assets/reactExpo.jpg';
import garageLogoImg from '../assets/garage_logo.png';
import squadLogoImg from '../assets/squad_logo.png';
import sfssLogoImg from '../assets/sfss_logo.png';
import squadBg from '../assets/squad-back.png';
import garageBg from '../assets/garage-back.gif';
import sfssBg from '../assets/sfss-back.png';

/** Add new project ids here when you add a case to PROJECTS. */
type ProjectId = 'garage' | 'squad' | 'sfss';

type ProjectDefinition = {
  id: ProjectId;
  /** Shown in the overlay header */
  overlayTitle: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  /** Full-screen overlay background (CSS url(...) value is built from this import) */
  background: string;
  thumbnailHoverClass?: string;
  Detail: ComponentType;
};

const thumbWrapperStyle: React.CSSProperties = {
  width: '400px',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  borderRadius: '16px',
  padding: '1rem',
  margin: '0 auto',
  transition: 'transform 0.3s ease-in-out',
};

const thumbImgStyle: React.CSSProperties = {
  maxWidth: '400px',
  maxHeight: '1100px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  objectFit: 'contain',
};

function GarageDetail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img src={garageLogoImg} className="img-fluid mb-3" alt="Garage Logo" />
          <img src={bigchainDBImg} className="img-fluid rounded" alt="BigchainDB" />
        </div>
        <div className="col-md-6">
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
  );
}

function SquadDetail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img src={squadLogoImg} className="img-fluid mb-3" alt="Squad Logo" />
          <img src={reactExpoImg} className="img-fluid rounded" alt="React + Expo" />
        </div>
        <div className="col-md-6">
          <h3>Concept</h3>
          <div>
            <p>
              The idea of this application is to make a fun interactive way for friends to interact with each other by the way of creating
              weekly vlogs/summaries aka "Recaps". The users will be able join squads with their friends and be assigned a day of the week when they have
              to post a recap of their week. There will be a punishment tracker associated to them specific to a squad where if someone misses their day,
              then that counter will go up. And then at the and of the year. The squad can discuss what fun punishment people will perform. This way, we
              encourage friends to stay connected in a fun and creative way, especially friends who are far away from each other and can't see each other often.
            </p>
            <p>
              * This application is still in active development and not publically available.
            </p>
          </div>

          <h3>Features so far</h3>
          <div>
            <ul>
              <li><span>User Authentication:</span> Users can sign up and log in to the application.</li>
              <li><span>Squad Creation:</span> Users can create squads.</li>
              <li><span>Squad Join:</span> Users can join existing squads via a unique join code.</li>
              <li><span>Add/Remove Friends:</span> Users can add friends directly via handles, or send friend requests via a search bar.</li>
              <li><span>Event Tracking:</span> Users can track deadlines, tasks, and events associated to their squads.</li>
              <li><span>Event Creation:</span> Users can create events, and tasks for their squads.</li>
              <li><span>Group Chat (In Progress):</span> Users can chat with their squad members in real-time.</li>
              <li><span>Account/Profile Management (In Progress):</span> Users can manage their account and profile information.</li>
            </ul>
          </div>

          <h3>Future Features</h3>
          <div>
            <p>As the application develops, I plan to implement more features to enhance user experience and functionality. Before releasing it officially.</p>
            <ul>
              <li><span>Vote System:</span> Users would be able to create polls and vote on punishments, and otherwise.</li>
              <li><span>Video Management:</span> Users would be able to shoot, edit and upload clips directly to the application.</li>
              <li><span>Day Switch Requests:</span> Users would be able to request to switch their assigned day to a different day for a week.</li>
              <li><span>AI Integration:</span> Users would be able to use AI features to generate the recaps, reducing manual editing time.</li>
              <li><span>Automatic Storage Management:</span> The application should be able to automatically manage storage space and delete old content.</li>
            </ul>
          </div>

          <h3>Tech Stack</h3>
          <div>
            <ul>
              <li><span>Database:</span> Supabase (PostgreSQL)</li>
              <li><span>Language:</span> TypeScript/JavaScript</li>
              <li><span>Front-end Framework:</span> React Native via Expo</li>
              <li><span>Supported Platforms:</span> iOS, Android (In Progress)</li>
            </ul>
          </div>

          <h4>Resources</h4>
          <ul>
            <li><a href="https://react.dev/" target="_blank" rel="noreferrer">React</a></li>
            <li><a href="https://expo.dev/" target="_blank" rel="noreferrer">Expo</a></li>
            <li><a href="https://supabase.com/" target="_blank" rel="noreferrer">Supabase</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function SFSSDetail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img src={sfssLogoImg} className="img-fluid mb-3" alt="SFSSLogo" />
          {/* <img src={reactExpoImg} className="img-fluid rounded" alt="React + Expo" /> */}
        </div>
        <div className="col-md-6">
          <h3>Description</h3>
          <div>
            <p>
              Developed a local secure client-server file storage and sharing system in Python using socket programming and hybrid cryptography for up to 5 clients. 
              The hybrid cryptography includes an RSA-based secure key exchange and AES encrypted communication for secure authentication and protected file transfer.

              This project includes 2 versions, a base version and enhanced version.
            </p>
          </div>

          <h3>Base Version</h3>
          <div>
            <p>
              On the client side, the client connects to a server, sends over a user credentials to server to validate a authentication sequence using RSA asymmetric server public key.
              Client recieves an AES symmteric key from the server, after decrypting it with client's private key, it sends an "OK" to confirm successful key exchange, this allows any future 
              communication to be done with the symmetric key improving the performance of the real-time communication while keeping it secure, after the key exchange the client then recieves 
              a menu which is displayed to the client for input.
            </p>
            <p>
              The server initializes a TCP socket using IPv4 communication and listens for incoming client connections on a specified port. 
              It creates JSON metadata files for 5 clients and listens for upto 5 client connections. When a client connects, the server 
              creates a child process to handle the client independently, allowing the parent server process to continue accepting additional client connections.
              Once the server recieves the user credentials from the client, it authenticates them by checking the JSON files to see if the user exists,
              and if the creditentials are correct. Once authenticated, it genrates a AES symmetric key and sends it over with the RSA asymmetric client public key,
              once the server recieves the "OK" from the client, it sends over the menu option to client.
            </p>
          </div>

          <h3>Enhanced Version</h3>
          <div>
            <p>
              In addition to the base implementation, the client only implements a timeout for the connection socket, as the server 
              is preventing DoS attacks. So anymore than 5 connections, and the server will prevent more client connections. So the 
              waiting connections will need to timeout so it doesn't hold up the client machine.
            </p>
            <p>
              In addition to the base implementation, the server handles the concurrent clinet connections by implemeting a connection
              counter, it checks for any finished child processes, and decremnets the count, if a client connects, then it increments the counter.
              It has a connection limit of 5, if more clients try to connect over the limit it displays a warning and the parent process waits
              for a child process to terminate. This essentially ensures that DoS mitigation is ensured and the sytem has better security and
              concurrency management.
            </p>
          </div>

          <h3>Menu Features</h3>
          <div>
            <ul>
              <li>Upload File: The client can securely upload file data to the server based on given file size and update client JSON metadata with file information.</li>
              <li>Share File: The client can allow access to file the client has to other clients by updating the host client's metadata for the specific file.</li>
              <li>View Files: The clients can view the files they have access to, the server sends the information of files the client requests, like file name, owner, upload time, size.</li>
              <li>Download File: The client can request to downlaod a file, the server will check if the client has access to that file via the JSON metadata and end the file to the client.</li>
            </ul>
          </div>

          <h3>Concepts Implemented</h3>
          <div>
            <ul>
              <li>Socket Programming</li>
              <li>Client-Server Architecture</li>
              <li>Hybrid Cryptography</li>
              <li>JSON metadata storage</li>
              <li>Concurrent Processing</li>
              <li>Network Security</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Single source of truth for project tiles + overlay routing.
 * To add a project: extend ProjectId, add a Detail component, append one object here.
 */
const PROJECTS: ProjectDefinition[] = [
  {
    id: 'garage',
    overlayTitle: 'My Garage Application',
    thumbnailSrc: myGarageImg,
    thumbnailAlt: 'My Garage',
    background: garageBg,
    thumbnailHoverClass: 'garage-hover',
    Detail: GarageDetail,
  },
  {
    id: 'squad',
    overlayTitle: 'Squad',
    thumbnailSrc: squadImg,
    thumbnailAlt: 'Squad',
    background: squadBg,
    thumbnailHoverClass: 'squad-hover',
    Detail: SquadDetail,
  },
  {
    id: 'sfss',
    overlayTitle: 'Secure File Storage System',
    thumbnailSrc: sfssImg,
    thumbnailAlt: 'SFSS',
    background: sfssBg,
    thumbnailHoverClass: 'sfss-hover',
    Detail: SFSSDetail,
  },
];

const Project = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState<React.CSSProperties | null>(null);
  const thumbRefs = useRef<Partial<Record<ProjectId, HTMLImageElement | null>>>({});
  const originalRect = useRef<DOMRect | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectId | null>(null);

  const activeDefinition = activeProject
    ? PROJECTS.find((p) => p.id === activeProject) ?? null
    : null;

  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [showOverlay]);

  const setThumbRef = (id: ProjectId) => (el: HTMLImageElement | null) => {
    thumbRefs.current[id] = el;
  };

  const openProject = (id: ProjectId) => {
    const project = PROJECTS.find((p) => p.id === id);
    const el = thumbRefs.current[id];
    if (!project || !el) return;

    const rect = el.getBoundingClientRect();
    originalRect.current = rect;

    setActiveProject(id);
    setOverlayStyle({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      position: 'fixed',
      backgroundImage: `url(${project.background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      zIndex: 9999,
      overflow: 'hidden',
      transition: 'all 0.5s ease-in-out',
    });

    setShowOverlay(true);

    requestAnimationFrame(() => {
      setOverlayStyle((prev) =>
        prev
          ? {
              ...prev,
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
            }
          : prev,
      );
    });
  };

  const handleClose = () => {
    if (!originalRect.current) return;

    setOverlayStyle((prev) =>
      prev
        ? {
            ...prev,
            top: originalRect.current!.top,
            left: originalRect.current!.left,
            width: originalRect.current!.width,
            height: originalRect.current!.height,
          }
        : prev,
    );

    setTimeout(() => {
      setShowOverlay(false);
      setActiveProject(null);
    }, 500);
  };

  const Detail = activeDefinition?.Detail;

  return (
    <section
      id="projects"
      className="py-5 text-white"
      style={{ width: '100%', paddingLeft: '0', paddingRight: '0', margin: '0', backgroundColor: '#001317' }}
    >
      <h3 className="mb-5 text-center" style={{ fontWeight: 'bold' }}>My Projects</h3>

      <div
        className="container mb-5"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {PROJECTS.map((project) => (
          <div key={project.id} className="container d-flex flex-column align-items-center">
            <div style={thumbWrapperStyle} onClick={() => openProject(project.id)} role="presentation">
              <img
                ref={setThumbRef(project.id)}
                src={project.thumbnailSrc}
                alt={project.thumbnailAlt}
                className={`img-fluid ${project.thumbnailHoverClass ?? ''}`.trim()}
                style={thumbImgStyle}
              />
            </div>
            <p style={{ fontSize: '0.75rem', color: '#bbb', marginTop: '0.5rem' }}>Click to expand</p>
          </div>
        ))}

        {showOverlay && overlayStyle && activeDefinition && Detail && (
          <div style={overlayStyle}>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                padding: '1rem',
                position: 'sticky',
                top: 0,
                zIndex: 10001,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h2>{activeDefinition.overlayTitle}</h2>
              <button
                type="button"
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
                aria-label="Close project"
              >
                &times;
              </button>
            </div>

            <div
              style={{
                height: 'calc(100% - 80px)',
                overflowY: 'auto',
                padding: '2rem',
                paddingBottom: '5rem',
                color: 'white',
              }}
            >
              <Detail />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
