import type { JSX } from "react";
import { education, type Education } from "../data/education";

const displayEducation = (entry: Education): JSX.Element => (
    <div key={entry.id} className="flex flex-col gap-4">

        {/* Qualification + period */}
        <div className="flex flex-col gap-2">
            <div className="flex flex-row flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900"> {entry.qualification} </h3>
                <div className="flex shrink-0 flex-col items-end">
                    <span className="text-sm font-medium text-slate-500"> {entry.period} </span>
                    {entry.note
                    ? <span className="text-xs italic text-slate-400"> {entry.note} </span>
                    : null}
                </div>
            </div>

            <p className="text-sm text-slate-500">
                <span className="font-semibold text-cyan-700"> {entry.institution} </span>
                <span className="text-slate-300"> · </span>
                <span className="italic"> {entry.location} </span>
            </p>
        </div>

        {/* Achievements, emphasised ones first */}
        <div className="flex flex-row flex-wrap gap-2 border-t border-slate-200 pt-4">
            {entry.highlights.map((highlight, highlightIndex) => (
                <span key={highlightIndex} className="rounded-full bg-cyan-600 px-3 py-1.5 text-sm font-semibold text-white"> {highlight} </span>
            ))}
            {entry.achievements.map((achievement, achievementIndex) => (
                <span key={achievementIndex} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"> {achievement} </span>
            ))}
        </div>

    </div>
)


export const EducationSection: JSX.Element =
<section id="education" className="mb-8">
    {/* Section header */}
    <div className="mb-10 flex flex-col items-center gap-3">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900"> Education </h2>
    </div>

    <div className="mx-auto flex max-w-6xl flex-col gap-12">
        {education.map(displayEducation)}
    </div>
</section>
