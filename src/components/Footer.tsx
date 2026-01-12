const Footer = () => {
  return (
    <footer className="relative md:fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md mt-8 md:mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
        <div className="flex items-center justify-center">
          <span className="text-xs sm:text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} TRAO Global. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
