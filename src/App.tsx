import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import { sections } from "./sections/sections";

function App() {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <Navbar />
        <ThemeToggle />
        <div className="p-5 pt-16 flex flex-col gap-10">
          {sections.map(section => section.content)}
        </div>
      </div>
    );
}

export default App;