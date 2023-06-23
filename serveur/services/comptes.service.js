import mysql from 'mysql';
import config from '../db/config.js';
import sql from 'mssql';
import Sconfig from '../db/config2.js';

export const getAllAccounts = async(callback) => {
    const connexion = mysql.createConnection(config);
    connexion.connect(function(err){
        if (err){
            console.log(err)
            return callback(err,null);
        }
        connexion.query('SELECT id,nom,prenom,identifiant,mdp,actif,role FROM UTILISATEURS', function(err,result){
            if (err){
                console.log(err)
                return callback(err,null);
            }
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

export const getAllCouteaux = async (callback) => {
    try {
        await sql.connect(Sconfig);
        const couteaux = await sql.query("SELECT ARTCODE, ARTDESIGNATION FROM ARTICLES INNER JOIN ARTFAMILLES ON ARTICLES.AFMID = ARTFAMILLES.AFMID WHERE ARTFAMILLES.AFMCODE = 'COUTEAU' AND ARTICLES.ARTISACTIF='O'");
        await sql.close();
        return callback(null, couteaux.recordsets[0]);
    } catch (error) {
        // Gérer l'erreur ici
        return callback(error, null);
    }
};

export const updateCouteau = async(artcode, artdesignation, callback) => {
    await sql.connect(Sconfig);
    await sql.query(`UPDATE ARTICLES SET ARTDESIGNATION = '${artdesignation}' WHERE ARTCODE = '${artcode}'`);
    await sql.close();
    return callback(null);
};