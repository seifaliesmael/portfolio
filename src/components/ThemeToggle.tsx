import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

// index.html has already set the class from localStorage / the OS setting,
// so the DOM is the source of truth for the starting value.
const startsDark = (): boolean => document.documentElement.classList.contains("dark")

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(startsDark)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark)
        document.documentElement.style.colorScheme = isDark ? "dark" : "light"
        localStorage.setItem("theme", isDark ? "dark" : "light")
    }, [isDark])

    const label = isDark ? "Switch to light mode" : "Switch to dark mode"

    return (
    <button
        type="button"
        onClick={() => setIsDark(dark => !dark)}
        aria-label={label}
        title={label}
        className="fixed top-5 right-5 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
    >
        {isDark
        ? <FaSun className="h-5 w-5" />
        : <FaMoon className="h-5 w-5" />}
    </button>)
}

export default ThemeToggle
