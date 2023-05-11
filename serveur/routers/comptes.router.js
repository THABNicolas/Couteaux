import express from 'express';
import {comptes,authentification,inscription,modification} from '../controllers/comptes.controller.js';

let compte_router = express.Router();

compte_router.get('/comptes',comptes);
compte_router.post('/connexion',authentification);
compte_router.post('/inscription',inscription);
compte_router.post('/modification',modification);

export default compte_router;