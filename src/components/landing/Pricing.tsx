import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    desc: "For individuals exploring AI personas",
    features: [
      "Up to 3 projects",
      "Up to 10 personas",
      "Up to 50 chat threads",
      "10 personality trait dimensions",
      "Behavioral profile per persona",
      "Multi-persona chat (up to 3)",
      "Default LLM model",
    ],
    cta: "Get started free",
    featured: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/ month",
    desc: "For creators and professionals who need depth",
    features: [
      "Unlimited projects and personas",
      "Unlimited chat threads",
      "Life Context — ground personas in specific backgrounds and experiences",
      "Multi-persona chat (up to 5)",
      "Choice of LLM model per persona",
      "Chat history export",
      "Priority support",
    ],
    cta: "Start 14-day free trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For teams building products on Trinity",
    features: [
      "Everything in Professional",
      "Trinity API access",
      "Team workspace with shared personas",
      "Bulk persona creation",
      "Custom trait frameworks",
      "Usage analytics",
      "SSO / SAML and dedicated support",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 md:py-40 px-4 bg-warm">
      <div className="container mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
          Start free. Scale when you're ready.
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12">
          No credit card required. Upgrade as your needs grow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-card rounded-2xl p-8 border relative hover:-translate-y-0.5 transition-all ${
                plan.featured
                  ? "border-accent shadow-[0_0_0_1px_hsl(var(--accent))]"
                  : "border-border hover:shadow-md"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[0.7rem] font-semibold uppercase tracking-wider px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <div className="text-3xl font-bold tracking-tight mt-4 mb-1">
                {plan.price}
                {plan.period && (
                  <span className="text-base font-normal text-muted-foreground">
                    {" "}{plan.period}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
              <ul className="space-y-2.5 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`block text-center py-3 rounded-lg text-sm font-semibold transition-all ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:opacity-85"
                    : "border-[1.5px] border-border text-foreground hover:border-foreground"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
