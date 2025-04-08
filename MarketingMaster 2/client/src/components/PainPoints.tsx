import { Card, CardContent } from "@/components/ui/card";

type PainPointProps = {
  icon: string;
  text: string;
};

const painPoints: PainPointProps[] = [
  {
    icon: "fa-circle-exclamation",
    text: "Você gasta muito tempo criando conteúdo pro Instagram, sem resultado?"
  },
  {
    icon: "fa-circle-exclamation",
    text: "Já tentou fazer seu próprio site, mas foi muito mais difícil do que parecia?"
  },
  {
    icon: "fa-circle-exclamation",
    text: "Já procurou contratar um profissional e descobriu que é muito mais caro do que imaginava?"
  }
];

function PainPoint({ icon, text }: PainPointProps) {
  return (
    <Card className="bg-psi-50 hover:shadow-md transition duration-300 border-psi-100">
      <CardContent className="p-6">
        <div className="text-psi-500 mb-4">
          <i className={`fa-solid ${icon} text-2xl`}></i>
        </div>
        <p className="font-medium text-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}

export default function PainPoints() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">Está enfrentando esses desafios?</h2>
          <div className="w-20 h-1 bg-psi-500 mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <PainPoint key={index} icon={point.icon} text={point.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
