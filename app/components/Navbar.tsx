import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 dark:bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Matias Dev{" "}
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link
            className="hover:text-white text-white/90"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/fernandez-amatias/"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/matiasaf"
          >
            <FaGithub />
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
