import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Kompletna instalacja unitów dentystycznych",
  "Systemy montażu ściennego i szafkowego",
  "Integracja instalacji wodnej i elektrycznej",
  "Kalibracja i testowanie sprzętu",
  "Szkolenie personelu z obsługi sprzętu",
  "Wsparcie po instalacji",
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Nasze Usługi
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold mt-4 mb-6 text-foreground">
              Kompleksowe Rozwiązania <span className="text-gradient">Dentystyczne</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Od wstępnej konsultacji po finałową instalację, obsługujemy każdy aspekt montażu Twoich unitów dentystycznych z precyzją i profesjonalizmem.
            </p>

            <ul className="space-y-4 mb-10">
              {services.map((service, index) => (
                <li
                  key={service}
                  className="flex items-center gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Otrzymaj Darmową Wycenę</a>
            </Button>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-accent-gradient opacity-20 blur-3xl rounded-full" />
            <div className="relative bg-card-gradient border border-border rounded-2xl p-10 shadow-elevated">
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-border pb-6">
                  <div>
                    <p className="text-muted-foreground text-sm">Zrealizowane Projekty</p>
                    <p className="text-4xl font-bold text-foreground mt-1">500+</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🏥</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-6">
                  <div>
                    <p className="text-muted-foreground text-sm">Lat Doświadczenia</p>
                    <p className="text-4xl font-bold text-foreground mt-1">15+</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Zadowolenie Klientów</p>
                    <p className="text-4xl font-bold text-foreground mt-1">99%</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
