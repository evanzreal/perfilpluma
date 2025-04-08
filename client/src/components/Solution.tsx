

export default function Solution() {
  return (
    <section className="py-16 md:py-20 bg-cream-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="md:flex items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="/attached_assets/psi-site.png" 
              alt="Psicóloga usando o PerfilPluma" 
              className="rounded-lg shadow-md w-full h-auto" 
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">A forma mais fácil de ter seu próprio site</h2>
            <div className="w-20 h-1 bg-psi-500 mb-6"></div>
            <p className="mb-6 text-lg">
              O PerfilPluma é a solução para construir sua presença online sem depender das redes sociais, que já estão tão saturadas que é praticamente impossível ter resultados sem uma grande estrutura de marketing profissional.
            </p>
            <p className="mb-6 text-lg">
              Com seu próprio site, você pode se posicionar em destaque no Google, ser encontrada por clientes que estão procurando diretamente pelos seus serviços e fazer anúncios no Google ADS, que geram resultado muito mais rápido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
