import { Card, CardContent } from "@/components/ui/card";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
};

const testimonials: TestimonialProps[] = [
  {
    quote: "Em apenas um dia consegui montar toda a minha página profissional e já comecei a compartilhar com meus clientes. O template é super intuitivo e ficou com a minha cara!",
    name: "Ana Clara",
    role: "Psicóloga Clínica",
    imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "O Guia de Autoconhecimento da Marca Pessoal foi fundamental para eu conseguir me posicionar melhor profissionalmente. Agora tenho muito mais segurança para falar do meu trabalho.",
    name: "Juliana Mendes",
    role: "Psicóloga Organizacional",
    imageSrc: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  }
];

function Testimonial({ quote, name, role, imageSrc }: TestimonialProps) {
  return (
    <Card className="bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-yellow-400 flex">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <p className="italic mb-4">
          "{quote}"
        </p>
        <div className="flex items-center">
          <img src={imageSrc} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-gray-800">O que nossos clientes dizem</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
