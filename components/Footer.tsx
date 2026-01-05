import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-cormorant text-2xl font-semibold text-gradient">
              Unity Stomatologiczne
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Profesjonalna instalacja i montaż unitów dentystycznych dla nowoczesnych gabinetów.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-foreground">
              Usługi
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Instalacja Unitów</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Montaż Niestandardowy</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Serwis i Wsparcie</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Konsultacje</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-foreground">
              Kontakt
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>+48 123 456 789</span>
              </li>
              <li className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>kontakt@unitystomatologiczne.pl</span>
              </li>
              <li className="flex items-center gap-3 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Obsługujemy całą Polskę</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>© 2026 Unity Stomatologiczne. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
