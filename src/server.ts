import express, { Request, Response } from 'express';
import path from 'path'; // caminho absoluto
import mustache from 'mustache-express';
import mainRoutes from './routes/index';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views')); // Dizendo onde estão os meus arquivos HTML no meu projeto
server.engine('mustache', mustache()); // usando o motor de renderização mustache

server.use(express.static(path.join(__dirname, '../public'))); // Rotas de arquivos estáticos __dirname epecifica o diretório do arquivo que eu estou executando(server.ts)

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send('Página não encontrada!');
});

server.listen(80);
