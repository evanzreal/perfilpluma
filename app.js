import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Create a simple Planet app
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Planet - MarketingMaster 2 Design Showcase</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Playfair Display', serif;
          background: #f8f9fa;
          color: #333;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .container {
          text-align: center;
          max-width: 1000px;
          padding: 20px;
        }
        h1 {
          font-size: 6rem;
          font-weight: 700;
          margin-bottom: 0;
          background: linear-gradient(to right, #333, #666);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          font-size: 1.5rem;
          margin-top: 1rem;
          max-width: 700px;
          line-height: 1.6;
        }
        .marketing-master {
          margin-top: 3rem;
          text-align: left;
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .marketing-master h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #333;
        }
        .components {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .component {
          padding: 1rem;
          background: #f1f5f9;
          border-radius: 6px;
        }
        .component h3 {
          margin-top: 0;
          font-size: 1.2rem;
        }
        .component p {
          font-size: 0.9rem;
          margin: 0;
        }
      </style>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    </head>
    <body>
      <div class="container">
        <h1>Planet</h1>
        <div class="marketing-master">
          <h2>MarketingMaster 2 Design</h2>
          <p>O MarketingMaster 2 é um aplicativo moderno e elegante para profissionais de marketing digital. Abaixo estão os componentes principais encontrados no design:</p>
          
          <div class="components">
            <div class="component">
              <h3>Hero Section</h3>
              <p>Seção de destaque com texto gradiente e chamada à ação</p>
            </div>
            <div class="component">
              <h3>Header</h3>
              <p>Navegação com links para seções principais</p>
            </div>
            <div class="component">
              <h3>Features</h3>
              <p>Lista de recursos com ícones e descrições</p>
            </div>
            <div class="component">
              <h3>Testimonials</h3>
              <p>Depoimentos de clientes com imagens</p>
            </div>
            <div class="component">
              <h3>Benefits</h3>
              <p>Destaque dos benefícios do produto</p>
            </div>
            <div class="component">
              <h3>CTA</h3>
              <p>Chamada à ação com botão de destaque</p>
            </div>
            <div class="component">
              <h3>FAQ</h3>
              <p>Perguntas frequentes em formato acordeão</p>
            </div>
            <div class="component">
              <h3>Footer</h3>
              <p>Rodapé com links e informações de contato</p>
            </div>
            <div class="component">
              <h3>WhatsApp Button</h3>
              <p>Botão flutuante para contato rápido</p>
            </div>
            <div class="component">
              <h3>Pain Points</h3>
              <p>Problemas resolvidos pelo produto</p>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
});

// API endpoint for testing
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Planet API is running' });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});