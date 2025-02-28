"use client";

import { useRef } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "./aceternity/Spotlight";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionWrapper from "./custom/SectionWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useIsVisible } from "@/hooks/useIsVisible";

interface Project {
  feature_cover: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  github: string | null;
  live: string | null;
}

const projects: Project[] = [
  {
    feature_cover: "/Team-Track-Dashboard.png",
    title: "Team-Track-Dashboard",
    subtitle: "Best Final Year Project Award",
    description:
      "Team Track is a custom-made textile team and product management dashboard designed to streamline operations, track team performance, and manage product workflows efficiently. Built with Next.js, Tailwind CSS, and TypeScript, this project provides a seamless UI for managing textile industry tasks with ease. ",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn-ui",
      "Supabase",
      "Solidity",
      "Hardhat",
      "Ethers.js",
      "Thirdweb",
    ],
    github: null,
    live: "https://team-track.vercel.app",
  },
  {
    feature_cover: "/E-Dev-Learning-Dashboard.png",
    title: "E-Dev-Learning",
    subtitle: "Dashboard",
    description:
      "A comprehensive guide to learning web development in Bangla, covering HTML, CSS, JavaScript, Node.js, MongoDB, Next.js, and more.",
    stack: [
      "Next.js",
      "React.js",
      "Redux",
      "Javascript",
      "Express.js",
      "Nest.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "Firebase"
    ],
    github: null,
    live: "https://development-js.web.app",
  },
  {
    feature_cover: "/ChatWex.png",
    title: "ChatWex",
    subtitle: "ChatWex",
    description:
      "Complete SaaS Chat Web app built using the latest Tech Stacks (Firebase DB, Firebase Extensions, Stripe, NextAuth, Zustand, Next.js, React JS, TypeScript, Tailwind CSS, Shadcn, and Zod).",
    stack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn-ui",
      "Firebase",
      "Stripe-Checkout",
      "Zod",
      "Next-auth"
    ],
    github: null,
    live: "https://chatwex.vercel.app",
  },
];

export default function Projects() {
  return (
    <SectionWrapper>
      <h2 className="mb-40 text-5xl font-bold tracking-tight text-center text-primary">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12" id="projects">
        <Spotlight fill="white" className="hidden lg:block" />
        {projects.map((project, index) => (
          <ShinyCard
            key={index}
            project={project}
            className={index == 0 ? "lg:col-span-12" : "lg:col-span-6"}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ShinyCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader
        className="p-0 relative overflow-clip space-y-0 rounded-t-xl"
        ref={ref}
      >
        <AspectRatio ratio={16 / 9}>
          <Image
            src={project.feature_cover}
            alt="Team-Track-Dashboard"
            fill
            sizes="100vw"
            className={cn(
              "scale-105 object-cover border-t border-white/[0.08] rounded-t-xl",
              isVisible ? "ease-in-out duration-1000 scale-100 delay-300" : ""
            )}
          />
        </AspectRatio>
        <div
          className={cn(
            "absolute bg-black border-t border-white/[0.08] rounded-t-xl w-full h-full opacity-60",
            isVisible
              ? "transition-opacity duration-1000 opacity-0 delay-300"
              : ""
          )}
        />
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-1.5">
            <h3 className="text-xl font-semibold leading-none tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
          <div className="flex">
            {project.live && (
              <Button variant="ghost" size={"icon"} asChild>
                <Link href={project.live} target="_blank">
                  <GlobeIcon className="w-6 h-6" />
                </Link>
              </Button>
            )}
            {project.github && (
              <Button variant="ghost" size={"icon"} asChild>
                <Link href={project.github} target="_blank">
                  <GitHubLogoIcon className="w-6 h-6" />
                </Link>
              </Button>
            )}
          </div>
        </div>
        <p className="text-card-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="flex gap-2 flex-wrap">
        {project.stack.map((stack, index) => (
          <Badge key={index}>{stack}</Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
