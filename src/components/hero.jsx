import { Mail, Download, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { InfiniteCarousel } from "./infinite-carousel";

export function Hero() {
  const [mailCopied, setMailCopied] = useState(false);
  const [downloadClicked, setDownloadClicked] = useState(false);

  const handleMailClick = async () => {
    try {
      await navigator.clipboard.writeText("ravijeetsharma180@gmail.com");
      setMailCopied(true);
      setTimeout(() => setMailCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleDownload = () => {
    setDownloadClicked(true);
    const link = document.createElement("a");
    link.href = "/resume_rvif.pdf";
    link.download = "resume_rvif.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloadClicked(false), 1000);
  };

  return (
    <main id="home">
      <div className="min-h-screen">
        <div className="pt-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-24 items-start">
            {/* Left Column - Introduction */}
            <div className="space-y-8 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Hi, I'm <span className="text-primary">Ravijeet Sharma</span> 👋
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate{" "}
                <span className="font-semibold">Computer Science</span> student
                with a keen interest in
                <span className="italic"> web development</span>. Proficient in
                modern technologies like
                <span className="font-semibold"> React</span>,{" "}
                <span className="font-semibold">Node.js</span>, and
                <span className="font-semibold"> TypeScript</span>, I'm actively
                seeking
                <span className="italic font-medium">
                  {" "}
                  internship opportunities
                </span>{" "}
                to apply my skills in a real-world setting. My experience
                includes building{" "}
                <span className="font-medium">
                  responsive web applications
                </span>{" "}
                and
                <span className="font-medium">
                  {" "}
                  collaborating on team projects
                </span>
                .
              </p>
            </div>

            {/* Right Column - Contact Grid */}
            <div className="bg-muted/30 rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Let's Connect
              </h2>

              <div className="space-y-4">
                <button
                  onClick={handleMailClick}
                  className="w-full group relative"
                >
                  <div
                    className={cn(
                      "flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted",
                      mailCopied &&
                        !window.matchMedia("(min-width: 1100px)").matches &&
                        "border-green-500"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5" />
                      <span className="text-sm sm:text-base">
                        ravijeetsharma180@gmail.com
                      </span>
                    </div>
                    {window.matchMedia("(min-width: 1100px)").matches && (
                      <span
                        className={cn(
                          "transition-opacity duration-300",
                          mailCopied ? "opacity-100" : "opacity-0"
                        )}
                      >
                        <Check className="h-5 w-5 text-green-500" />
                      </span>
                    )}
                  </div>
                </button>

                <button
                  onClick={handleDownload}
                  className="w-full group relative"
                >
                  <div
                    className={cn(
                      "flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted",
                      downloadClicked &&
                        !window.matchMedia("(min-width: 1100px)").matches &&
                        "border-green-500"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Download className="h-5 w-5" />
                      <span>Download Resume</span>
                    </div>
                    {window.matchMedia("(min-width: 1100px)").matches && (
                      <span
                        className={cn(
                          "transition-opacity duration-300",
                          downloadClicked ? "opacity-100" : "opacity-0"
                        )}
                      >
                        <Check className="h-5 w-5 text-green-500" />
                      </span>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <InfiniteCarousel />
        </div>
      </div>
    </main>
  );
}
