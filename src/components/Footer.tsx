const Footer = () => {
  const footerLinks = [
    { label: "FAQ", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Email Us", href: "mailto:contact@traoglobal.com" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-center gap-6">
          {footerLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors duration-300 ${
                index === footerLinks.length - 1
                  ? "text-foreground font-medium hover:text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
