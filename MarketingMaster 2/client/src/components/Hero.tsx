import { Button } from "@/components/ui/button";

export default function Hero() {
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
    <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 bg-gradient-to-br from-psi-400 to-psi-700 text-white">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Psicóloga, crie você mesma seu site profissional em 5 minutos, sem pagar mensalidade
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              O PerfilPluma tem toda a estrutura pronta para uma página profissional e interativa, você só precisa preencher com as suas informações.
            </p>
            <Button 
              onClick={() => window.open("https://payment.ticto.app/OA8C05EE6", "_blank")}
              className="bg-white text-psi-600 hover:bg-cream-50 font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              Quero minha página profissional
            </Button>
          </div>
          <div className="mt-8 md:mt-0 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="@assets/print notion .png" 
              alt="PerfilPluma - Site profissional para psicólogos" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Wave divider com melhor integração */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden" style={{ transform: 'translateY(1px)' }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
          className="fill-white w-full h-auto"
          style={{ display: 'block' }}
        >
          <path 
            d="M0,40 C320,100 420,0 1200,80 L1440,100 L0,100 Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
