import educationList from "./education-list.json";

export interface Education {
    id: number,
    qualification: string,
    institution: string,
    location: string,
    period: string,
    note?: string,
    highlights: string[],  // Emphasised chips (grades, headline results)
    achievements: string[] // Everything else
}

export const education: Education[] = educationList;
