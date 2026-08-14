import profile from "../data/profile.json";
import { convertToRichText } from "../data/richText";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const linkStyle = "flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"

const AboutSection = (
<section id="aboutme" className="flex flex-col items-center gap-4 border-b border-slate-200 px-5 py-20 text-center dark:border-slate-800">

    <p className="text-xs font-semibold tracking-widest text-cyan-700 uppercase dark:text-cyan-400"> Portfolio </p>

    <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100"> {profile.name} </h1>

    <p className="max-w-3xl text-lg leading-relaxed text-slate-500 dark:text-slate-400"> {profile.tagline} </p>

    <p className="max-w-3xl text-lg leading-relaxed text-slate-500 dark:text-slate-400"> {convertToRichText(profile.openTo)} </p>

    <div className="mt-4 flex flex-row flex-wrap justify-center gap-3">
        <a href={profile.links.gitHub} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className={linkStyle}>
            <FaGithub className="h-5 w-5" />
        </a>
        <a href={profile.links.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className={linkStyle}>
            <FaLinkedin className="h-5 w-5" />
        </a>
        {profile.links.leetCode
        ? <a href={profile.links.leetCode} target="_blank" rel="noreferrer" aria-label="LeetCode" title="LeetCode" className={linkStyle}>
            <SiLeetcode className="h-5 w-5" />
          </a>
        : null}
        <a href={`mailto:${profile.links.email}`} aria-label="Email" title="Email" className={linkStyle}>
            <FaEnvelope className="h-5 w-5" />
        </a>
    </div>

</section>);

export default AboutSection;
