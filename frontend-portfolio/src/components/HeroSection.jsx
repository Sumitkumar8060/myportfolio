// import { ArrowDown } from "lucide-react";
// import { personal } from "@/data/personal";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center px-4"
//     >
//       <div className="container max-w-5xl mx-auto z-10">
//         <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

//           {personal.profileImage && (
//             <div className="mx-auto mt-16 mb-2 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/20 opacity-0 animate-fade-in">
//               <img
//                 src={personal.profileImage}
//                 alt={personal.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           )}

//           <div className="text-center md:text-left space-y-6 max-w-2xl"></div>

//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
//             <span className="text-primary opacity-0 animate-fade-in-delay-1">
//               {" "}
//               {personal.firstName}
//             </span>
//             <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
//               {" "}
//               {personal.lastName}
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl font-medium text-primary opacity-0 animate-fade-in-delay-2">
//             {personal.role}
//           </p>

//           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
//             {personal.heroIntro}
//           </p>

//           <p className="text-sm md:text-base font-medium text-foreground/70 opacity-0 animate-fade-in-delay-3">
//             {personal.tagline}
//           </p>

//           <div className="pt-4 opacity-0 animate-fade-in-delay-4">
//             <a href="#projects" className="cosmic-button">
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>
//     </section>
//   );
// };

import { ArrowDown } from "lucide-react";
import { personal } from "@/data/personal";
import { Github, Linkedin, Mail, Code2, Send } from "lucide-react";

export const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: personal.social.github, label: "GitHub" },
    { icon: Linkedin, href: personal.social.linkedin, label: "LinkedIn" },
    { icon: Code2, href: personal.social.leetcode, label: "LeetCode" },
  ].filter((link) => link.href && link.href !== "#");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto z-10">
        {/* Photo + Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Profile Photo */}
          {personal.profileImage && (
            <div className="shrink-0 mt-16 md:mt-0 w-32 h-32 md:w-62 md:h-62 rounded-full overflow-hidden ring-4 ring-primary/20 opacity-0 animate-fade-in">
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Hero Details */}
          <div className="text-center md:text-left space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>

              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                {personal.firstName}
              </span>

              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                {personal.lastName}
              </span>
            </h1>

            <p className="text-lg md:text-xl font-medium text-primary opacity-0 animate-fade-in-delay-2">
              {personal.role}
            </p>

            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
              {personal.heroIntro}
            </p>

            <p className="text-sm md:text-base font-medium text-foreground/70 opacity-0 animate-fade-in-delay-3">
              {personal.tagline}
            </p>

            <div className="pt-4 flex gap-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>

              <div className="flex space-x-4 justify-center translate-y-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-[-80px] md:bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
