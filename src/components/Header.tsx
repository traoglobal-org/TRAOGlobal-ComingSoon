const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md overflow-hidden">
      {/* Yellow gradient on right side - matching Hero section */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div 
          className="absolute top-0 right-[10%] w-[600px] h-[250px] lg:w-[800px] lg:h-[300px]"
          style={{
            background: 'radial-gradient(ellipse 75% 80% at 60% 50%, rgba(251, 188, 4, 0.28) 0%, rgba(251, 188, 4, 0.16) 40%, rgba(251, 188, 4, 0.06) 65%, transparent 85%)',
            filter: 'blur(70px)',
            borderRadius: '55% 45% 60% 40% / 50% 50% 45% 55%'
          }}
        />
        <div 
          className="absolute top-0 right-[5%] w-[500px] h-[200px] lg:w-[700px] lg:h-[250px]"
          style={{
            background: 'radial-gradient(ellipse 70% 75% at 65% 55%, rgba(251, 234, 153, 0.32) 0%, rgba(251, 234, 153, 0.18) 45%, rgba(251, 234, 153, 0.06) 70%, transparent 90%)',
            filter: 'blur(80px)',
            borderRadius: '60% 40% 50% 50% / 55% 45% 50% 50%'
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
