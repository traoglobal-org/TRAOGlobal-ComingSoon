const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl tracking-tight">TRAO Global</span>
          </div>

          {/* CTA Button */}
          <a
            href="mailto:contact@traoglobal.com"
            className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3 rounded-full font-medium text-sm hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Connect
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
