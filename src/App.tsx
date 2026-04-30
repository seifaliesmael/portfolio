import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";

function App() {
  const [currPage, setCurrPage] = useState('Home');

  const renderMain = () => {
    switch(currPage) {
      case 'Home':
        return <Home onNavTrigger={setCurrPage}/>
      case 'Projects':
        return <Projects />
      case 'Experience':
        return <Experience />
      case 'Education':
        return <Education />
      default:
        return <Home onNavTrigger={setCurrPage}/>
    }
  }

    return (
      <div>
        <Navbar onNavTrigger={setCurrPage} current={currPage}/>
        {renderMain()}

        {/* Button to scroll back to the top */}
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </div>
    );
}

export default App;