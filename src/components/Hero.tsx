import { useState } from "react";
import FloatingCards from "./FloatingCards";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:contact@traoglobal.com?subject=Partnership Inquiry&body=Hello TRAO Global,%0D%0A%0D%0AI am interested in learning more about your trading platform.%0D%0A%0D%0AMy email: ${email}`;
  };

  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Yellow Gradient Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] bg-gradient-to-br from-accent via-accent-glow to-accent-soft rounded-full opacity-70 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Coming Soon Label */}
            <div className="animate-fade-up">
              <span className="inline-flex items-center text-muted-foreground text-sm font-medium mb-6">
                <span className="w-6 h-px bg-muted-foreground mr-3" />
                Coming Soon
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6 animate-fade-up-delayed">
              Global Trade,
              <br />
              <span className="text-foreground">Built on Trust.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-muted-foreground text-base lg:text-lg max-w-md mb-8 animate-fade-up-delayed-2">
              TRAO Global is preparing a next-generation trading platform connecting reliable suppliers with global buyers.
            </p>

            {/* Email Form - Inline Style */}
            <form onSubmit={handleSubmit} className="animate-fade-up-delayed-3">
              <div className="relative max-w-xl">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-6 pr-36 sm:pr-44 py-4 bg-card border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 placeholder:text-muted-foreground"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center bg-foreground text-primary-foreground px-5 sm:px-6 py-2.5 rounded-full font-medium text-sm hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
                >
                  Notify Me
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                *Don't worry we will not spam you :)
              </p>
            </form>

            {/* Value Highlights */}
            <div className="flex flex-wrap gap-6 mt-10 animate-fade-up-delayed-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Seamless sourcing
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Transparent partnerships
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Worldwide reach
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="order-1 lg:order-2 animate-scale-in">
            <FloatingCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
