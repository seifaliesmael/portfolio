import { useState } from 'react'
import NavButton from "./NavButton"
import {appData} from "../data/appData";

interface Props {
    onNavTrigger: (page:string) => void;
    current: string;
}

const Navbar = ({onNavTrigger, current}: Props) => {

    const Pages = ["Home", "Projects", "Experience", "Education"]
    // For mobile navigation bar
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
        document.body.classList.toggle('mobile-nav-active');
    }

    const closeMobileNav = () => {
        setMobileNavOpen(false);
        document.body.classList.remove('mobile-nav-active');
    }

    const handleNavClick = (page:string) => {
        onNavTrigger(page);
        closeMobileNav();
    }

    return (
    <header id="header" className="header d-flex align-items-center light-background sticky-top">
        <div className="container position-relative d-flex align-items-center justify-content-between">
            <nav id="navmenu" className="navmenu">
                <ul>
                    {Pages.map((page:string) => 
                    <NavButton
                        name={page}
                        page={page}
                        isActive={current == page}
                        onTriggerPage={handleNavClick}>
                    </NavButton>)}
                </ul>
            <i 
              className={`mobile-nav-toggle d-xl-none bi ${mobileNavOpen ? 'bi-x' : 'bi-list'}`}
              onClick={toggleMobileNav}
              style={{ cursor: "pointer" }}
            ></i>
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