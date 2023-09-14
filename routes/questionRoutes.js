import express from "express";
import { Question } from "../models/questionModel.js";

const router = express.Router(); // initialisation du router

// router.use() --> middleware utilisé pour tous les types de requête http
// router.get(), .post(), .put(), .delete()

// récupérer toutes les questions
router.get("/", (req, res) => {
    try {
        console.log(req.body);
        res.status(200).send(req.body);
    } catch (err) {
        res.status(400);
    }
});

// récupérer une question
router.get("/:id", (req, res) => {
    try {
        res.status(200).send({ message: "la question avec id " + req.params.id + " est récupérée" });
    } catch (err) {
        res.status(400);
    }
});

// poster une question
router.post("/", async (req, res) => {
    const questionAsk = new Question(req.body);

    try {
        await questionAsk.save();
        res.status(201).send(questionAsk);
    } catch (err) {
        res.status(400).send(err);
    }
});

// mettre à jour une question
router.put("/:id", (req, res) => {
    try {
        res.status(200).send({ message: "la question avec id " + req.params.id + " est mise à jour" });
    } catch (err) {
        res.status(400);
    }
});

// supprimer une question
router.delete("/:id", (req, res) => {
    try {
        res.status(200).send({ message: "la question avec id " + req.params.id + " est supprimée" });
    } catch (err) {
        res.status(400);
    }
});

export default router;







