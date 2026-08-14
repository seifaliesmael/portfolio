import { sections } from "../sections/sections";

const Navbar = () => (
<nav
    aria-label="Page sections"
    className="group fixed top-1/2 left-0 z-50 -translate-y-1/2 rounded-r-xl border border-l-0 border-transparent py-4 pr-4 pl-3 transition duration-200 hover:border-slate-200 hover:bg-white hover:shadow-lg focus-within:border-slate-200 focus-within:bg-white focus-within:shadow-lg dark:hover:border-slate-800 dark:hover:bg-slate-900 dark:focus-within:border-slate-800 dark:focus-within:bg-slate-900"
>
    <ul className="flex flex-col gap-4">
        {sections.map((section) => (
            <li key={section.title}>
                <a
                    href={`#${section.navTitle ? section.navTitle : section.title.toLowerCase()}`}
                    className="flex flex-row items-center gap-3 text-slate-400 transition-colors duration-200 hover:text-cyan-600 focus-visible:text-cyan-600 focus-visible:outline-none dark:text-slate-500 dark:hover:text-cyan-400 dark:focus-visible:text-cyan-400"
                >
                    {/* Outline dash: long while collapsed, short once the labels are showing */}
                    <span className="h-0.5 w-6 shrink-0 rounded-full bg-current transition-all duration-200 group-hover:w-3 group-focus-within:w-3" />

                    {/* Label expands from zero width to its natural width */}
                    <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-200 ease-out group-hover:grid-cols-[1fr] group-focus-within:grid-cols-[1fr]">
                        <span className="min-w-0 overflow-hidden text-sm font-medium whitespace-nowrap"> {section.title} </span>
                    </span>
                </a>
            </li>
        ))}
    </ul>
</nav>);

export default Navbar
