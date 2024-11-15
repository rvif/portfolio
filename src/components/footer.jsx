import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { incrementCount } from "@/lib/counter";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visitCount, setVisitCount] = useState(null);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const initializeCounter = async () => {
      try {
        console.log("Initializing counter...");
        const response = await incrementCount();
        console.log("Counter response:", response);

        if (response && response.Count) {
          setVisitCount(response.Count);
        }
      } catch (error) {
        console.error("Error initializing counter:", error);
        setVisitCount(0);
      }
    };

    initializeCounter();
  }, []);

  // Format time in IST
  const timeString = currentTime.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-2xl lg:max-w-4xl px-4 py-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left side - Name and Links */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Ravijeet Sharma</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">Software Developer</span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/rvif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ravijeet-sharma-9a75a2230/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:ravijeetsharma180@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex flex-col items-center text-center md:items-end md:text-right gap-1 text-sm text-muted-foreground">
              <span>Mumbai, India</span>
              <span>{timeString} IST</span>
              <span>
                {visitCount !== null
                  ? `Total Visits: ${visitCount.toLocaleString()}`
                  : "Loading..."}
              </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2"
            >
              <span>Go to Top</span>
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Ravijeet Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
