import { personal } from "@/data/personal";

export const ValueSection = () => {
  return (
    <section id="value" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          How I Can <span className="text-primary">Add Value</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Turning development skills into practical engineering solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {personal.valueProps.map((item) => (
            <div
              key={item.number}
              className="bg-card p-6 rounded-lg shadow-xs card-hover text-left"
            >
              <span className="text-primary font-bold text-sm tracking-widest">
                {item.number}
              </span>
              <h4 className="font-semibold text-lg mt-1 mb-2">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {personal.valueFlow && (
          <p className="text-center text-lg md:text-xl font-medium text-primary mt-14 tracking-wide">
            {personal.valueFlow}
          </p>
        )}
      </div>
    </section>
  );
};