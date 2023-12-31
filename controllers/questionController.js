import { Question } from "../models/questionModel.js";

// GET : récupérer toutes les questions, http://localhost:3000/questions
export const getQuestions = async (req, res) => {
    try {
        const allQuestions = await Question.find();
        res.status(200).send(allQuestions); // status 200 --> ok, request succeded
    } catch (err) {
        res.status(500).send(err); // status 500 --> Internal server error, The server has encountered a situation it does not know how to handle.
    }
};

// GET : récupérer une question, http://localhost:3000/questions/:id
export const getOneQuestion = async (req, res) => {
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
};

// POST : poster une question, http://localhost:3000/questions
export const createQuestion = async (req, res) => {
    // ---------- Méthode avec save() ----------
    // const questionAsk = new Question(req.body);

    // try {
    //     await questionAsk.save();
    //     res.status(201).send(questionAsk);
    // } catch (err) {
    //     res.status(400).send(err);
    // }

    // ---------- Autre méthode avec create() ----------
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
};

// PUT : mettre à jour une question, http://localhost:3000/questions/:id
export const updateQuestion = async (req, res) => {
    try {
        const questionToUpdate = await Question.findById(req.params.id);

        // si aucun id (donc question) n'est trouvé --> erreur 404, sinon question mis à jour
        if (!questionToUpdate) {
            res.status(404).send({ error: "mise à jour impossible, question introuvable" });
        } else {
            const updatedQuestion = await Question.findByIdAndUpdate(
                req.params.id, // id que l'on veut mettre à jour
                req.body, // le body que l'on veut mettre à jour
                { new: true } // retourne la question après sa mise à jour (retourne updatedQuestion)
            );
            res.status(200).send(updatedQuestion);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

// DELETE : supprimer une question, http://localhost:3000/questions/:id
export const deleteQuestion = async (req, res) => {
    try {
        const questionToDelete = await Question.findById(req.params.id);

        // si aucun id (donc question) n'est trouvé --> erreur 404, sinon question supprimée
        if (!questionToDelete) {
            res.status(404).send({ error: "suppression impossible, question introuvable" });
        } else {
            await Question.deleteOne(questionToDelete); // used to delete the first document that matches the conditions from the collection
            res.status(200).send(questionToDelete); // renvoie la question supprimée
        }
    } catch (err) {
        res.status(500).send(err);
    }
};
