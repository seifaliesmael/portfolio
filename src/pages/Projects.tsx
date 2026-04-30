import { useState, type ReactNode} from "react";
import { appData } from "../data/appData"
import type {Project} from "../data/appData"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeDetails = () => setSelectedProject(null);

  const [selectedProjectImage, setSelectedProjectImage] = useState<string | undefined>(undefined);

  const getCurrentProjectImage = () => {
    if (selectedProject?.images == undefined) return undefined;
    if (selectedProjectImage == undefined) return undefined;
    else return selectedProjectImage;
  }



  return (
    <div>
      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio section">

        {/* Section Title */}
        <div className="container section-title">
          <h2>My Projects</h2>
          <p>Compiled below are some of my notable personal projects over the years.</p>
        </div>{/* End Section Title */}

        <div className="container">

          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <div className="row gy-4 isotope-container">

              {appData.projects.map((project) => (

                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-strategy">

                    <div className="portfolio-card" onClick={() => 
                      {
                        setSelectedProject(project);
                        setSelectedProjectImage(project.images?.[0])
                      }}  
                      style={{cursor: "pointer"}}>
                        
                      <div className="portfolio-img">
                        <img src={project.images?.[0] ?? "assets/img/portfolio/portfolio-4.webp"} 
                        alt="Portfolio Item" 
                        className="img-fluid"
                        style={{
                          width: "100%",
                          aspectRatio: "16/9",       // Forces a horizontal shape (adjust to 3/2 or 4/3 if needed)
                          objectFit: "contain",      // Shrinks the image to fit inside without cropping
                          backgroundColor: "#ffffff" // Adds the white padding on the empty sides
                        }}/>
                      </div>
                      <div className="portfolio-info">
                        <h4> {project.title} </h4>
                        <p> <em>{project.skills}</em> </p>
                        <div className="portfolio-tags">
                          {project.tags.map((tag) => <span> {tag} </span>)}
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>{/* End Portfolio Items Container */}
          </div>
        </div>

      </section>{/* /Portfolio Section */}

      {/* Project Details pop-up */}
      {selectedProject && (
        <div 
          className="portfolio-popup-overlay" 
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)", zIndex: 9999,
            overflowY: "auto", padding: "5vh 15px", display: "flex", justifyContent: "center"
          }}
          onClick={closeDetails}> {/* Clicking the dark background closes it */} 
        
          {/* Prevent clicks inside the white box from closing the popup */}
          <div 
            className="container" 
            style={{ 
              backgroundColor: "var(--surface-color)", borderRadius: "12px", 
              position: "relative", padding: "40px", maxWidth: "1340px", height: "fit-content" 
            }}
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Close Button */}
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              aria-label="Close"
              onClick={closeDetails}
              style={{ position: "absolute", top: "20px", right: "20px", fontSize: "1.5rem" }}
            ></button>

            <div className="portfolio-details">
              <div className="section-title mb-4">
                <h2>{selectedProject.title}</h2>
              </div>

              <div className="row gy-4">
                {/* Left Side: Images */}
                <div className="col-lg-6">
                  <div className="portfolio-details-media">
                    <div className="main-image mb-3">
                      <img src={getCurrentProjectImage() ?? "assets/img/portfolio/portfolio-5.webp"} 
                      alt="Main Project" 
                      className="img-fluid rounded" 
                      style={{
                        width: "100%",
                        aspectRatio: "16/9",
                        objectFit: "contain",
                        backgroundColor: "#ffffff"
                      }}/>
                    </div>
                    <div className="thumbnail-grid">
                      <div className="row g-2">
                        {selectedProject.images?.map((link:string) => 
                          (<div className="col-3">
                            <img src={link} 
                            alt="Gallery" 
                            className="img-fluid rounded" 
                            style={{
                              width: "100%",
                              aspectRatio: "16/9",
                              objectFit: "contain",
                              backgroundColor: "#ffffff"
                            }}
                            onClick={() => setSelectedProjectImage(link)} 
                            />
                          </div>))}
                      </div>
                    </div>
                    <div className="tech-stack-badges mt-4 d-flex flex-wrap gap-2">
                      <span className="badge bg-secondary">{selectedProject.skills}</span>
                    </div>
                    {selectedProject.collaborators && (
                      <div className="collaborators-section mt-4"> 
                        <h5 className="mb-3 fw-bold" style={{ color: "var(--heading-color)" }}>Collaborators</h5>
                        <ul className="list-unstyled m-0">
                          {selectedProject.collaborators.map((person: string, index: number) => (
                            <li key={index} className="d-flex align-items-center mb-2" style={{ color: "color-mix(in srgb, var(--default-color), transparent 15%)" }}>
                              {/* Using a person icon to match the theme! */}
                              <i className="bi bi-person-fill me-2" style={{ color: "var(--accent-color)", fontSize: "1.1rem" }}></i>
                              <span>{person}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="col-lg-6">
                  <div className="portfolio-details-content">
                    
                    <h2 className="project-title mb-3">{selectedProject.title}</h2>
                    
                    {selectedProject.repo && (
                    <div className="project-website-box mb-2 p-3 light-background"
                    style={{ backgroundColor: "#213642",
                    borderRadius: "10px",              
                    border: "1px solid color-mix(in srgb, var(--default-color), transparent 90%)"
                    }}> 
                      <h5> <strong>Link to Project Repository </strong> </h5>
                      <div className="project-website mb-0">
                        <i className="bi bi-link-45deg"></i>
                        <a href={selectedProject.repo} target="_blank" rel="noreferrer"> {selectedProject.repo}</a>
                      </div>
                    </div>
                    )}

                    <div className="project-overview mb-4">
                      <p className="lead"> {(selectedProject.description == "") ? "Default description" : selectedProject.description}
                      </p>
                    </div>

                    <div className="project-features">
                      <h3 className="mb-3"> Key Points</h3>
                      <ul className="feature-list list-unstyled">
                        {selectedProject.bulletPoints.map((point: ReactNode, index:number) => (
                          <li key={index}>
                            <i className="bi bi-circle"></i> <span> {point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )} {/* End of Project Details pop-up*/}

    </div>
  )
}

export default Projects