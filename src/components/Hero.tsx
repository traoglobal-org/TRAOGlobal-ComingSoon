import { useState } from "react";
import FloatingCards from "./FloatingCards";
import image1 from "@/assets/1.jpg";
import image2 from "@/assets/2.jpeg";
import image3 from "@/assets/3.png";
import image4 from "@/assets/4.jpg";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:contact@traoglobal.com?subject=Partnership Inquiry&body=Hello TRAO Global,%0D%0A%0D%0AI am interested in learning more about your trading platform.%0D%0A%0D%0AMy email: ${email}`;
  };

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Integrated Header */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-md">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-xl tracking-tight">TRAO Global</span>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow Circle with sharp boundary - shifted right */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 translate-x-8 lg:translate-x-16 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] pointer-events-none z-0">
        <div className="w-full h-full rounded-full" 
             style={{
               backgroundColor: '#FBBC04'
             }} 
        />
      </div>

      {/* Animated Image Grid over Yellow Circle */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 translate-x-8 lg:translate-x-16 w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] z-10 hidden md:block">
        <div className="relative w-full h-full">
          {/* Large Image - Top Left */}
          <div className="absolute top-[-8%] left-[-10%] w-[55%] h-[50%] overflow-hidden rounded-xl shadow-2xl animate-float border border-black/20">
            <img 
              src={image1} 
              alt="Product 1" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Medium Image - Top Right */}
          <div className="absolute top-[-5%] right-[-8%] w-[48%] h-[45%] overflow-hidden rounded-xl shadow-xl animate-float-delayed border border-black/20">
            <img 
              src={image2} 
              alt="Product 2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Small Image - Middle Right */}
          <div className="absolute top-[45%] right-[-10%] w-[45%] h-[42%] overflow-hidden rounded-xl shadow-xl animate-float-slow border border-black/20">
            <img 
              src={image3} 
              alt="Product 3" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Large Image - Bottom Left */}
          <div className="absolute bottom-[-8%] left-[-8%] w-[58%] h-[52%] overflow-hidden rounded-xl shadow-2xl animate-float-delayed border border-black/20">
            <img 
              src={image4} 
              alt="Product 4" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Natural Gradient extending upward and to sides from circle - not below */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Main irregular gradient blob extending upward and left to cover text */}
        <div 
          className="absolute top-0 left-1/4 w-[900px] h-[65%] lg:w-[1100px] lg:h-[70%]"
          style={{
            background: 'radial-gradient(ellipse 75% 80% at 55% 85%, rgba(251, 188, 4, 0.28) 0%, rgba(251, 188, 4, 0.16) 40%, rgba(251, 188, 4, 0.06) 65%, transparent 85%)',
            filter: 'blur(70px)',
            borderRadius: '55% 45% 60% 40% / 50% 50% 45% 55%'
          }}
        />
        {/* Secondary gradient for smooth blending */}
        <div 
          className="absolute -top-10 left-[15%] w-[800px] h-[60%] lg:w-[1000px] lg:h-[65%]"
          style={{
            background: 'radial-gradient(ellipse 70% 75% at 50% 90%, rgba(251, 234, 153, 0.32) 0%, rgba(251, 234, 153, 0.18) 45%, rgba(251, 234, 153, 0.06) 70%, transparent 90%)',
            filter: 'blur(80px)',
            borderRadius: '60% 40% 50% 50% / 55% 45% 50% 50%'
          }}
        />
        {/* Top gradient for smooth fade to header */}
        <div 
          className="absolute -top-20 left-[20%] w-[700px] h-[50%] lg:w-[900px] lg:h-[55%]"
          style={{
            background: 'radial-gradient(ellipse 80% 70% at 45% 100%, rgba(251, 188, 4, 0.12) 0%, rgba(251, 188, 4, 0.05) 60%, transparent 100%)',
            filter: 'blur(90px)',
            borderRadius: '50% 50% 60% 40% / 45% 55% 50% 50%'
          }}
        />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl">
            {/* Left Content */}
            <div>
            {/* Coming Soon Label */}
            <div className="animate-fade-up">
              <span className="inline-flex items-center text-foreground text-base font-semibold mb-6">
                <span className="w-6 h-px bg-foreground mr-3" />
                Coming Soon
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] tracking-tight mb-6 animate-fade-up-delayed">
              Global Trade,
              <br />
              <span className="text-foreground">Built on Trust.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-foreground/80 text-sm lg:text-base max-w-md mb-8 animate-fade-up-delayed-2">
              Connecting Trusted Indian Supply with Global Demand.
            </p>

            {/* Connect Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up-delayed-3">
              {/* Connect Button with Email Icon */}
              <a
                href="mailto:contact@traoglobal.com"
                className="inline-flex items-center gap-3 bg-foreground text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 group"
              >
                <svg
                  className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Connect
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </a>

              {/* Phone Button with Phone Icon */}
              <a
                href="tel:+917019605977"
                className="inline-flex items-center gap-3 bg-foreground text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 group"
              >
                <svg
                  className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 7019605977
              </a>
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
