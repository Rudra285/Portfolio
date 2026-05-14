import { useRef, useState, useEffect, type ComponentType } from 'react';
import myGarageImg from '../assets/mygarage.png';
import squadImg from '../assets/squad.png';
import bigchainDBImg from '../assets/bigchaindb.jpg';
import reactExpoImg from '../assets/reactExpo.jpg';
import garageLogoImg from '../assets/garage_logo.png';
import squadLogoImg from '../assets/squad_logo.png';
import squadBg from '../assets/squad-back.png';
import garageBg from '../assets/garage-back.gif';

/** Add new project ids here when you add a case to PROJECTS. */
type ProjectId = 'garage' | 'squad' | 'restaurant';

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

function RestaurantDetail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img src={squadLogoImg} className="img-fluid mb-3" alt="Squad Logo" />
          <img src={reactExpoImg} className="img-fluid rounded" alt="React + Expo" />
        </div>
        <div className="col-md-6">
          <h3>What is it?</h3>
          <div>
            <p>
              This is an academic project I worked on as part of a team. It is a simple application to schedule employees in a restaurant based on available shifts and requirements of the schedules.
            </p>
          </div>

          <h3>Application Architecture</h3>
          <div>
            <ul>
              <li>In progress</li>
            </ul>
          </div>

          <h3>Tech Stack</h3>
          <div>
            <ul>
              <li><span>Database:</span> SQLite</li>
              <li><span>Language:</span> Java</li>
              <li><span>IDE:</span> Android Studio</li>
              <li><span>Supported Platforms:</span> Android </li>
            </ul>
          </div>

          <h4>Resources</h4>
          <ul>
            <li><a href="https://react.dev/" target="_blank" rel="noreferrer">React</a></li>
            <li><a href="https://expo.dev/" target="_blank" rel="noreferrer">Expo</a></li>
            <li><a href="https://supabase.com/" target="_blank" rel="noreferrer">Supabase</a></li>
            <li style={{ fontWeight: 'bold' }}>* Github repository link cannot be shared publically due to academic restrictions, however I can provide the link upon request</li>
          </ul>
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
    thumbnailHoverClass: 'garage-hover',
    Detail: SquadDetail,
  },
  {
    id: 'restaurant',
    overlayTitle: 'My Restaurant',
    thumbnailSrc: squadImg,
    thumbnailAlt: 'My Restaurant',
    background: garageBg,
    thumbnailHoverClass: 'restaurant-hover',
    Detail: RestaurantDetail,
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
