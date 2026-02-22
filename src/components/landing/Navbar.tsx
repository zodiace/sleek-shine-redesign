const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-heading text-2xl font-bold tracking-tight text-foreground">
          Trinity
        </a>
        <div className="flex items-center gap-8">
          <a href="#how-it-works" className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#use-cases" className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Use Cases
          </a>
          <a href="#pricing" className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
          <a
            href="#"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-medium hover:opacity-85 transition-opacity"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
