import { useState, type JSX } from "react";
import { projects, type Project } from "../data/projects";

// Split projects into two columns
// Even indexes on the left column, Odd indexes on the right
const evenProjects = projects.filter((_, index) => index % 2 === 0)
const oddProjects = projects.filter((_, index) => index % 2 === 1)

const ProjectCard = ({ project }: { project: Project }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)

    const imageCount = project.images?.length ?? 0

    // Collapsing a card puts its gallery back to the first image
    const toggle = () => {
        setIsOpen(open => !open)
        setImageIndex(0)
    }

    const previousImage = () => setImageIndex(current => (current - 1 + imageCount) % imageCount)
    const nextImage = () => setImageIndex(current => (current + 1) % imageCount)

    return (
    <div
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onClick={toggle}
        className="flex w-150 cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:shadow-xl dark:hover:shadow-slate-950"
    >

        {/* min-h keeps every collapsed card the same height; justify-between pins the tags to the bottom */}
        <div className="flex min-h-45 flex-col justify-between gap-4 p-6">

            {/* Title + links */}
            <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                    <p className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100"> {project.title} </p>
                    <p className="text-sm italic text-slate-500 dark:text-slate-400"> {project.skills} </p>
                </div>

                {/* Links must not toggle the card they sit inside */}
                <div className="flex shrink-0 flex-row items-center gap-2" onClick={event => event.stopPropagation()}>
                    {project.liveUrl
                    ? <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-cyan-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-cyan-500"
                      >
                        Live ↗
                      </a>
                    : null}
                    {project.repo
                    ? <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-slate-800 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
                      >
                        Code ↗
                      </a>
                    : null}
                </div>
            </div>

            {/* Expanding detail: collapsed to zero height until the card is clicked open */}
            <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="flex min-h-0 flex-col gap-4 overflow-hidden">

                    {/* Project Image gallery */}
                    {project.images
                    ? <div className="flex flex-col gap-2">
                        <img
                            className="aspect-video w-full rounded-lg border border-slate-200 bg-slate-100 object-contain dark:border-slate-800 dark:bg-slate-800"
                            src={project.images[imageIndex]}
                            alt={`${project.title} screenshot ${imageIndex + 1}`}
                        />

                        {/* Gallery controls must not toggle the card they sit inside */}
                        {imageCount > 1
                        ? <div className="flex flex-row items-center justify-center gap-4" onClick={event => event.stopPropagation()}>
                            <button
                                type="button"
                                onClick={previousImage}
                                aria-label="Previous image"
                                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                            >
                                ‹
                            </button>
                            <span className="text-xs tabular-nums text-slate-500 dark:text-slate-400"> {imageIndex + 1} / {imageCount} </span>
                            <button
                                type="button"
                                onClick={nextImage}
                                aria-label="Next image"
                                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                            >
                                ›
                            </button>
                          </div>
                        : null}
                      </div>
                    : null
                    }

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400"> {project.description} </p>

                    {/* Bullet points */}
                    <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-slate-700 marker:text-cyan-500 dark:text-slate-300 dark:marker:text-cyan-400">
                        {project.bulletPoints.map((bullet, bulletIndex) => (
                            <li key={bulletIndex}> {bullet} </li>
                        ))}
                    </ul>

                    {/* Collaborators */}
                    {project.collaborators
                    ? <div className="flex flex-col gap-2 border-t border-slate-200 pt-4 dark:border-slate-800">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500"> Collaborators </p>
                        <div className="flex flex-col gap-1">
                            {project.collaborators.map((person, personIndex) => (
                                <span key={personIndex} className="text-sm text-slate-600 dark:text-slate-400"> {person} </span>
                            ))}
                        </div>
                      </div>
                    : null}

                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-row flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-800 ring-1 ring-cyan-200 ring-inset dark:bg-cyan-950 dark:text-cyan-300 dark:ring-cyan-900"> {tag} </span>
                ))}
            </div>

        </div>
    </div>
    )
}

const displayProject = (project:Project, index:number): JSX.Element => (
    <ProjectCard key={index} project={project} />
)


export const ProjectSection: JSX.Element =
<section id="projects">
    {/* Section header */}
    <div className="mb-10 flex flex-col items-center gap-3">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100"> Projects </h2>
        <p className="max-w-xl text-center text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            Some of my notable jam projects over the years. <br />
            <span className="italic"> Click any card to expand </span>
        </p>
    </div>

    <div className="flex flex-1 flex-row justify-center gap-4">
        {/* Left Column */}
        <div className="flex flex-col items-center gap-2">
            {evenProjects.map(displayProject)}
        </div>
        {/* Right Column */}
        <div className="flex flex-col items-center gap-2">
            {oddProjects.map(displayProject)}
        </div>

    </div>
</section>
