import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Stethoscope } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-lg text-primary-foreground">
                <Stethoscope size={24} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                GentleCare<span className="text-primary-foreground/80">Dental</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing exceptional dental care with a gentle touch. Your smile is our priority, and your comfort is our mission.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Book Appointment", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                "General Dentistry",
                "Cosmetic Whitening",
                "Dental Implants",
                "Orthodontics",
                "Pediatric Dentistry",
                "Emergency Care"
              ].map((item) => (
                <li key={item} className="text-slate-400 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-primary-foreground shrink-0 mt-0.5" />
                <span>123 Medical Park Drive,<br />Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 text-primary-foreground shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-primary-foreground shrink-0" />
                <span>info@gentlecaredental.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} GentleCare Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
