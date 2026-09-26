import {
  Server,
  Database,
  Layers,
  Container,
  Workflow,
  Cloud,
} from "lucide-react";
import { personal } from "@/data/personal";

const iconMap = {
  Server,
  Database,
  Layers,
  Container,
  Workflow,
  Cloud,
};

export const WhatIBuildSection = () => {
  return (
    <section id="what-i-build" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          What I <span className="text-primary">Build</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          The kinds of applications and systems I can build with my current
          skill set.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personal.whatIBuild.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="gradient-border p-6 card-hover text-left"
              >
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                  {Icon && <Icon className="h-6 w-6 text-primary" />}
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};