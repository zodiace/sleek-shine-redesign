const FinalCTA = () => {
  return (
    <section className="py-32 md:py-40 px-4 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-accent-soft font-semibold mb-3">
          Get Started
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
          Ready to give your AI a personality worth talking to?
        </h2>
        <p className="text-primary-foreground/65 text-base md:text-lg mb-8">
          Create your first persona in under a minute. No credit card required.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3.5 rounded-lg text-sm font-semibold bg-primary-foreground text-primary hover:opacity-90 hover:-translate-y-0.5 transition-all"
        >
          Get started free
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
