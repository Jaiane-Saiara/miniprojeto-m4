// Importa o módulo express
import express from 'express';
// Importa o controlador de habilidades
import * as habilidadesController from '../controllers/habilidadesController.js';

// Cria um roteador Express
const router = express.Router();

// Define a rota para obter todas as habilidades
router.get('/habilidades', habilidadesController.getHabilidades);
// Define a rota para obter todos os oferecedores de habilidades
router.get('/oferecedores', habilidadesController.getOferecedores);
// Define a rota para procurar uma habilidade específica
router.get('/procurar', habilidadesController.procurarHabilidade);
// Define a rota para obter uma habilidade específica pelo ID
router.get('/habilidade/:id', habilidadesController.getHabilidadePorId);

// Exporta o roteador para ser usado no servidor
export default router;