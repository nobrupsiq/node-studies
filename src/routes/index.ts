import { Router } from 'express';
import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);
router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);
router.get('/nome', UserController.nome);
router.post('/idade-resultado', UserController.idadeAction);
router.get('/idade', UserController.idadeForm);

export default router;
