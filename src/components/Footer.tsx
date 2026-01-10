const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-center">
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TRAO Global. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
