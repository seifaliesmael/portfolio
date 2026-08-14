import type { JSX } from "react";
import { sections, sectionId } from "../sections/sections";

const buttonStyle = "rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-cyan-600 hover:text-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-cyan-400 dark:hover:text-cyan-400"

const SectionLinks = ({ exclude }: { exclude?: string }): JSX.Element => (
    <nav aria-label="Jump to section" className="flex flex-row flex-wrap justify-center gap-3">
        {sections
            .filter((section) => sectionId(section) !== exclude)
            .map((section) => (
                <a key={section.title} href={`#${sectionId(section)}`} className={buttonStyle}>
                    {section.title}
                </a>
            ))}
    </nav>
);

export default SectionLinks
