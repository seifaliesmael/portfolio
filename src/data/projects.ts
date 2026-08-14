import type { ReactNode } from "react";
import projectList from "./project-list.json";
import { convertToRichText } from "./richText";

export interface Project {
    id: number,
    title: string,
    skills: string,
    description: string,
    bulletPoints: ReactNode[],
    tags: string[],
    repo?: string,
    liveUrl?: string,
    images?: string[],
    collaborators?: string[]
}

export const projects: Project[] = projectList.map(
    (project) => ({
        ...project,
        bulletPoints: project.bulletPoints.map(
            (plainBullet) => convertToRichText(plainBullet)
        )
    })
);
