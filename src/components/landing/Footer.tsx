const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border">
      <div className="container mx-auto flex justify-between items-center flex-wrap gap-4">
        <p className="text-sm text-muted-foreground">© 2026 Trinity. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
