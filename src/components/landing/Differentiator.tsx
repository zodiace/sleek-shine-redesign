import { useEffect, useRef, useState } from "react";

const traits = [
  { label: "Warmth", value: 80 },
  { label: "Assertiveness", value: 90 },
  { label: "Risk Tolerance", value: 60 },
  { label: "Analytical Depth", value: 40 },
  { label: "Formality", value: 30 },
  { label: "Authority", value: 50 },
  { label: "Optimism", value: 70 },
  { label: "Decisiveness", value: 85 },
  { label: "Openness", value: 75 },
  { label: "Self-Disclosure", value: 65 },
];

const Differentiator = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="differentiator" className="py-32 md:py-40 px-4">
      <div className="container mx-auto">
        <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
          The Difference
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-10">
          Beyond system prompts
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 leading-snug">
              A system prompt says
              <br />
              "be assertive."
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The model nods along for a few messages, then drifts back to default behavior. There's no grounding, no consistency, no depth. It's acting, and not very convincingly.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 leading-snug">
              A life story shows <em className="italic text-accent">why</em>
              <br />
              someone is assertive.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A persona who learned to speak up after being overlooked as a teenager, who led a difficult team in their thirties, who found the balance between conviction and listening in their forties — that persona's assertiveness has texture. It holds. It feels real.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              That's what Trinity builds. Not descriptions of personality. The experiences that formed it.
            </p>
          </div>
          <div
            ref={ref}
            className="bg-warm rounded-2xl p-8 border border-border"
          >
            {traits.map((trait) => (
              <div key={trait.label} className="flex items-center gap-4 mb-3 last:mb-0">
                <span className="text-xs font-medium text-muted-foreground w-28 shrink-0">
                  {trait.label}
                </span>
                <div className="flex-1 h-1.5 bg-border rounded-full relative overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: visible ? `${trait.value}%` : "0%",
                      transitionDelay: visible ? `${traits.indexOf(trait) * 60}ms` : "0ms",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;
