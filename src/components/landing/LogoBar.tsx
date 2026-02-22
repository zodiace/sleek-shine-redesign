const logos = ["Meridian", "Clearpath AI", "Novastra", "Arcline", "Fieldwork"];

const LogoBar = () => {
  return (
    <div className="py-10 px-4 text-center border-y border-border">
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-6">
        Trusted by teams building the next generation of AI experiences
      </p>
      <div className="flex justify-center items-center gap-10 md:gap-14 flex-wrap opacity-40">
        {logos.map((name) => (
          <span key={name} className="font-body text-base font-semibold text-foreground">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LogoBar;
