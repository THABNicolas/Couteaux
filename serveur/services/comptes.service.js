import mysql from 'mysql';
import config from '../db/config.js';

export const getAllAccounts = async(callback) => {
    const connexion = mysql.createConnection(config);
    connexion.connect(function(err){
        if (err) return callback(err,null);
        connexion.query('SELECT id,nom,prenom,identifiant,mdp,actif,role FROM utilisateurs', function(err,result){
            if (err) return callback(err,null);
            connexion.end();
            let utilisateurs = result.map(u => {
                return {
                    id: u.id,
                    nom: u.nom,
                    prenom: u.prenom,
                    identifiant: u.identifiant,
                    mdp: u.mdp,
                    actif: u.actif,
                    role: u.role
                };
            });
            return callback(null,utilisateurs);
        });
    });
};

export const createAccount = async(nom, prenom, identifiant, mdp, actif, role, callback) => {
    const connexion = mysql.createConnection(config);
    connexion.connect(function(err){
        if (err) return callback(err);
        connexion.query('INSERT INTO UTILISATEURS(nom,prenom,identifiant,mdp,actif,role) VALUES(?,?,?,?,?,?)',[nom,prenom,identifiant,mdp,actif,role], function(err){
            if (err) return callback(err);
            connexion.end();
            return callback(null);
        });
    });
};

export const updateAccount = async(id, nom, prenom, identifiant, actif, role, callback) => {
    const connexion = mysql.createConnection(config);
    connexion.connect(function(err){
        if (err) return callback(err);
        connexion.query('UPDATE UTILISATEURS SET nom=?,prenom=?,identifiant=?,actif=?,role=? WHERE id=?',[nom,prenom,identifiant,actif,role,id], function(err){
            if (err) return callback(err);
            connexion.end();
            return callback(null);
        });
    });
};