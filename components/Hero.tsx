import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDental from "@/src/hero-dental.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroDental}
          alt="Modern dental equipment"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              Profesjonalny Montaż Unit Dentystycznych
            </span>
          </div>

          <h1 className="font-cormorant text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Precyzyjny Montaż dla
            <span className="block text-gradient">Nowoczesnej Stomatologii</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Profesjonalne usługi montażowe zapewniające idealne ustawienie unitów dentystycznych dla optymalnego przepływu pracy, komfortu pacjenta i trwałej wydajności.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.45s' }}>
            <Button variant="hero" size="xl">
              Rozpocznij
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5 mr-2" />
              Zobacz Nasz Proces
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 pt-12 border-t border-border/50 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-muted-foreground text-sm mb-8 uppercase tracking-wider">
              Zaufały nam wiodące praktyki stomatologiczne
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 text-muted-foreground/60">
              <div className="text-xl font-semibold hover:text-primary transition-colors">DentalCare Plus</div>
              <div className="text-xl font-semibold hover:text-primary transition-colors">Kliniki SmileBright</div>
              <div className="text-xl font-semibold hover:text-primary transition-colors">Metro Dental Group</div>
              <div className="text-xl font-semibold hover:text-primary transition-colors">Elite Ortodoncja</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
