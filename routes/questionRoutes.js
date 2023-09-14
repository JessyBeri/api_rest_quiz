import express from "express";
import { Question } from "../models/questionModel.js";

const router = express.Router(); // initialisation du router

// router.use() --> middleware utilisé pour tous les types de requête http
// router.get(), .post(), .put(), .delete()

// récupérer toutes les questions, http://localhost:3000/questions
router.get("/", async (req, res) => {
    try {
        const allQuestions = await Question.find();
        res.status(200).send(allQuestions); // status 200 --> ok, request succeded
    } catch (err) {
        res.status(500).send(err); // status 500 --> Internal server error, The server has encountered a situation it does not know how to handle.
    }
});

// récupérer une question, http://localhost:3000/questions/:id
router.get("/:id", async (req, res) => {
    try {
        const oneQuestion = await Question.findById(req.params.id);

        // si aucun id (donc question) n'est trouvé --> erreur 404, sinon question récupérée
        if (!oneQuestion) {
            res.status(404).send({ error: "question non trouvée" });
        } else {
            res.status(200).send(oneQuestion);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// poster une question, http://localhost:3000/questions
router.post("/", async (req, res) => {
    // Méthode avec save()
    // const questionAsk = new Question(req.body);

    // try {
    //     await questionAsk.save();
    //     res.status(201).send(questionAsk);
    // } catch (err) {
    //     res.status(400).send(err);
    // }

    //Autre méthode avec create()
    try {
        const { question, multiple_choice } = req.body;

        const questionAsk = await Question.create({
            question,
            multiple_choice,
        });

        return res.status(201).send(questionAsk); // status 201 (created)
    } catch (error) {
        return res.status(400).send({ error: error }); // status 400 (bad request)
    }
});

// mettre à jour une question, http://localhost:3000/questions/:id
router.put("/:id", async (req, res) => {
    try {
        const updateQuestion = await Question.findByIdAndUpdate(req.params.id);
        res.status(200).send(updateQuestion);
    } catch (err) {
        res.status(400).send(err);
    }
});

// supprimer une question, http://localhost:3000/questions/:id
router.delete("/:id", (req, res) => {
    try {
        res.status(200).send({ message: "la question avec id " + req.params.id + " est supprimée" });
    } catch (err) {
        res.status(400);
    }
});

export default router;







