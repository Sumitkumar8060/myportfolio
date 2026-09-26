import { useState } from "react";
import { GraduationCap, Award, Code2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { codingPractice } from "@/data/journey";

const tabs = [
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "coding", label: "Coding Practice", icon: Code2 },
  { id: "education", label: "Education", icon: GraduationCap },
];

export const JourneySection = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="journey" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Journey</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          School to university, certifications, and consistent DSA practice —
          here's how I've been building toward a career in software and
          cloud/DevOps.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2 rounded-full transition-colors duration-300",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          

          {activeTab === "certifications" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-card p-6 rounded-lg shadow-xs card-hover text-left flex flex-col"
                >
                  <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <div className="mt-2 text-sm text-muted-foreground space-y-0.5">
                    {cert.duration && <p>Duration: {cert.duration}</p>}
                    {cert.date && <p>{cert.date}</p>}
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      View Certificate <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "coding" && (
            <div className="gradient-border p-8 card-hover text-center">
              <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-xl mb-2">
                {codingPractice.platform} — {codingPractice.stat}
              </h4>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {codingPractice.description}
              </p>
              {codingPractice.profileUrl &&
                codingPractice.profileUrl !== "#" && (
                  <a
                    href={codingPractice.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    View Profile <ExternalLink size={14} />
                  </a>
                )}
            </div>
          )}


          {activeTab === "education" && (
            <div className="space-y-6">
              {education.map((item) => (
                <div
                  key={item.id}
                  className="gradient-border p-6 card-hover text-left"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h4 className="font-semibold text-lg">{item.degree}</h4>
                      <p className="text-muted-foreground">{item.institution}</p>
                      {item.description && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                    {item.period && (
                      <span className="text-sm font-medium text-primary whitespace-nowrap">
                        {item.period}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
