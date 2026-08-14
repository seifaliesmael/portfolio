import type { ReactNode } from "react";
import experienceList from "./experience-list.json";
import { convertToRichText } from "./richText";

export interface Experience {
    id: number,
    group: string,
    role: string,
    organisation: string,
    location: string,
    period: string,
    bulletPoints: ReactNode[]
}

export const experiences: Experience[] = experienceList.map(
    (experience) => ({
        ...experience,
        bulletPoints: experience.bulletPoints.map(
            (plainBullet) => convertToRichText(plainBullet)
        )
    })
);

// The distinct group names, in the order they first appear in the list
export const experienceGroups: string[] = [...new Set(experiences.map(experience => experience.group))]
