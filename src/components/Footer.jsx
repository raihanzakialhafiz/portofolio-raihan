import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";

const Footer = () => {
  const items = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: "About Me", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={18} />, label: "Project", onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10">
      {/* Divider line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-8" />

      {/* Flex container */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">

        {/* Brand — match navbar */}
        <a
          href="#home"
          className="text-2xl font-bold order-1 md:order-none hover:text-cyan-400 transition-colors duration-300"
        >
          Raihan<span className="text-cyan-400">.</span>
        </a>

        {/* Social icons */}
        <div className="flex gap-3 order-2 md:order-none">
          <a
            href="https://github.com/raihanzaki03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900/60 border border-zinc-700/50 text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-800 hover:-translate-y-0.5 transition-all duration-300"
          >
            <i className="ri-github-fill text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/raihanzaki12/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900/60 border border-zinc-700/50 text-zinc-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            <i className="ri-linkedin-fill text-xl"></i>
          </a>
        </div>

        {/* Dock */}
        <div className="order-3 md:order-none mt-15 md:mt-0 md:mb-0">
          <Dock
            items={items}
            panelHeight={30}
            baseItemSize={60}
            magnification={100}
          />
        </div>

      </div>

      {/* Copyright */}
      <p className="mt-6 text-xs text-zinc-600 text-center">
        © {new Date().getFullYear()} Raihan Zaki Alhafiz. Built with React &amp; Tailwind CSS.
      </p>
    </div>
  );
};

export default Footer;
