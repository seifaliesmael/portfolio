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
    images: string[] | undefined,
    collaborators: string[] | undefined
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
            id:4,
            title: "Organise My Career (OMC)",
            skills: "Flutter, Dart, SQL",
            description:`Organise My Career (OMC) was the app my team and I built at HackLondon 2026. We pursued Knowunity's prompt of building an app to help people learn,
            and we decided to build something that students like us could benefit from. The app's back-end communicates with the Claude API to generate a road map for the user to
            get to their career goal. It gives them small steps to take daily to reach the next milestone in their journey, adapting with the user. `,
            bulletPoints: [
                <> <strong> Integrated the Claude API </strong> to dynamically generate milestones, events and tasks towards the user's career goal. </>,
                <> Effectively <strong> engineered prompts </strong> to minimise token usage and maximise useful output. </>,
                <> Built an attractive front-end using <strong> Flutter </strong> to create a lightweight, <strong> cross-platform application </strong></>,
                <> Built a powerful back-end with <strong> PHP endpoints </strong> and a <strong> MySQL Server </strong> for effective and efficient data management.</>
            ],
            tags: ["Hackathon Project", "Artificial Intelligence", "PHP"],
            repo: "https://github.com/Alistair58/hacklondon26",
            images: ["assets/img/projects/omc/omc1.jpg", "assets/img/projects/omc/omc2.jpg", "assets/img/projects/omc/omc3.jpg", "assets/img/projects/omc/omc4.jpg", "assets/img/projects/omc/omc5.jpg"],
            collaborators: ["Bhushan Balaji", "Charles Davis", "Alistair Hanlon"]
        },
        {
            id:3,
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
            tags: ["Hackathon Project", "Data Analysis", "Semantic Analysis"],
            repo:"https://github.com/seifaliesmael/whack-25-SMTP",
            images: ["assets/img/projects/validit/validit1.jpg", "assets/img/projects/validit/validit2.jpg", "assets/img/projects/validit/validit3.jpg"],
            collaborators: ["Muhammad Aayan Ali", "Charles Davis", "Tanvi Patnayukuni"]
        },
        {
            id:2,
            title: "Property Management Platform",
            skills:".NET MVC, C#, Transact-SQL",
            description:`This was the project I built for my IB Computer Science IA. I sought out a client - a real estate development company,
            and built them a web application with a management view and a client view. Through this app, the business could manage their assets and properties, including
            data about ownership, rent and contracts, and clients could view available properties and make deals on them.`,
            bulletPoints: [
                <>Used the <strong>.NET MVC Framework</strong> using <strong>credential-based authentication</strong> to dynamically generate views for different user groups and manage permissions and functionality in a full-stack application.</>,
                <>Securely linked a <strong>MySQL database</strong> via an ORM to translate object-oriented data into database records</>,
                <>Maintained <strong>version control</strong> and transparency throughout the project using GitHub</>,
            ],
            tags: ["MVC", "Database Management"],
            repo:undefined,
            images:  ["assets/img/projects/pmp/pmp1.png", "assets/img/projects/pmp/pmp2.png", "assets/img/projects/pmp/pmp3.png", "assets/img/projects/pmp/pmp4.png", "assets/img/projects/pmp/pmp5.png",],
            collaborators: undefined
        },
        {
            id:1,
            title: "Wave-Based Arena Game",
            skills:"Unreal Engine, C++",
            description:`This was my submission for the IB MYP (Middle-Years-Programme) Personal Project in 2022. As game development was a big interest of mine,
            I decided to make a game in Unreal Engine. I learned C++ and Unreal Engine's Blueprints System for it, and built a fully playable wave-based arena game.
            The principle of the game is simple: try to survive as many waves as possible, and the longer you last, the more rewards you get which you can then spend on
            more items and stronger weapons.`,
            bulletPoints: [
                <>Designed, developed and built a videogame from scratch using <strong>Unreal Engine and C++</strong></>,
                <>Used the <strong>PhysX engine</strong> to accurately model and reflect realistic movement and interactions</>,
                <>Adapted the <strong>A* path-finding algorithm</strong> to dynamically vary difficulty of opponents for the player</>,
            ],
            tags: ["Game Development", "Unreal Engine", "C++"],
            repo:"https://github.com/seifaliesmael/PersonalProjectUE",
            images: ["assets/img/projects/myp5/myp51.png", "assets/img/projects/myp5/myp52.png", "assets/img/projects/myp5/myp53.png", "assets/img/projects/myp5/myp54.png"],
            collaborators: undefined
        },
    ]
}