import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section id="cta" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-gradient-to-br from-psi-400 to-psi-700 rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-white">
            <div className="text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Pronta pra dar o próximo passo na sua presença digital?</h2>
              <p className="text-xl mb-8 opacity-90">Clique no botão e publique sua página ainda hoje! <span className="font-bold">É realmente rápido assim</span>.</p>
              
              <div className="mb-8">
                <Button 
                  onClick={() => window.open("https://payment.ticto.app/OA8C05EE6", "_blank")}
                  className="bg-white text-psi-600 hover:bg-cream-50 font-bold text-lg py-4 px-10 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
                >
                  Quero minha página profissional
                </Button>
              </div>
              
              <div className="inline-block bg-white text-psi-600 rounded-lg px-6 py-3 shadow-md">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-shield-halved text-xl"></i>
                  <span className="font-semibold">Garantia de 7 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
