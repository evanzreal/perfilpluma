import { Card, CardContent } from "@/components/ui/card";

type BenefitProps = {
  icon: string;
  title: string;
  description: string;
};

const benefits: BenefitProps[] = [
  {
    icon: "fa-coins",
    title: "Pagamento único",
    description: "Pague pelo template uma única vez e tenha para sempre. Edite quando quiser, da forma que quiser, quantas vezes quiser. Sem mensalidades e custos adicionais."
  },
  {
    icon: "fa-bolt",
    title: "Rapidez e facilidade",
    description: "Tenha tudo pronto em 5 minutos: seu único trabalho é trocar os textos e imagens, a estrutura tá 100% pronta e organizada em um formato testado e validado!"
  },
  {
    icon: "fa-cubes",
    title: "Recursos diversos",
    description: "Adicione facilmente recursos como Arquivos, Anexos, Formulários, Vídeos, Tabelas e muito mais!"
  }
];

function Benefit({ icon, title, description }: BenefitProps) {
  return (
    <Card className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20">
      <CardContent className="p-6">
        <div className="text-teal-300 mb-4">
          <i className={`fa-solid ${icon} text-3xl`}></i>
        </div>
        <h3 className="font-semibold text-xl mb-3 text-white">{title}</h3>
        <p className="text-white text-opacity-90">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function BenefitsHighlight() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-teal-500 text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Tudo isso de uma forma que você nunca viu antes</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6 opacity-80"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Benefit 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
