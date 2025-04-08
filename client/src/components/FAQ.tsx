import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "Como é o PerfilPluma?",
    answer: "É um modelo pronto no Notion para você criar sua página online profissional e linda, sem precisar entender de tecnologia."
  },
  {
    question: "Preciso saber usar o Notion?",
    answer: "Não precisa! O template tá 100% pronto, é só preencher! Além disso, entregamos um tutorial passo a passo pra te ajudar em tudo."
  },
  {
    question: "Posso personalizar a página com a minha identidade visual?",
    answer: "Com certeza! Você muda cores, fontes, imagens... tudo do seu jeito."
  },
  {
    question: "O template funciona em celular e tablet?",
    answer: "Sim! A página fica linda em qualquer dispositivo."
  },
  {
    question: "Tem alguma taxa extra?",
    answer: "Você paga o template uma única vez e ele é seu pra sempre! Você pode editar e arrumar quantas vezes quiser. A plataforma que usamos para criá-lo é o Notion, um software que oferece Planos de assinatura pagos caso você queira usar outros recursos, mas eles não são necessários para publicar seu site."
  },
  {
    question: "E se eu tiver dúvidas / dificuldades?",
    answer: "A gente te ajuda! Temos suporte por email e whatsapp pra orientações :)"
  },
  {
    question: "Posso integrar a página com minhas redes sociais?",
    answer: "Sim! É super fácil colocar os links das suas redes sociais na página, já até deixamos os botões pré-configurados."
  },
  {
    question: "Que tipo de conteúdo posso colocar na página?",
    answer: "Você pode colocar sua apresentação, serviços, especialidades, contato, currículo, vídeos, dúvidas frequentes... tudo o que você quiser!"
  }
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-20 bg-cream-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">Perguntas Frequentes</h2>
          <div className="w-20 h-1 bg-psi-500 mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-md shadow-sm">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
              >
                <AccordionTrigger className="py-4 px-6 font-display text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <p className="text-muted-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}