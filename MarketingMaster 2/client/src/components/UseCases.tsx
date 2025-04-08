import { Card, CardContent } from "@/components/ui/card";

type UseCaseProps = {
  text: string;
};

const useCases: UseCaseProps[] = [
  {
    text: "Chegou uma nova pessoa perguntando sobre o seu trabalho? Envie o link direto da sua página com tudo que ela precisa saber!"
  },
  {
    text: "Vai se candidatar para uma vaga ou oportunidade corporativa? Seu currículo interativo está pronto para se destacar em meio aos longos documentos sem graça."
  },
  {
    text: "Quer investir em marketing para ter mais visibilidade? Divulgue seu próprio site e diga adeus aos investimentos sem retorno no Instagram."
  },
  {
    text: "Pensando em produzir conteúdo para construir sua audiência? Publique textos e vídeos na sua Página ou crie sua própria newsletter."
  }
];

function UseCase({ text }: UseCaseProps) {
  return (
    <Card className="bg-white rounded-lg shadow-sm">
      <CardContent className="p-6 flex gap-4">
        <div className="text-primary/80 mt-1">
          <i className="fa-solid fa-check-circle text-xl"></i>
        </div>
        <div>
          <p className="text-gray-700">{text}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function UseCases() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-gray-800">Como o Perfil Pluma simplifica sua vida</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <UseCase key={index} text={useCase.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
