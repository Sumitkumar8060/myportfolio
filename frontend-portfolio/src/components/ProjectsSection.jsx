import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { personal } from "@/data/personal";

export const ProjectsSection = () => {
  const hasGithub = personal.social.github && personal.social.github !== "#";

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Projects I've built to apply what I'm learning in software
          development, backend engineering, and cloud/DevOps practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project) => {
            const hasDemo = project.demoUrl && project.demoUrl !== "#";
            const hasRepo = project.githubUrl && project.githubUrl !== "#";

            return (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover md:col-span-1 lg:col-span-1 max-w-md mx-auto w-full"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  {(hasDemo || hasRepo) && (
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        {hasDemo && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                        {hasRepo && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {hasGithub && (
          <div className="text-center mt-12">
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              target="_blank"
              rel="noreferrer"
              href={personal.social.github}
            >
              Check My Github <ArrowRight size={16} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
