import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { Meteors } from "./aceternity/Metors";
import Image from "next/image";
import BackgroundBeams from "./aceternity/BackgroundBeams";
import StarCanvas from "./StarCanvas";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col md:grid md:grid-cols-2 md:justify-center md:items-center min-h-[80vh] gap-16 antialiased">
      <div className="relative flex flex-col">
        {/* <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary overflow-hidden inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.snug))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.none))] lg:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))]">
          <ul className="block text-left leading-tight [&_li]:block animate-text-slide-3">
            <li>Full Stack Developer</li>
            <li>ui/ux</li>
            <li>full-stack</li>
            <li aria-hidden="true">software engineer</li>
          </ul>
        </h1>
        <p className="mt-2 lg:text-lg">
          A full-stack developer whom just graduated first-class from the best
          school in Malaysia. Had a good run with hackathons, won some, lost
          some but definitely gained a lot. Best described as a quick learner
          and result driven type of person.
        </p> */}
        <div style={{ marginTop: "10vh" }}>
          <Card className={cn("w-full max-w-3xl")} id="setup">
            <CardHeader className="relative overflow-hidden">
              <CardTitle className="mb-6 text-5xl font-bold tracking-tight text-center text-primary">
                Front-End
              </CardTitle>
              <CardDescription className="text-center text-primary-foreground text-1xl">
                Next.js | React.js | Android | React Native | Typescript | Tailwind CSS | Flutter
              </CardDescription>
              <Meteors number={30} />
            </CardHeader>
            <CardContent className={cn("p-5")}>
              {/* {setupItems.map((setup, index) => (
                <SetupTableRow
                  key={index}
                  setup={setup}
                  index={index}
                  className={index == setupItems.length - 1 ? "rounded-b-xl" : ""}
                />
              ))} */}
              {"I specialize in React.js, Next.js, and React Native, crafting high-performance web and mobile apps. With expertise in HTML, CSS, JavaScript, TypeScript, Next.js, Firebase, and API integration, I build fast, scalable, and user-friendly solutions. Whether it's responsive web apps, cross-platform mobile development, or UI/UX optimization, I deliver top-notch results."}
            </CardContent>
          </Card>
          <div style={{ margin: 14 }} />
          <Card className={cn("w-full max-w-3xl")} id="setup">
            <CardHeader className="relative overflow-hidden">
              <CardTitle className="mb-6 text-5xl font-bold tracking-tight text-center text-primary">
                Back-End
              </CardTitle>
              <CardDescription className="text-center text-primary-foreground text-1xl">
                Node.js | Express.js | Django | MongoDB | MySQL | Firebase | Parse | Backendless
              </CardDescription>
              <Meteors number={30} />
            </CardHeader>
            <CardContent className={cn("p-5")}>
              {/* {setupItems.map((setup, index) => (
                <SetupTableRow
                  key={index}
                  setup={setup}
                  index={index}
                  className={index == setupItems.length - 1 ? "rounded-b-xl" : ""}
                />
              ))} */}
              Experienced back-end developer with expertise in Node.js, Express.js, and database management (MySQL, MongoDB). I specialize in developing RESTful APIs and mobile back-end solutions using Firebase and Backendless. With strong knowledge of cloud platforms (AWS, Heroku) and version control (Git), I ensure scalable and secure solutions.
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="relative flex flex-col flex-1 justify-center items-center">
        <div className="relative w-full max-w-xs h-96 rounded-[2rem] overflow-hidden z-10" style={{ marginTop: 70 }}>
          <Image
            className="object-contain"
            fill
            sizes="100vw"
            src="/logo.svg"
            alt="hero-image"
            priority
          ></Image>
        </div>
        <div style={{ fontSize: 30, marginTop: 10 }}>Full Stack Developer</div>
      </div>
      {/* <StarCanvas /> */}
      <BackgroundBeams className="z-0" />
    </div>
  );
}

export default Hero;
