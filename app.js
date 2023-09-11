import express from 'express';

// Création d'un serveur express
const app = express();

// Définition du port 3000
const port = 3000;

// MIDDLEWARE
// app.use() --> use() est utilisé dans la gestion des fonctions du middleware
app.use(express.json()); // Parse les données venant du client vers le serveur au format json

// test affichage
// app.get() --> get() dit au serveur quoi faire lorsqu'une route lui est donnée

app.get("/", (req, res) => {
    res.send({test: "test"});
});

app.get("/questions/", (req, res) => {
    res.send("envoi post question");
});

app.get("/questions/:id", (req, res) => {
    let id = req.params.id;
    res.send("question de l'id " + id);
});

// Lancement du serveur express
app.listen(port, () => {
    console.log(`Serveur actif sur le port ${port} : http://localhost:3000/`);
});