import { cn } from "@/lib/utils";

const skills = {
  row1: [
    {
      name: "Python",
      iconGray: "devicon-python-plain",
      iconColor: "devicon-python-plain colored",
    },
    {
      name: "JavaScript",
      iconGray: "devicon-javascript-plain",
      iconColor: "devicon-javascript-plain colored",
    },
    {
      name: "TypeScript",
      iconGray: "devicon-typescript-plain",
      iconColor: "devicon-typescript-plain colored",
    },
    {
      name: "C++",
      iconGray: "devicon-cplusplus-plain",
      iconColor: "devicon-cplusplus-plain colored",
    },
    {
      name: "SQL",
      iconGray: "devicon-postgresql-plain",
      iconColor: "devicon-postgresql-plain colored",
    },
  ],
  row2: [
    {
      name: "React",
      iconGray: "devicon-react-plain",
      iconColor: "devicon-react-plain colored",
    },
    {
      name: "Next.js",
      iconGray: "devicon-nextjs-plain",
      iconColor: "devicon-nextjs-plain colored",
    },
    {
      name: "HTML5",
      iconGray: "devicon-html5-plain",
      iconColor: "devicon-html5-plain colored",
    },
    {
      name: "CSS3",
      iconGray: "devicon-css3-plain",
      iconColor: "devicon-css3-plain colored",
    },
    {
      name: "Tailwind",
      iconGray: "devicon-tailwindcss-plain",
      iconColor: "devicon-tailwindcss-plain colored",
    },
    {
      name: "Material UI",
      iconGray: "devicon-materialui-plain",
      iconColor: "devicon-materialui-plain colored",
    },
  ],
  row3: [
    {
      name: "Node.js",
      iconGray: "devicon-nodejs-plain",
      iconColor: "devicon-nodejs-plain colored",
    },
    {
      name: "Express",
      iconGray: "devicon-express-original",
      iconColor: "devicon-express-original colored",
    },
    {
      name: "MongoDB",
      iconGray: "devicon-mongodb-plain",
      iconColor: "devicon-mongodb-plain colored",
    },
    {
      name: "PostgreSQL",
      iconGray: "devicon-postgresql-plain",
      iconColor: "devicon-postgresql-plain colored",
    },
    {
      name: "Prisma",
      iconGray: "devicon-prisma-plain",
      iconColor: "devicon-prisma-plain colored",
    },
  ],
  row4: [
    {
      name: "Vercel",
      iconGray: "devicon-vercel-plain",
      iconColor: "devicon-vercel-plain colored",
    },
    {
      name: "Netlify",
      iconGray: "devicon-netlify-plain",
      iconColor: "devicon-netlify-plain colored",
    },
    {
      name: "Supabase",
      iconGray: "devicon-supabase-plain",
      iconColor: "devicon-supabase-plain colored",
    },
    {
      name: "Git",
      iconGray: "devicon-git-plain",
      iconColor: "devicon-git-plain colored",
    },
    {
      name: "GitHub",
      iconGray: "devicon-github-original",
      iconColor: "devicon-github-original colored",
    },
  ],
};

function SkillIcon({ iconGray, iconColor }) {
  return (
    <div className="group px-8">
      <div className="relative">
        <i className={cn(iconGray, "text-4xl transition-all duration-300")} />
        <i
          className={cn(
            iconColor,
            "text-4xl transition-all duration-300",
            "opacity-0 group-hover:opacity-100",
            "absolute top-0 left-0"
          )}
        />
      </div>
    </div>
  );
}

export function InfiniteCarousel() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-2xl font-medium tracking-tight">
          skills & technologies i use
        </h2>
      </div>

      <div className="relative w-full" style={{ height: "320px" }}>
        <div className="flex flex-col gap-12 absolute inset-0">
          {/* Row 1 */}
          <div className="relative flex overflow-hidden h-16">
            <div className="flex animate-marquee whitespace-nowrap">
              {[
                ...skills.row1,
                ...skills.row1,
                ...skills.row1,
                ...skills.row1,
              ].map((skill, idx) => (
                <SkillIcon
                  key={idx}
                  iconGray={skill.iconGray}
                  iconColor={skill.iconColor}
                />
              ))}
            </div>
            <div
              aria-hidden="true"
              className="flex animate-marquee2 whitespace-nowrap absolute top-0"
            >
              {[
                ...skills.row1,
                ...skills.row1,
                ...skills.row1,
                ...skills.row1,
              ].map((skill, idx) => (
                <SkillIcon
                  key={idx}
                  iconGray={skill.iconGray}
                  iconColor={skill.iconColor}
                />
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative flex overflow-hidden h-16">
            <div className="flex animate-marquee-reverse whitespace-nowrap">
              {[
                ...skills.row2,
                ...skills.row2,
                ...skills.row2,
                ...skills.row2,
              ].map((skill, idx) => (
                <SkillIcon
                  key={idx}
                  iconGray={skill.iconGray}
                  iconColor={skill.iconColor}
                />
              ))}
            </div>
            <div
              aria-hidden="true"
              className="flex animate-marquee2-reverse whitespace-nowrap absolute top-0"
            >
              {[
                ...skills.row2,
                ...skills.row2,
                ...skills.row2,
                ...skills.row2,
              ].map((skill, idx) => (
                <SkillIcon
                  key={idx}
                  iconGray={skill.iconGray}
                  iconColor={skill.iconColor}
                />
              ))}
            </div>
          </div>

          {/* Row 3 */}
          <div className="relative flex overflow-hidden h-16">
            <div className="flex animate-marquee whitespace-nowrap">
              {[
                ...skills.row3,
                ...skills.row3,
                ...skills.row3,
                ...skills.row3,
              ].map((skill, idx) => (
                <SkillIcon
                  key={idx}
                  iconGray={skill.iconGray}
                  iconColor={skill.iconColor}
                />
              ))}
            </div>
            <div
              aria-hidden="true"
              className="flex animate-marquee2 whitespace-nowrap absolute top-0"
            >
              {[
                ...skills.row3,
                ...skills.row3,
                ...skills.row3,
                ...skills.row3,
              ].map((skill, idx) => (
                <SkillIcon
                  key={idx}
                  iconGray={skill.iconGray}
                  iconColor={skill.iconColor}
                />
              ))}
            </div>
          </div>

          {/* Row 4 */}
          <div className="relative flex overflow-hidden h-16">
            <div className="flex animate-marquee-reverse whitespace-nowrap">
              {[
                ...skills.row4,
                ...skills.row4,
                ...skills.row4,
                ...skills.row4,
              ].map((skill, idx) => (
                <SkillIcon
                  key={idx}
                  iconGray={skill.iconGray}
                  iconColor={skill.iconColor}
                />
              ))}
            </div>
            <div
              aria-hidden="true"
              className="flex animate-marquee2-reverse whitespace-nowrap absolute top-0"
            >
              {[
                ...skills.row4,
                ...skills.row4,
                ...skills.row4,
                ...skills.row4,
              ].map((skill, idx) => (
                <SkillIcon
                  key={idx}
                  iconGray={skill.iconGray}
                  iconColor={skill.iconColor}
                />
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
