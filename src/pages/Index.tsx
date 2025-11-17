import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import heroImage from "@/assets/luxembourg-hero.jpg";
import viandenCastle from "@/assets/vianden-castle.jpg";
import oldTown from "@/assets/old-town.jpg";
import luxembourgFlag from "@/assets/luxembourg-flag.png";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={luxembourgFlag} 
                alt="Drapeau du Luxembourg" 
                className="w-10 h-10 object-contain animate-bounce-gentle"
              />
              <span className="text-lg font-semibold text-foreground">Luxembourg</span>
            </div>
            <div className="flex gap-6">
              <button 
                onClick={() => scrollToSection("contexte")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Contexte
              </button>
              <button 
                onClick={() => scrollToSection("activites")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Activités
              </button>
              <button 
                onClick={() => scrollToSection("pourquoi")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Pourquoi
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.5}px)` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg animate-[fade-in_1s_ease-out] hover:scale-105 transition-transform duration-300">
            Ma Destination Francophone Favorite
          </h1>
          <h2 className="text-3xl md:text-4xl mb-6 text-accent drop-shadow-md animate-[fade-in_1.2s_ease-out]">
            Le Luxembourg
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md italic animate-[fade-in_1.4s_ease-out]">
            Un petit pays avec un grand charme francophone.
          </p>
        </div>
      </section>

      {/* Contexte Géographique */}
      <section id="contexte" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center hover:scale-105 transition-transform duration-300">
              Contexte Géographique
            </h2>
            <div className="bg-accent rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <p className="text-lg leading-relaxed text-foreground mb-4">
                Le Luxembourg, officiellement le Grand-Duché de Luxembourg, est un petit pays situé au cœur de l'Europe occidentale. 
                Niché entre la Belgique, la France et l'Allemagne, ce pays fascinant couvre seulement 2 586 kilomètres carrés mais 
                possède une richesse culturelle impressionnante.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-4">
                La capitale, Luxembourg-Ville, est reconnue comme site du patrimoine mondial de l'UNESCO grâce à ses fortifications 
                historiques spectaculaires. Le pays compte environ 640 000 habitants et se distingue par son multilinguisme unique : 
                le luxembourgeois est la langue nationale, mais le français et l'allemand sont également des langues officielles 
                largement utilisées dans la vie quotidienne, l'éducation et l'administration.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                Le paysage luxembourgeois enchante par sa diversité : des vallées verdoyantes de l'Ardenne au nord aux vignobles 
                pittoresques de la Moselle à l'est, en passant par les forêts denses et les châteaux médiévaux perchés sur des collines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activités et Attractions */}
      <section id="activites" className="py-20 px-4 bg-gradient-to-b from-white to-accent/30">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl font-bold text-secondary mb-12 text-center hover:scale-105 transition-transform duration-300">
              Activités et Attractions Touristiques
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="animate-on-scroll opacity-0 translate-x-[-50px] transition-all duration-700 delay-100 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 group">
                <div className="overflow-hidden">
                  <img 
                    src={viandenCastle} 
                    alt="Château de Vianden" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">Château de Vianden</h3>
                  <p className="text-foreground leading-relaxed">
                    Le magnifique château de Vianden est l'un des plus beaux châteaux féodaux d'Europe. Construit entre 
                    le XIe et XIVe siècle, il surplombe la ville pittoresque de Vianden et offre une vue spectaculaire 
                    sur la vallée de l'Our.
                  </p>
                </div>
              </div>

              <div className="animate-on-scroll opacity-0 translate-x-[50px] transition-all duration-700 delay-200 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 group">
                <div className="overflow-hidden">
                  <img 
                    src={oldTown} 
                    alt="Vieille Ville de Luxembourg" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">La Vieille Ville</h3>
                  <p className="text-foreground leading-relaxed">
                    Le quartier historique de Luxembourg-Ville offre des promenades enchantées à travers des ruelles pavées, 
                    des fortifications impressionnantes et des places charmantes. Les casemates du Bock, un réseau souterrain 
                    de galeries, témoignent du passé militaire fascinant de la ville.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-primary mb-4 hover:scale-105 transition-transform duration-300">Autres Attractions</h3>
              <ul className="space-y-3 text-foreground text-lg">
                <li className="flex items-start animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 delay-[400ms] hover:translate-x-2">
                  <span className="text-secondary mr-3 text-2xl animate-pulse">•</span>
                  <span><strong>La Vallée de la Moselle :</strong> région viticole proposant des dégustations de vins luxembourgeois 
                  et des paysages bucoliques le long de la rivière.</span>
                </li>
                <li className="flex items-start animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 delay-[500ms] hover:translate-x-2">
                  <span className="text-secondary mr-3 text-2xl animate-pulse">•</span>
                  <span><strong>Le Palais Grand-Ducal :</strong> résidence officielle du Grand-Duc, situé au cœur de la capitale 
                  avec son architecture Renaissance magnifique.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-2xl">•</span>
                  <span><strong>Randonnées dans le Mullerthal :</strong> surnommée "la Petite Suisse luxembourgeoise", cette région 
                  offre des formations rocheuses spectaculaires et des sentiers forestiers enchanteurs.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi J'ai Choisi le Luxembourg */}
      <section id="pourquoi" className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="animate-on-scroll opacity-0 scale-95 transition-all duration-700">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center hover:scale-105 transition-transform duration-300">
              Pourquoi J'ai Choisi le Luxembourg ?
            </h2>
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <p className="text-lg leading-relaxed text-foreground mb-4">
                J'ai choisi le Luxembourg comme ma destination francophone favorite pour plusieurs raisons passionnantes. 
                Premièrement, ce pays incarne parfaitement le multilinguisme et la diversité culturelle européenne. En tant que 
                pays francophone situé au carrefour de trois grandes cultures (française, allemande et luxembourgeoise), il 
                représente un exemple remarquable d'harmonie multiculturelle.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-4">
                Deuxièmement, malgré sa petite taille, le Luxembourg offre une densité exceptionnelle de sites historiques, 
                de beautés naturelles et d'activités culturelles. En quelques jours, on peut explorer des châteaux médiévaux, 
                déguster des vins locaux, découvrir un patrimoine UNESCO et se promener dans des paysages verdoyants à couper le souffle.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                Finalement, le Luxembourg représente un modèle de réussite moderne tout en préservant ses traditions. 
                C'est une destination parfaite pour découvrir la francophonie dans un contexte européen unique, où l'histoire 
                rencontre la modernité dans une atmosphère accueillante et cosmopolite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary/20 to-primary opacity-50 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-lg animate-[fade-in_1s_ease-out] hover:scale-105 transition-transform duration-300">
            Découvrez le charme unique du Luxembourg - Où la francophonie rencontre l'Europe.
          </p>
          <p className="mt-4 text-sm opacity-80 animate-[fade-in_1.2s_ease-out]">
            Présentation pour le cours de français © 2024
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full w-12 h-12 shadow-lg z-50 animate-[fade-in_0.3s_ease-out] hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl"
          size="icon"
        >
          <ArrowUp className="h-5 w-5 animate-bounce" />
        </Button>
      )}
    </div>
  );
};

export default Index;
