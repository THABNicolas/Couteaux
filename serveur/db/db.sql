DROP TABLE IF EXISTS UTILISATEURS;
DROP TABLE IF EXISTS ACTIONS;

CREATE TABLE UTILISATEURS(
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    identifiant VARCHAR(50),
    mdp VARCHAR(255),
    actif BOOLEAN,
    role VARCHAR(50),
    PRIMARY KEY(id)
);

INSERT INTO UTILISATEURS(nom,prenom,identifiant,mdp,actif,role) VALUES
('nom1','prenom1','identifiant1','$2b$10$ZAes8nq2wIiUlpYd46nW/.AVn/Xdg1Ix3f21pb9MLBbNuTadF1yG6',TRUE,'utilisateur'),
('nom2','prenom2','identifiant2','$2b$10$8h7ucSnd2Wjtt7.LDHvOke.Ff5GRydk2bvFSAN8JF/dJznBrJJF1m',FALSE,'utilisateur'),
('admin','admin','admin','$2b$10$TIMdixGKcuMVfuaGvDIYEu2lSo8kFWABmC0BvJg4j7M422hkor2QC',TRUE,'admin');

CREATE TABLE ACTIONS(
    id INT NOT NULL AUTO_INCREMENT,
    date_action DATETIME,
    user VARCHAR(50),
    action_type VARCHAR(100),
    PRIMARY KEY(id)
);