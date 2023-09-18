import express from "express";
import { Question } from "../models/questionModel.js";
import {
    getQuestions,
    getOneQuestion,
    createQuestion,
    updateQuestion,
    deleteQuestion,
} from "../controllers/questionController.js";

const router = express.Router(); // initialisation du router

// router.use() --> middleware utilisé pour tous les types de requête http
// router.get(), .post(), .put(), .delete()

// récupérer toutes les questions, http://localhost:3000/questions
router.get("/", getQuestions);

// récupérer une question, http://localhost:3000/questions/:id
router.get("/:id", getOneQuestion);

// poster une question, http://localhost:3000/questions
router.post("/", createQuestion);

// mettre à jour une question, http://localhost:3000/questions/:id
router.put("/:id", updateQuestion);

// supprimer une question, http://localhost:3000/questions/:id
router.delete("/:id", deleteQuestion);

export default router;







