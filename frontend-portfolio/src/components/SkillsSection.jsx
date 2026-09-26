// import { useState } from "react";
// import { cn } from "@/lib/utils";
// import { skills, skillCategories, categoryLabels } from "@/data/skills";

// export const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredSkills = skills.filter(
//     (skill) => activeCategory === "all" || skill.category === activeCategory
//   );

//   return (
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           My <span className="text-primary"> Skills</span>
//         </h2>
//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Technologies I've learned and used through coursework, projects, and
//           self-study.
//         </p>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {skillCategories.map((category, key) => (
//             <button
//               key={key}
//               onClick={() => setActiveCategory(category)}
//               className={cn(
//                 "px-5 py-2 rounded-full transition-colors duration-300",
//                 activeCategory === category
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-secondary/70 text-foreground hover:bg-secondary"
//               )}
//             >
//               {categoryLabels[category]}
//             </button>
//           ))}
//         </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//           {filteredSkills.map((skill, key) => {
//             const Icon = skill.icon;
//             return (
//               <div
//                 key={key}
//                 className="bg-card px-4 py-4 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center gap-2 text-center"
//               >
//                 {Icon && <Icon className="h-6 w-6 text-primary" />}
//                 <span className="font-medium">{skill.name}</span>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };




import { useState } from "react";
import { cn } from "@/lib/utils";
import { skills, skillCategories, categoryLabels } from "@/data/skills";

const INITIAL_SKILL_COUNT = 8;

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const visibleSkills = showAll
    ? filteredSkills
    : filteredSkills.slice(0, INITIAL_SKILL_COUNT);

  const hasMore = filteredSkills.length > INITIAL_SKILL_COUNT;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Technologies I've learned and used through coursework, projects, and
          self-study.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, key) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleSkills.map((skill, key) => {
            const Icon = skill.icon;
            return (
              <div
                key={key}
                className="bg-card px-4 py-4 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center gap-2 text-center opacity-0 animate-fade-in"
              >
                {Icon && <Icon className="h-6 w-6 text-primary" />}
                <span className="font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>

        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="text-primary text-sm font-medium hover:underline"
            >
              {showAll
                ? "Show Less"
                : `Show More (${filteredSkills.length - INITIAL_SKILL_COUNT} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};