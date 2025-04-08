import bookImg from "@assets/book.png";

export default function Bonus() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="md:flex items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative flex justify-center">
              <img 
                src={bookImg} 
                alt="Guia de Autoconhecimento da Marca Pessoal" 
                className="w-auto h-auto max-h-96 object-contain"
              />
              <div className="absolute -top-4 -right-4 bg-[#8A4FFF] text-white text-xl font-bold px-8 py-2 rounded-full shadow-lg rotate-6 z-10">
                BÔNUS
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-gray-800">Guia de Desenvolvimento da Marca Pessoal</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#8A4FFF] to-[#B366FF] mb-6"></div>
            <p className="mb-6 text-lg">
              Sabemos da dificuldade de vender o próprio trabalho, por isso, comprando o Perfil Pluma, você ganha também o Guia de Desenvolvimento da Marca Pessoal.
            </p>
            <p className="mb-6 text-lg">
              Uma ferramenta com 10 perguntas da metodologia Personal Branding para encontrar seus diferenciais e falar de si mesma de maneira profissional, atrativa e diferenciada.
            </p>
            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#8A4FFF] mb-6">
              <p className="italic text-[#8A4FFF]/90">
                E se você estiver se perguntando: "Mas eu não sei o que colocar na minha página, como vou preencher?"
              </p>
              <p className="font-semibold mt-2 text-gray-700">
                Nós pensamos em você!
              </p>
            </div>
            <p className="text-xl font-semibold mb-2">
              Você <span className="font-bold">sabe</span> que é incrível no seu trabalho,
            </p>
            <p className="text-xl font-semibold">
              Só precisa aprender a <span className="font-bold">mostrar isso pra outras pessoas.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
