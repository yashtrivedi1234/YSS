import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Wave decoration */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-hero flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Angela Day</h3>
                <p className="text-sm opacity-80">Public School</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Nurturing young minds since 1995. We believe in creating a joyful learning environment where every child can discover their potential.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Academics", "Staff", "Admission", "Gallery"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="opacity-80">123 Education Lane, Learning City, State 12345</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="opacity-80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="opacity-80">info@angeladay.edu</span>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <h4 className="font-bold text-lg mb-2">School Hours</h4>
            <p className="text-sm opacity-80">Monday - Friday</p>
            <p className="text-sm opacity-80">8:00 AM - 3:30 PM</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            © 2024 Angela Day Public School. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
