import { Shield, Wrench, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Certyfikowana Ekspertyza",
    description: "Przeszkoleni przez producentów technicy zapewniający, że każda instalacja spełnia najwyższe standardy branżowe.",
  },
  {
    icon: Wrench,
    title: "Precyzyjny Montaż",
    description: "Rozwiązania dostosowane do układu Twojego gabinetu dla optymalnego przepływu pracy i ergonomii.",
  },
  {
    icon: Clock,
    title: "Minimalny Przestój",
    description: "Efektywny proces instalacji zaprojektowany, aby Twój gabinet działał jak najszybciej.",
  },
  {
    icon: Award,
    title: "Gwarancja Jakości",
    description: "Kompleksowa gwarancja i ciągłe wsparcie dla pełnego spokoju ducha.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Dlaczego My
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold mt-4 mb-6 text-foreground">
            Doskonałość w Każdej <span className="text-gradient">Instalacji</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wnosimy dekady połączonego doświadczenia, aby zapewnić bezbłędną instalację unitów dentystycznych.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card-gradient border border-border rounded-xl p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-glow animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
