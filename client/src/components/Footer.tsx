export default function Footer() {
  return (
    <footer className="py-12 bg-psi-700 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <div className="mr-2">
              <i className="fa-solid fa-feather text-2xl"></i>
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold">Perfil<span className="italic">Pluma</span></h3>
              <p className="text-sm text-white text-opacity-80">A forma mais fácil de ter seu próprio site</p>
            </div>
          </div>
          
          <div className="mb-6 md:mb-0">
            <a href="http://wa.me/+5511967336619?text=Olá!%20Tenho%20interesse%20no%20PerfilPluma.%20Poderia%20me%20dar%20mais%20informações?" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-colors px-5 py-2 rounded-full text-white">
              <i className="fa-brands fa-whatsapp text-xl"></i>
              <span className="font-medium">Entre em contato</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center text-sm text-white text-opacity-80">
          <p>&copy; {new Date().getFullYear()} PerfilPluma. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
