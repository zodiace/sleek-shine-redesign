const testimonials = [
  {
    quote: "We replaced our hand-written system prompts with Trinity personas for our customer-facing AI. The consistency is night and day. Our brand voice actually holds across long conversations now, and the support team doesn't have to keep tweaking prompts every week.",
    initials: "KL",
    name: "Karen Liu",
    role: "VP of Product, Clearpath AI",
  },
  {
    quote: "I built a panel of five personas with different risk profiles and run every major investment thesis past them before presenting to the team. The multi-persona chat surfaces objections I wouldn't have considered on my own. It's like having a private board of advisors.",
    initials: "DA",
    name: "David Almeida",
    role: "Portfolio Manager, Meridian Capital",
  },
  {
    quote: "I'm working on a novel with four point-of-view characters. Trinity lets me have actual conversations with each of them. Their voices are distinct and they stay in character even when I push them into situations I hadn't originally planned. It's genuinely changed how I develop characters.",
    initials: "JS",
    name: "Jenna Shields",
    role: "Author",
  },
  {
    quote: "We use Trinity to train new managers on difficult conversations. We've created personas that simulate resistant employees, anxious team members, and over-confident direct reports. It's not a replacement for real coaching, but it gives people a safe space to practice before the real thing.",
    initials: "RM",
    name: "Rachel Moyo",
    role: "Head of L&D, Novastra",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 md:py-40 px-4 bg-warm">
      <div className="container mx-auto">
        <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
          What People Are Saying
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-12">
          Built for professionals who take AI seriously
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <div key={t.initials} className="bg-card border border-border rounded-xl p-7">
              <blockquote className="text-sm leading-relaxed text-foreground italic mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-warm flex items-center justify-center text-sm font-semibold text-accent">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
