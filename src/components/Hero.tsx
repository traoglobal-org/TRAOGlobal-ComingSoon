import { useState } from "react";
import FloatingCards from "./FloatingCards";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:contact@traoglobal.com?subject=Partnership Inquiry&body=Hello TRAO Global,%0D%0A%0D%0AI am interested in learning more about your trading platform.%0D%0A%0D%0AMy email: ${email}`;
  };

  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
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

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="animate-fade-up-delayed-3">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 bg-card border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 placeholder:text-muted-foreground"
                    required
                  />
                </div>
                <button
                  type="submit"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="inline-flex items-center justify-center gap-2 bg-foreground text-primary-foreground px-8 py-4 rounded-full font-medium text-sm hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group whitespace-nowrap"
                >
                  Connect With Us
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                *We respect your privacy. No spam, ever.
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
