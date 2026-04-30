import { appData } from '../data/appData';

interface Props {
  onNavTrigger: (page:string) => void;
}

const Home = ({onNavTrigger} : Props) => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="hero section">

        <div className="container">

          <div className="row gy-4 align-items-center">
            <div className="col-lg-7 order-2 order-lg-1">
              <div className="hero-content">
                <h1><span className="highlight">Seif Ali Esmael</span></h1>
                <h2>Portfolio <span className="typed" data-typed-items="UI/UX Designer, Web Developer, Digital Artist, Brand Strategist"></span></h2>
                <p>Welcome to my portfolio. Here, I've presented my projects, skills and experience in an easy-to-view way. Feel free to peruse. </p>
                <div className="hero-actions" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div>
                    <a
                    className="btn btn-primary"
                    onClick={() => onNavTrigger('Projects')}
                    style={{ cursor: 'pointer' }}>
                    My Projects
                    </a>
                  </div>
                  <div className='d-flex flex-wrap gap-2 mb-4'>
                    <a href={appData.links.linkedIn} className="btn btn-outline">Get Connected <i className="bi bi-linkedin"></i></a>
                    <a href={'mailto:' + appData.contact.email} className="btn btn-outline">Get In Touch <i className="bi bi-envelope-open-fill"></i></a>
                    <a href={appData.links.gitHub} className="btn btn-outline">My Github Profile <i className="bi bi-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 order-1 order-lg-2"> </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <div className="hero-image">
                <div className="image-wrapper">
                  <img src="/assets/img/seif.jpg" alt="Seif Ali Esmael" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section> {/* Hero Section */}

    </div>
  )
}

export default Home