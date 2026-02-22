const Hero = () => {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32 px-4 text-center">
      <div className="container mx-auto">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-accent/8 px-4 py-1.5 rounded-full mb-8">
          AI Persona Engine
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
          Give your AI a personality
          <br />
          it <em className="italic text-accent">actually</em> keeps
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Trinity creates AI personas grounded in synthetic life stories — not shallow prompts. The result is consistent, controllable behavior that holds across conversations, contexts, and models.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#"
            className="inline-block px-8 py-3.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-85 hover:-translate-y-0.5 transition-all"
          >
            Get started free
          </a>
          <a
            href="#how-it-works"
            className="inline-block px-8 py-3.5 rounded-lg text-sm font-semibold border-[1.5px] border-border text-foreground hover:border-foreground transition-colors"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
