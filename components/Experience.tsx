import TracingBeam from "@/components/aceternity/TracingBeam";
import ScrollReveal from "@/components/custom/ScrollReveal";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  StarsCard,
} from "./ui/card";
import SectionWrapper from "./custom/SectionWrapper";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Intern",
    company: "Dell Technologies",
    period: "Aug 2022 - Jan 2023",
    description:
      "In my role, I spearheaded the update and development of an internal portal utilized by 133,000 Dell employees globally. This involved a comprehensive redesign to align with the latest design standards, significantly enhancing user experience. Recognizing the need for scalability, I devised a strategic plan to accommodate the expanding product catalog, culminating in the creation and implementation of a robust content management system (CMS) for the portal. This initiative streamlined content maintenance processes for product managers, resulting in a remarkable 70% increase in efficiency.",
    skills: [
      "Next.js",
      "AJAX",
      "Web Design",
      "Agile Methodologies",
      "GitLab",
      "Figma",
      "Tailwind CSS",
      "ASP.NET",
      "MVC",
      "Bootstrap",
      "SQL",
      "HTML",
      "JavaScript",
      "jQuery",
      "React.js",
      "Typescript"
    ],
  },
  {
    title: "Frontend Developer",
    company: "Revo Global",
    period: "Feb 2023 - Mar 2024",
    description:
      "I directed a dynamic team of 3, crafting captivating web and mobile apps along with a compelling landing site, all with a focus on user engagement. Spearheading frontend development, I upheld industry best practices to ensure stellar user experience and performance. Leveraging a no-code solution, we swiftly deployed the company's landing site, maintaining a competitive edge in the industry. I facilitated communication with upper management, securing operational expenditures to boost team productivity. Thorough code reviews were conducted to uphold top-tier code quality and prevent tech debt.",
    skills: [
      "Web Design",
      "Agile Methodologies",
      "Code Review",
      "Unit Testing",
      "Figma",
      "Jira",
      "Webflow",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "SQL",
      "Git",
    ],
  },
  {
    title: "Full Stack - FrontEnd & BackEnd Developer",
    company: "Dell Technologies",
    period: "Mar 2024 - present",
    description:
      "Since I got a job at Hoesang, I have been training both frontend and backend technologies, and I am currently maintaining the server that is under heavy load by many users to ensure that it operates normally, and I am also in charge of carrying out large and small projects that are proposed. I have developed 70% of the server, and I am currently in charge of and responsible for the periodic updates of the frontend.",
    skills: [
      "Next.js",
      "ASP.NET",
      "Playwright",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "Django",
      "Firebase",
      "Parse",
      "Backendless"
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper>
      <TracingBeam>
        <h2 className="mb-40 text-5xl font-bold tracking-tight text-center text-primary">
          Experience
        </h2>

        <div className="flex flex-col gap-20" id="experience">
          {experiences.map((experience, index) => (
            <ExperienceComponent experience={experience} key={index} />
          ))}
        </div>
      </TracingBeam>
    </SectionWrapper>
  );
}

function ExperienceComponent({ experience }: { experience: Experience }) {
  return (
    <StarsCard>
      <div className="flex flex-col md:grid md:grid-cols-5 md:gap-4">
        <CardHeader className={cn("pb-0 md:col-span-2 md:pr-0")}>
          <ScrollReveal x={-20} duration="1000ms" threshold={0.75}>
            <CardTitle className={cn("text-xl")}>{experience.title}</CardTitle>
            <CardDescription>
              {experience.company}
              <br />
              {experience.period}
            </CardDescription>
          </ScrollReveal>
        </CardHeader>
        <CardContent className={cn("pt-6 pb-0 md:pl-0 md:col-span-3")}>
          <ScrollReveal y={-20} duration="1000ms" threshold={0.75}>
            <p>{experience.description}</p>
          </ScrollReveal>
        </CardContent>
      </div>
      <CardFooter className={cn("pt-6 flex gap-2 flex-wrap")}>
        {experience.skills.map((skill, index) => (
          <ScrollReveal x={20} duration="1000ms" threshold={0.75} key={index}>
            <Badge>{skill}</Badge>
          </ScrollReveal>
        ))}
      </CardFooter>
    </StarsCard>
  );
}
