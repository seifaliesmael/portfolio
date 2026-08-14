import Navbar from "./components/Navbar";
import { sections } from "./sections/sections";

function App() {
    return (
      <div>
        <Navbar />
        <div className="p-5 pt-16 flex flex-col gap-10">
          {sections.map(section => section.content)}
        </div>
      </div>
    );
}

export default App;