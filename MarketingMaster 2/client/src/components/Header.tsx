import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className={`mr-2 ${scrolled ? "text-psi-500" : "text-white"}`}>
            <i className="fa-solid fa-feather text-3xl"></i>
          </div>
          <div>
            <h1 className={`text-xl font-semibold ${scrolled ? "text-gray-800" : "text-white"}`}>
              Perfil<span className="italic">Pluma</span>
            </h1>
            <p className={`text-xs ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>
              Sistema completo para psicólogas criarem seu site profissional
            </p>
          </div>
        </div>
        <div>
          <Button 
            onClick={() => window.open("https://payment.ticto.app/OA8C05EE6", "_blank")}
            className={`${scrolled 
              ? "bg-psi-500 hover:bg-psi-600 text-white" 
              : "bg-white text-psi-600 hover:bg-cream-50"} font-medium transition-colors`}
          >
            Quero minha página
          </Button>
        </div>
      </div>
    </header>
  );
}
