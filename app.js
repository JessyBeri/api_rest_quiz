import express from 'express';

// Création d'un serveur express
const app = express();

// Définition du port 3000
const port = 3000;

// test affichage
app.get('/test/', (req, res) => {
    res.send('test');
})

// Lancement du serveur express
app.listen(port, () => {
    console.log(`Serveur actif sur le port ${port} : http://localhost:3000/`);
});