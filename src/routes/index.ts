import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  let age: number = 90;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }

  res.render('pages/home', {
    name: 'Bruno',
    lastName: 'Pires',
    age: 90,
    showOld,
    products: [
      { title: 'Produto X', price: 10 },
      { title: 'Produto Y', price: 15 },
      { title: 'Produto W', price: 20 },
    ],
    frasesDoDia: [],
  });
});

router.get('/contato', (req: Request, res: Response) => {
  res.render('pages/contato', {});
});

router.get('/sobre', (req: Request, res: Response) => {
  res.render('pages/sobre', {});
});

router.get('/nome', (req: Request, res: Response) => {
  let nome: string = req.query.nome as string;
  let idade: string = req.query.idade as string;

  res.render('pages/nome', {
    nome,
    idade,
  });
});

router.get('/idade', (req: Request, res: Response) => {
  let mostrarIdade: boolean = false;
  let idade: number = 0;

  if (req.query.ano) {
    let anoNascimento: number = parseInt(req.query.ano as string);
    let anoAtual: number = new Date().getFullYear();
    idade = anoAtual - anoNascimento;
    mostrarIdade = true;
  }

  res.render('pages/idade', {
    idade,
    mostrarIdade,
  });
});

export default router;
