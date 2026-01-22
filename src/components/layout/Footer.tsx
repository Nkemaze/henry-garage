import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Clock } from "lucide-react";
import logo from "@/assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* <div className="w-12 h-12 rounded-xl bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-display font-bold text-xl">HG</span>
              </div> */}
              <div>
                <img src= {logo} alt="" className="w-20 h-20" />
                {/* <h3 className="font-display font-bold text-xl">Henri Garage</h3>
                <p className="text-sm opacity-80">Excellence Automobile</p> */}
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Votre partenaire de confiance pour l'entretien et la réparation automobile à Yaoundé depuis des années.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {[
                { name: "À propos", path: "/a-propos" },
                { name: "Services", path: "/services" },
                { name: "Galerie", path: "/galerie" },
                { name: "Média / Blog", path: "/media" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>Entretien général</li>
              <li>Réparation mécanique</li>
              <li>Carrosserie & Peinture</li>
              <li>Climatisation</li>
              <li>Dépannage 24/7</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 opacity-80" />
                <span className="text-sm opacity-80">Yaoundé, Cameroun</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 opacity-80" />
                <div className="text-sm opacity-80">
                  <p>675 097 329</p>
                  <p>691 509 578</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Facebook className="w-5 h-5 opacity-80" />
                <a 
                  href="https://facebook.com/henrigarage44xofficiel" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  @henrigarage44xofficiel
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 opacity-80" />
                <span className="text-sm opacity-80">Lun - Sam: 8h - 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Henri Garage. Tous droits réservés.
          </p>
          <p className="text-sm opacity-60">
            Yaoundé, Cameroun 🇨🇲
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
