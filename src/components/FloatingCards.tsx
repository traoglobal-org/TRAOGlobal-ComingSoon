import { Globe, TrendingUp, Shield, Package } from "lucide-react";

const FloatingCards = () => {
  return (
    <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px]">
      
      {/* Main Card - Hidden on mobile */}
      <div className="hidden md:block absolute top-8 right-0 lg:top-12 lg:right-8 w-48 sm:w-56 lg:w-64 bg-card rounded-2xl shadow-2xl p-3 sm:p-4 animate-float border border-border/50 z-[5]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
            <Globe className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <p className="font-semibold text-sm">Global Reach</p>
            <p className="text-xs text-muted-foreground">180+ Countries</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-4/5 bg-accent rounded-full" />
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-3/5 bg-foreground/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Stats Card - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-32 right-8 sm:right-12 lg:bottom-40 lg:right-24 w-40 sm:w-44 lg:w-52 bg-card rounded-2xl shadow-xl p-3 sm:p-4 animate-float-delayed border border-border/50 z-[5]">
        <div className="flex items-center justify-between mb-3">
          <TrendingUp className="w-5 h-5 text-accent" />
          <span className="text-xs font-medium text-muted-foreground">Growth</span>
        </div>
        <div className="flex items-end gap-1">
          {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-accent/30 rounded-t"
              style={{ height: `${height}%`, minHeight: height * 0.6 }}
            />
          ))}
        </div>
      </div>

      {/* Trust Badge - Hidden on mobile */}
      <div className="hidden md:block absolute top-[35%] left-0 lg:left-4 w-40 sm:w-48 bg-card rounded-2xl shadow-lg p-3 sm:p-4 animate-float-slow border border-border/50 z-[5]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <p className="font-semibold text-sm">Verified</p>
            <p className="text-xs text-muted-foreground">Trusted Partner</p>
          </div>
        </div>
      </div>

      {/* Product Card - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-12 left-0 sm:left-4 lg:bottom-16 lg:left-0 w-32 sm:w-40 bg-card rounded-2xl shadow-lg p-2 sm:p-3 animate-float border border-border/50 z-[5]">
        <div className="w-full h-20 bg-muted rounded-lg mb-2 flex items-center justify-center">
          <Package className="w-8 h-8 text-muted-foreground" />
        </div>
        <p className="text-xs font-medium">Quality Products</p>
        <p className="text-xs text-muted-foreground">B2B Sourcing</p>
      </div>
    </div>
  );
};

export default FloatingCards;
