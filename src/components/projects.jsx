import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Trimr URL Shortner",
    description:
      "A URL shortening app built with Vite, React, Supabase, and Shadcn UI offers custom URLs, QR code generation, and click analytics with geolocation, providing a streamlined way to manage and track shortened links.",
    image: "/project1.png",
    codeUrl: "https://github.com/rvif/url-shortner",
    previewUrl: "https://trimr-alpha.vercel.app/",
  },
  {
    title: "Leave Master",
    description:
      "A leave management system built with Next.js, TypeScript, and PostgreSQL. Features include user authentication, leave request management, event calendar integration, and detailed analytics.",
    image: "/project2.png",
    codeUrl: "https://github.com/rvif/leave-master",
    previewUrl: "https://leave-master.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full pt-4 pb-16">
      <div className="mx-auto max-w-2xl lg:max-w-4xl px-4">
        <div className="lg:pl-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-medium tracking-tight mb-12"
          >
            projects i have worked on
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="group relative bg-card rounded-lg overflow-hidden border shadow-sm"
            >
              {/* Image container */}
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="inline-flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </motion.a>
                  <motion.a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="inline-flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Preview
                    </Button>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
