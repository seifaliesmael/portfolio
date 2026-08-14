import type { JSX } from "react";
import { ProjectSection } from "./ProjectSection";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";
import AboutSection from "./AboutSection";

export type Section = {content:JSX.Element, title:string, navTitle?:string}

export const sections: Section[] = [
    {content:AboutSection, title:"About Me", navTitle:"aboutme"},
    {content:ProjectSection, title: "Projects"},
    {content:ExperienceSection, title: "Experience"},
    {content:EducationSection, title: "Education"}
]

// The anchor a section's links point at, matching the id on its <section>
export const sectionId = (section: Section): string => section.navTitle ?? section.title.toLowerCase()