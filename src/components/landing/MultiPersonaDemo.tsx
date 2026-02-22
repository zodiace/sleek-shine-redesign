import { useState } from "react";

const personas = [
  {
    name: "Riley — The Strategist",
    response:
      "Eight years is a long time to stay anywhere, and the fact that you're even considering this tells me something. You're not asking whether the startup is a good opportunity — you already think it is. You're asking for permission to take the risk. So here's what I'd say: take it. Stability is valuable, but it can also be a very comfortable cage. You'll learn more about yourself in one year of building something from the ground up than in another five years of doing work you've already mastered. The worst case? You gain leadership experience that makes you more valuable everywhere. That's not really a worst case at all.",
  },
  {
    name: "Morgan — The Analyst",
    response:
      "Before making this decision, I'd want to see the numbers. What's the startup's runway? What's your financial cushion if things don't work out? Eight years of tenure likely means you have unvested benefits, a network, and institutional knowledge that's hard to replace. I wouldn't dismiss the opportunity, but I'd negotiate hard — ask for equity, a clear role definition, and a realistic timeline for profitability. The emotional pull of something new is real, but the best decisions come from understanding the full risk profile, not just the upside narrative.",
  },
  {
    name: "Sage — The Coach",
    response:
      "I hear two things in your question: excitement and fear. Both are valid. Instead of asking 'what should I do,' try asking 'what kind of person do I want to become?' If the answer involves growth, challenge, and leadership — the startup gives you a faster path to that. But also check in with yourself about why you stayed eight years. Was it comfort, or was it something you genuinely valued? There's no wrong answer here, but the decision should come from clarity about your values, not just a comparison of job descriptions.",
  },
];

const MultiPersonaDemo = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 md:py-40 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
            Multi-Persona Chat
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
            Same question. Different minds.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Send one message. Get genuinely different perspectives shaped by different life experiences.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-sm">
          <div className="flex border-b border-border mb-6 -mx-2">
            {personas.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                  active === i
                    ? "text-foreground border-accent"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
          <div className="bg-warm rounded-lg px-5 py-4 text-sm mb-5">
            <strong className="text-foreground">You:</strong>{" "}
            <span className="text-muted-foreground">
              I've been offered a leadership role at a startup, but it means leaving a stable job at a company I've been with for 8 years. What would you do?
            </span>
          </div>
          <div className="px-5 text-sm leading-relaxed text-foreground">
            {personas[active].response}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiPersonaDemo;
