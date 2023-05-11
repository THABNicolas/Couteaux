import {getAllAccounts,createAccount,updateAccount} from '../services/comptes.service.js';
import bcrypt from 'bcrypt';

export const authentification = (req, res) => {
    let identifiant = req.body.identifiant;
    let mdp = req.body.mdp;
    getAllAccounts((err, utilisateurs) => {
        let utilisateur = utilisateurs.find(u => u.identifiant === identifiant);
        if (err) {
            console.error(err);
            return res.status(400).send({err: err});
        }
        else if (utilisateur===undefined) {
            return res.status(200).send({message: "Nom d'utilisateur inexistant", utilisateur: null});
        }
        bcrypt.compare(mdp, utilisateur.mdp, (errCompare, result) => {
            if (errCompare || !result) {
                return res.status(200).send({message: "Mot de passe incorrect", utilisateur: null});
            }
            else if (!utilisateur.actif){
                return res.status(200).send({message: "Compte non actif", utilisateur: null});
            }
            else {
                var usersent = Object.assign({}, {nom: utilisateur.nom, prenom: utilisateur.prenom, identifiant: utilisateur.identifiant, actif: utilisateur.actif, role: utilisateur.role});
                return res.status(200).send({message: "Connexion réussie", utilisateur: usersent});
            }
        });
    });
};

export const inscription = (req, res) => {
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let identifiant = req.body.identifiant;
    let mdp = req.body.mdp;
    let actif = true;
    let role = req.body.role;
    bcrypt.hash(mdp, 10, (err, hash) => {
        if (err) {
            console.error(err);
            res.status(400).send({message: "Hachage non réussi", err: err});
        } else {
            createAccount(nom, prenom, identifiant, hash, actif, role, (err) => {
                if (err) {
                    console.error(err);
                    res.status(400).send({message: "Erreur de création", err: err});
                } else {
                    res.status(200).send({message: "Création réussie"});
                }
            });
        }
    });
};

export const comptes = (req, res) => {
    getAllAccounts((err,comptes) => {
        var tab = [];
        comptes.forEach(c => {
            var cv = Object.assign({}, {id: c.id, nom: c.nom, prenom: c.prenom, identifiant: c.identifiant, actif: c.actif, role: c.role});
            tab.push(cv);
        });
        return res.status(200).send({tab});
    })
};

export const modification = (req, res) => {
    let id = req.body.id;
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let identifiant = req.body.identifiant;
    let actif = req.body.actif;
    let role = req.body.role;
    updateAccount(id, nom, prenom, identifiant, actif, role, (err) => {
        if (err) {
            console.error(err);
            res.status(400).send({message: "Erreur de modification", err: err});
        } else {
            res.status(200).send({message: "Modification réussie"});
        }
    });
};