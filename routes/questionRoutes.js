import express from "express";
import { Question } from "../models/questionModel.js";

const router = express.Router(); // initialisation du router

// router.use() --> middleware utilisé pour tous les types de requête http
// router.get(), .post(), .put(), .delete()

// récupérer toutes les questions, http://localhost:3000/questions
router.get("/", (req, res) => {
    try {
        console.log(req.body);
        res.status(200).send(req.body);
    } catch (err) {
        res.status(400);
    }
});

// récupérer une question, http://localhost:3000/questions/:id
router.get("/:id", (req, res) => {
    try {
        res.status(200).send({ message: "la question avec id " + req.params.id + " est récupérée" });
    } catch (err) {
        res.status(400);
    }
});

// poster une question, http://localhost:3000/questions
router.post("/", async (req, res) => {
    // const questionAsk = new Question(req.body);

    // try {
    //     await questionAsk.save();
    //     res.status(201).send(questionAsk);
    // } catch (err) {
    //     res.status(400).send(err);
    // }

    //autre méthode
    try {
        const { question, multiple_choice } = req.body;

        const questionAsk = await Question.create({
            question,
            multiple_choice
        })

        return res.status(201).send(questionAsk);
    } catch (error) {
        return res.status(400).send({"error":error})
    }
});

// mettre à jour une question, http://localhost:3000/questions/:id
router.put("/:id", (req, res) => {
    try {
        res.status(200).send({ message: "la question avec id " + req.params.id + " est mise à jour" });
    } catch (err) {
        res.status(400);
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







