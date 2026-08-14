import type { JSX } from "react";
import { experiences, experienceGroups, type Experience } from "../data/experiences";

const displayExperience = (experience: Experience): JSX.Element => (
    <li key={experience.id} className="relative border-l border-slate-200 pb-10 pl-8 last:border-transparent last:pb-0 dark:border-slate-800 dark:last:border-transparent">

        {/* Timeline marker, centred on the rail */}
        <span className="absolute top-1.5 -left-1.5 h-3 w-3 rounded-full bg-cyan-600 ring-4 ring-white dark:bg-cyan-500 dark:ring-slate-950" />

        <div className="flex flex-col gap-3">

            {/* Role + period */}
            <div className="flex flex-row flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100"> {experience.role} </h4>
                <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"> {experience.period} </span>
            </div>

            {/* Organisation + tech */}
            <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-400"> {experience.organisation} </p>
                {experience.skills
                ? <p className="text-sm italic text-slate-500 dark:text-slate-400"> {experience.skills} </p>
                : null}
            </div>

            {/* Bullet points */}
            <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-slate-600 marker:text-cyan-500 dark:text-slate-400 dark:marker:text-cyan-400">
                {experience.bulletPoints.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}> {bullet} </li>
                ))}
            </ul>

        </div>
    </li>
)

const displayGroup = (group: string): JSX.Element => (
    <div key={group} className="flex flex-col gap-6">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500"> {group} </h3>
        <ul className="flex flex-col">
            {experiences
                .filter(experience => experience.group === group)
                .map(displayExperience)}
        </ul>
    </div>
)


export const ExperienceSection: JSX.Element =
<section id="experience" className="mb-8">
    {/* Section header */}
    <div className="mb-10 flex flex-col items-center gap-3">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100"> Experience </h2>
    </div>

    <div className="mx-auto flex max-w-6xl flex-col gap-12">
        {experienceGroups.map(displayGroup)}
    </div>
</section>
