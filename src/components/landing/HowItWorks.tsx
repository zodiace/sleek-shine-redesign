const steps = [
  {
    num: 1,
    title: "Dial your personality",
    desc: "Set 10 behavioral traits — warmth, assertiveness, risk tolerance, analytical depth, and more — each on a simple 1–5 scale. No prompt engineering required.",
  },
  {
    num: 2,
    title: "A life story is born",
    desc: "Trinity selects validated backstories for each trait and decade of life, then weaves them into a coherent first-person narrative. Your persona has a past that informs its present.",
  },
  {
    num: 3,
    title: "Behaviour emerges naturally",
    desc: "The life story is injected into the LLM's context alongside behavioral directives. The persona doesn't perform a personality — it draws on lived experience, just like people do.",
  },
  {
    num: 4,
    title: "Compare perspectives",
    desc: "Chat with up to five personas simultaneously. Send the same question and see how different personalities respond. Switch between them with a click.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 md:py-40 px-4 bg-warm">
      <div className="container mx-auto">
        <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
          Personality from life experience,
          <br className="hidden md:block" />
          not a list of adjectives
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Most AI personality tools inject a few descriptive words into a system prompt. Trinity builds complete life histories — decade by decade — that shape how your persona thinks, speaks, and decides.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-card rounded-xl p-7 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-5">
                {step.num}
              </div>
              <h3 className="text-base font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
