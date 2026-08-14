import type { ReactNode } from 'react';
interface AppData {
    links: {
        linkedIn: string,
        gitHub: string
    }
    contact: {
        email: string
    }
    skills:Skills
    projects:Project[]
}

export interface Skills {
    proficientLangs:string[]
    basicLangs:string[]
    frameworks:string[]
}

export interface Project {
    id: number,
    title:string,
    skills: string,
    description:string,
    bulletPoints: ReactNode[],
    tags: string[],
    repo: string | undefined,
    liveUrl: string | undefined,
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
    skills : {
        proficientLangs: ["C#", "Java", "TypeScript/JavaScript", "Python"],
        basicLangs: ["SQL", "Dart", "Haskell"],
        frameworks: [ ".NET", "Flutter", "React", "React Native (Expo)"]
    },
    projects: [
        {
            id: 6,
            title: "MesoPal",
            skills: "TypeScript, C#, React Native (Expo), ASP.NET Core, EF Core, SQL Server",
            description: `MesoPal is a cross-platform (Mobile, Web) workout tracker. It uses a React Native/Expo front-end to communicate with a
            .NET Backend shared by both web and mobile clients. The project is deployed using Azure and Vercel with a Github Actions CD pipeline.`,
            bulletPoints: [
                <>Built a workout tracker with <strong>Expo/React Native</strong> serving web and mobile clients on a shared <strong>.NET Core API</strong>.</>,
                <>Implemented <strong>automatic re-deployments</strong> for clients and the .NET server using Vercel, Azure and GitHub Actions.</>,
                <>Authenticated both clients from a reactive Identity system: HttpOnly cookies on web, encrypted tokens on mobile.</>
            ],
            tags: ["Personal Project", "Full-Stack", "C#"],
            repo: "https://github.com/seifaliesmael/better-lifting-app",
            liveUrl: "https://mesopal.vercel.app",
            images: ["assets/img/projects/mesopal/mesopal1.png", "assets/img/projects/mesopal/mesopal2.png"],
            collaborators: undefined
        },

        {
            id: 5,
            title: "No Time to Live",
            skills: "Unity, C#",
            description:`This project was my submission for the Great Warwick Game Jam 2026. With the prompt "No Time to Explain", 
            my partner and I made an infinite side-scroller with a simple premise: You age backwards. Defeating enemies and bosses,
            as well as picking up items, gives you some of your lifespan back, and the aim is to last as long as possible.`,
            bulletPoints: [
                <>Developed a 2D side-scroller where the player ages backwards from 80 and dies if they hit 0: Linking health to age.</>,
                <>Programmed a boss system with aggro-triggered pursuit and randomised, periodic multi-point projectile volleys.</>,
                <>Designed common shared interfaces for damage and interaction to manage inter-entity events and dynamics.</>,
                <>Used <strong>Unity Version Control</strong> to independently build and merge features and manage multi-platform builds.</>
            ],
            tags: ["Game Jam Project", "Game Development", "Unity", "C#"],
            repo: "https://github.com/charles-h-davis/warwickGameJam2026",
            liveUrl: "https://charlesdavis.itch.io/no-time-to-live",
            images: ["assets/img/projects/gamejam/gamejam1.png", "assets/img/projects/gamejam/gamejam2.png", "assets/img/projects/gamejam/gamejam3.png", "assets/img/projects/gamejam/gamejam4.png"],
            collaborators: ["Charles Davis"]
        },
        {
            id:4,
            title: "Organise My Career (OMC)",
            skills: "Flutter, Dart, Claude API, SQL",
            description:`Organise My Career (OMC) was the app my team and I built at HackLondon 2026. We pursued Knowunity's prompt of building an app to help people learn,
            and we decided to build something that students like us could benefit from. The app's back-end communicates with the Claude API to generate a road map for the user to
            get to their career goal. It gives them small steps to take daily to reach the next milestone in their journey, adapting with the user. `,
            bulletPoints: [
                <>Developed a career planning application that generates milestones and goals for users, powered by the Claude API.</>,
                <>Engineered effective prompt systems to integrate caching and modularity to minimise token usage and redundancy.</>,
                <>Designed a cross-platform interface using a Flutter frontend and a PHP backend for fast and secure database actions.</>,
            ],
            tags: ["Hackathon Project", "AI Integration", "PHP"],
            repo: "https://github.com/Alistair58/hacklondon26",
            liveUrl: undefined,
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
                <>Collaborated using <strong>GitHub</strong> for concurrent codebase contributions and merge conflict resolution</>
            ],
            tags: ["Hackathon Project", "Data Analysis", "Semantic Analysis"],
            repo:"https://github.com/seifaliesmael/whack-25-SMTP",
            liveUrl: undefined,
            images: ["assets/img/projects/validit/validit1.jpg", "assets/img/projects/validit/validit2.jpg", "assets/img/projects/validit/validit3.jpg"],
            collaborators: ["Muhammad Aayan Ali", "Charles Davis", "Tanvi Patnayukuni"]
        },
        {
            id:2,
            title: "Property Management Platform",
            skills:".NET MVC, C#, SQL Server",
            description:`This was the project I built for my IB Computer Science IA. I sought out a client - a real estate development company,
            and built them a web application with a management view and a client view. Through this app, the business could manage their assets and properties, including
            data about ownership, rent and contracts, and clients could view available properties and make deals on them.`,
            bulletPoints: [
                <>Built a property management web application for a real estate development company. </>,
                <>Implemented dynamically generated views and actions for clients and managers using <strong>.NET MVC</strong>.</>,
                <>Integrated a SQL Server database for concurrent access control and scalability.</>
            ],
            tags: ["MVC", "Database Management"],
            repo:undefined,
            liveUrl:undefined,
            images:  ["assets/img/projects/pmp/pmp1.png", "assets/img/projects/pmp/pmp2.png", "assets/img/projects/pmp/pmp3.png", "assets/img/projects/pmp/pmp4.png", "assets/img/projects/pmp/pmp5.png",],
            collaborators: undefined
        },
        // {
        //     id:1,
        //     title: "Wave-Based Arena Game",
        //     skills:"Unreal Engine, C++",
        //     description:`This was my submission for the IB MYP (Middle-Years-Programme) Personal Project in 2022. As game development was a big interest of mine,
        //     I decided to make a game in Unreal Engine. I learned C++ and Unreal Engine's Blueprints System for it, and built a fully playable wave-based arena game.
        //     The principle of the game is simple: try to survive as many waves as possible, and the longer you last, the more rewards you get which you can then spend on
        //     more items and stronger weapons.`,
        //     bulletPoints: [
        //         <>Designed, developed and built a videogame from scratch using <strong>Unreal Engine and C++</strong></>,
        //         <>Used the <strong>PhysX engine</strong> to accurately model and reflect realistic movement and interactions</>,
        //         <>Adapted the <strong>A* path-finding algorithm</strong> to dynamically vary difficulty of opponents for the player</>,
        //     ],
        //     tags: ["Game Development", "Unreal Engine", "C++"],
        //     repo:"https://github.com/seifaliesmael/PersonalProjectUE",
        //     liveUrl: undefined,
        //     images: ["assets/img/projects/myp5/myp51.png", "assets/img/projects/myp5/myp52.png", "assets/img/projects/myp5/myp53.png", "assets/img/projects/myp5/myp54.png"],
        //     collaborators: undefined
        // },
    ]
}