// import React from 'react'
import NavButton from "./NavButton"
import {appData} from "../data/appData";

interface Props {
    onNavTrigger: (page:string) => void;
    current: string;
}

const Navbar = ({onNavTrigger, current}: Props) => {
  return (
    <header id="header" className="header d-flex align-items-center light-background sticky-top">
        <div className="container position-relative d-flex align-items-center justify-content-between">
            <nav id="navmenu" className="navmenu">
                <ul>
                    <NavButton 
                        name="Home"
                        page="Home"
                        isActive={current == "Home"}
                        onTriggerPage={onNavTrigger}
                    />
                    <NavButton 
                        name="Projects"
                        page="Projects"
                        isActive={current == "Projects"}
                        onTriggerPage={onNavTrigger}
                    />
                    <NavButton 
                        name="Experience"
                        page="Experience"
                        isActive={current == "Experience"}
                        onTriggerPage={onNavTrigger}
                    />
                    <NavButton 
                        name="Education"
                        page="Education"
                        isActive={current == "Education"}
                        onTriggerPage={onNavTrigger}
                    />
                </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        {/* Socials */}
        <div className="header-social-links">
        <a href={appData.links.gitHub} className="twitter"><i className="bi bi-github"></i></a>
        <a href={appData.links.linkedIn} className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
    </div>
    </header>
  )
}

export default Navbar