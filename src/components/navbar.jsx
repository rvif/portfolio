import { Home, FolderGit2, Github, Linkedin, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar({ theme, setTheme, scrollToSection }) {
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 w-full px-4 py-4 z-50">
      <nav className="mx-auto max-w-2xl rounded-full border bg-background/95 p-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between px-4">
          <div className="flex lg:flex-1">
            <a
              href="#"
              className="font-mono text-2xl font-semibold tracking-tighter hover:text-primary transition-colors"
            >
              rvif
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("home")}
              className="rounded-full p-2 hover:bg-muted transition-colors"
            >
              <Home className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="rounded-full p-2 hover:bg-muted transition-colors"
            >
              <FolderGit2 className="h-5 w-5" />
            </button>
            <a
              href="https://github.com/rvif"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 hover:bg-muted transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ravijeet-sharma-9a75a2230/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 hover:bg-muted transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <button
              onClick={toggleTheme}
              className={cn(
                "relative rounded-full w-14 h-7 transition-colors duration-300",
                isDark ? "bg-slate-700" : "bg-slate-200"
              )}
            >
              <div
                className={cn(
                  "absolute top-1 left-1 transform transition-transform duration-300",
                  "w-5 h-5 rounded-full flex items-center justify-center",
                  isDark
                    ? "translate-x-7 bg-slate-900"
                    : "translate-x-0 bg-white"
                )}
              >
                {isDark ? (
                  <Moon className="h-3 w-3 text-white" />
                ) : (
                  <Sun className="h-3 w-3 text-yellow-500" />
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
