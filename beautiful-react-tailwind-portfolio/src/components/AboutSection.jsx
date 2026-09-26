import { useState } from "react";
import { Cloud, Code, Terminal } from "lucide-react";
import { personal } from "@/data/personal";

export const AboutSection = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  return (
    // <section id="about" className="py-24 px-4 relative">
    <section id="about" className="pt-32 pb-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{personal.aboutHeading}</h3>

                        <p className="text-muted-foreground">
              {personal.aboutParagraphs[0]}
            </p>

            {showFullBio &&
              personal.aboutParagraphs.slice(1).map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground opacity-0 animate-fade-in"
                >
                  {paragraph}
                </p>
              ))}

            {personal.aboutParagraphs.length > 1 && (
              <button
                onClick={() => setShowFullBio((prev) => !prev)}
                className="text-primary text-sm font-medium hover:underline"
              >
                {showFullBio ? "Read Less" : "Read More"}
              </button>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                  href="#journey"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  View My Journey
                </a>


              {/* {personal.resumeUrl ? (
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              ) : (
                <a
                  href="#journey"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  View My Journey
                </a>
              )} */}


            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Software Development</h4>
                  <p className="text-muted-foreground">
                    Building full-stack projects with React, Node.js, and
                    Express — from UI to REST APIs and databases.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & DevOps Learning</h4>
                  <p className="text-muted-foreground">
                    Learning AWS, Docker, Kubernetes, Jenkins, and CI/CD
                    pipelines through hands-on practice and certifications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">DSA & Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Practicing Data Structures & Algorithms consistently on
                    LeetCode to build strong interview-ready fundamentals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
