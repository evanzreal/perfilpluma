import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type FeatureProps = {
  icon: string;
  title: string;
  description: string;
};

const features: FeatureProps[] = [
  {
    icon: "fa-graduation-cap",
    title: "Cursos e especializações",
    description: "Destaque sua formação profissional e especializações de forma organizada."
  },
  {
    icon: "fa-briefcase",
    title: "Experiências e projetos",
    description: "Compartilhe sua trajetória profissional e projetos mais relevantes."
  },
  {
    icon: "fa-star",
    title: "Diferenciais profissionais",
    description: "Mostre o que torna seu trabalho único e especial para seus clientes."
  },
  {
    icon: "fa-circle-question",
    title: "Dúvidas frequentes",
    description: "Antecipe e responda as perguntas mais comuns sobre seus serviços."
  },
  {
    icon: "fa-handshake",
    title: "Serviços oferecidos",
    description: "Apresente de forma clara e atrativa todos os serviços que você oferece."
  },
  {
    icon: "fa-address-card",
    title: "Informações de contato",
    description: "Disponibilize todos os canais para que seus clientes entrem em contato."
  }
];

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <Card className="p-6 border border-psi-100 rounded-lg hover:border-psi-400 transition-colors duration-300">
      <CardContent className="p-0">
        <div className="text-psi-500 mb-4">
          <i className={`fa-solid ${icon} text-2xl`}></i>
        </div>
        <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function Features() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">Tudo que você precisa em um único lugar</h2>
          <div className="w-20 h-1 bg-psi-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">
            Além disso, você vai ter uma página linda e 100% personalizada para atualizar suas informações profissionais:
          </p>
        </div>
        
        <div className="mb-12 max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <video 
            controls
            width="100%" 
            height="auto"
            className="aspect-video"
            preload="metadata"
            poster="/attached_assets/print notion .png"
          >
            <source src="/videos/demo-video.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
