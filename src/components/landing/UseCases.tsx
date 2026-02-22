const cases = [
  { icon: "🎯", title: "Branded AI Agents", desc: "Define your brand's personality with precision — not a paragraph of instructions that drifts after three exchanges. Trinity personas maintain consistent tone, style, and judgment across every customer interaction." },
  { icon: "🧠", title: "Personal Advisory Panels", desc: "Build a team of advisors with different orientations — a cautious analyst, a bold strategist, a people-first coach — and run your real decisions past all of them in a single conversation." },
  { icon: "✍️", title: "Character Development", desc: "Novelists, screenwriters, and game designers can create characters with coherent personalities and converse with them to develop dialogue, test reactions, and discover narrative possibilities." },
  { icon: "🏢", title: "Team Copilots", desc: "Give your sales team an optimistic, decisive copilot. Give compliance a cautious, analytical one. Same underlying model, completely different behavioral profiles — parameterized and auditable." },
  { icon: "🎓", title: "Training Simulations", desc: "Prepare for difficult conversations by practicing with personas calibrated to push back, challenge, or resist. Managers, salespeople, and negotiators get realistic practice without the real stakes." },
  { icon: "🔬", title: "Multi-Perspective Analysis", desc: "Test proposals, messaging, or strategies against a panel of personas with different dispositions. Surface objections and blind spots that a single AI perspective would miss." },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-32 md:py-40 px-4 bg-warm">
      <div className="container mx-auto">
        <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Use Cases</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
          One engine, many applications
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Trinity's persona engine powers everything from brand voice to boardroom simulation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-card border border-border rounded-xl p-7 hover:border-accent-soft hover:-translate-y-0.5 hover:shadow-md transition-all"
            >
              <div className="text-2xl mb-4">{c.icon}</div>
              <h3 className="text-base font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
