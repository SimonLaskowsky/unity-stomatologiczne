import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-gradient opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold mb-6 text-foreground">
            Gotowy na Transformację Twojego <span className="text-gradient">Gabinetu?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Skontaktuj się z nami już dziś, aby uzyskać darmową konsultację i odkryj, jak nasze profesjonalne usługi montażu unitów dentystycznych mogą podnieść poziom Twojego gabinetu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:kontakt@unitystomatologiczne.pl">
                Umów Konsultację
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+48123456789">
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń Teraz
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
