import type { JSX } from "react";
import { ProjectSection } from "./ProjectSection";
import { ExperienceSection } from "./ExperienceSection";
import { EducationSection } from "./EducationSection";
import AboutSection from "./AboutSection";

export const sections: {content:JSX.Element, title:string, navTitle?:string}[] = [
    {content:AboutSection, title:"About Me", navTitle:"aboutme"},
    {content:ProjectSection, title: "Projects"},
    {content:ExperienceSection, title: "Experience"},
    {content:EducationSection, title: "Education"}
]