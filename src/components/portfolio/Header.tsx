import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Download } from "lucide-react";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary-glow/5 to-accent/10 py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="container relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-full blur-2xl opacity-20 scale-110"></div>
              <img 
                src="/lovable-uploads/733ee4e4-ba8a-45b9-ba54-2ad777b7a9bd.png"
                alt="Angelin Jerusha A. S."
                className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-primary/20 shadow-elegant"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <Badge variant="secondary" className="mb-4 text-sm font-medium px-4 py-2">
              B.Tech Computer Science & AI
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Angelin Jerusha A. S.
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed max-w-2xl">
              Final-year Computer Science student specializing in Artificial Intelligence, passionate about building efficient, intelligent, and reliable systems through clean code and continuous learning.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a 
                href="mailto:jerushaangelin53@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                jerushaangelin53@gmail.com
              </a>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <a 
                href="tel:+919342579442" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 93425 79442
              </a>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <a 
                href="https://linkedin.com/in/angelin-jerusha-0349b4249" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;