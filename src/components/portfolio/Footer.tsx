import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 via-primary-glow/5 to-accent/10 py-16">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center">
          <Badge variant="outline" className="mb-6 text-sm font-medium px-4 py-2">
            Let's Connect
          </Badge>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Always open to discussing new opportunities, collaborative projects, or just connecting with fellow tech enthusiasts.
          </p>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button variant="outline" asChild className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <a href="mailto:jerushaangelin53@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                jerushaangelin53@gmail.com
              </a>
            </Button>
            
            <Button variant="outline" asChild className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <a href="tel:+919342579442" className="flex items-center gap-2">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                +91 93425 79442
              </a>
            </Button>
            
            <Button variant="outline" asChild className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <a 
                href="https://linkedin.com/in/angelin-jerusha-0349b4249" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                LinkedIn Profile
              </a>
            </Button>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground">
                © 2024 Angelin Jerusha A. S. All rights reserved.
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                Built with <Heart className="w-4 h-4 text-red-500" /> using React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;