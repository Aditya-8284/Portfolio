
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12
     px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href=" https://www.linkedin.com/in/aditya-gupta9483/" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground flex items-center justify-center">
              © 2025 - 2026  <Heart className="h-4 w-4 mx-1 text-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
