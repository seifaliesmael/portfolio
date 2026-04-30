import type { ReactNode } from 'react';
interface AppData {
    links: {
        linkedIn: string,
        gitHub: string
    }
    contact: {
        email: string
    }
    projects:Project[]
}

export interface Project {
    id: number,
    title:string,
    skills: string,
    description:string,
    bulletPoints: ReactNode[],
    tags: string[],
    repo: string | undefined,
    images: string[] | undefined
}

export const appData: AppData = {
    links: {
        linkedIn: "https://www.linkedin.com/in/seifaliesmael/",
        gitHub: "https://github.com/seifaliesmael"
    },
    contact : {
        email: "seifali.esmael@gmail.com"
    },
    projects: [
        {
            id:1,
            title: "Validit",
            skills:"Python Flask, SQLAlchemy (SQLite 3)",
            description:`Validit was a platform built by me and three teammates during the Warwick Hackathon (WHACK) 2025. 
            In response to Brevan Howard's prompt \"Create something that helps understand information accuracy.\", we developed a platform that aggregates news articles and runs a multi-layer algorithm to analyse
            the validity and accuracy of the article. `,
            bulletPoints: [
                <>Built a credible news delivery platform using <strong>Flask</strong> to classify <strong>100+ articles</strong> weekly across 10 investment sectors</>,
                <>Integrated <strong>REST APIs</strong> such as OpenAlex, Semantic Scholar and ZeroGPT to analyse article credibility</>,
                <>Implemented sentiment analysis using <strong>TextBlob/vaderSentiment</strong> and automatic summaries via the <strong>Gemini API</strong></>,
                <>Collaborated in a team of 4 using <strong>GitHub</strong> for concurrent contributions to the codebase and merge conflict resolution</>
            ],
            tags: ["Data Analysis", "Semantic Analysis"],
            repo:"https://github.com/seifaliesmael/whack-25-SMTP",
            images: ["/assets/img/projects/validit/validit1.jpg", "/assets/img/projects/validit/validit2.jpg", "/assets/img/projects/validit/validit3.jpg"]
        },
        {
            id:2,
            title: "Property Management Platform",
            skills:".NET MVC, C#, Transact-SQL",
            description:"",
            bulletPoints: [
                <>Used the <strong>.NET MVC Framework</strong> using <strong>credential-based authentication</strong> to dynamically generate views for different user groups and manage permissions and functionality in a full-stack application.</>,
                <>Securely linked a <strong>MySQL database</strong> via an ORM to translate object-oriented data into database records</>,
                <>Maintained <strong>version control</strong> and transparency throughout the project using GitHub</>,
            ],
            tags: ["MVC", "Database Management"],
            repo:undefined,
            images: undefined
        },
        {
            id:3,
            title: "Wave-Based Arena Game",
            skills:"Unreal Engine, C++",
            description:"",
            bulletPoints: [
                <>Designed, developed and built a videogame from scratch using <strong>Unreal Engine and C++</strong></>,
                <>Used the <strong>PhysX engine</strong> to accurately model and reflect realistic movement and interactions</>,
                <>Adapted the <strong>A* path-finding algorithm</strong> to dynamically vary difficulty of opponents for the player</>,
            ],
            tags: ["MVC", "Database Management"],
            repo:undefined,
            images: undefined
        },
    ]
}