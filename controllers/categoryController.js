import { Category } from "../models/categoryModel.js";

// GET : récupérer toutes les catégories, http://localhost:3000/categories
export const getCategories = async (req, res) => {
    try {
        const allCategories = await Category.find();
        res.status(200).send(allCategories); // status 200 --> ok, request succeded
    } catch (err) {
        res.status(500).send(err); // status 500 --> Internal server error, The server has encountered a situation it does not know how to handle.
    }
};

// GET : récupérer une catégorie, http://localhost:3000/categories/:id
export const getOneCategory = async (req, res) => {
    try {
        const oneCategory = await Category.findById(req.params.id);

        // si aucun id (donc question) n'est trouvé --> erreur 404, sinon question récupérée
        if (!oneCategory) {
            res.status(404).send({ error: "catégorie non trouvée" });
        } else {
            res.status(200).send(oneCategory);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

// POST : poster une catégorie, http://localhost:3000/categories
export const createCategory = async (req, res) => {
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
        const { category_name } = req.body;

        const category = await Category.create({
            category_name,
        });

        return res.status(201).send(category); // status 201 (created)
    } catch (error) {
        return res.status(400).send({ error: error }); // status 400 (bad request)
    }
};

// PUT : mettre à jour une catégorie, http://localhost:3000/categories/:id
export const updateCategory = async (req, res) => {
    try {
        const categoryToUpdate = await Category.findById(req.params.id);

        // si aucun id (donc question) n'est trouvé --> erreur 404, sinon catégorie mis à jour
        if (!categoryToUpdate) {
            res.status(404).send({ error: "mise à jour impossible, categorie introuvable" });
        } else {
            const updatedCategory = await Category.findByIdAndUpdate(
                req.params.id, // id que l'on veut mettre à jour
                req.body, // le body que l'on veut mettre à jour
                { new: true } // retourne la catégorie après sa mise à jour (retourne updatedCategory)
            );
            res.status(200).send(updatedCategory);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

// DELETE : supprimer une catégorie, http://localhost:3000/qcategorie/:id
export const deleteCategory = async (req, res) => {
    try {
        const categoryToDelete = await Category.findById(req.params.id);

        // si aucun id (donc category) n'est trouvé --> erreur 404, sinon categorie supprimée
        if (!categoryToDelete) {
            res.status(404).send({ error: "suppression impossible, categorie introuvable" });
        } else {
            await Category.deleteOne(categoryToDelete); // used to delete the first document that matches the conditions from the collection
            res.status(200).send(categoryToDelete); // renvoie la category supprimée
        }
    } catch (err) {
        res.status(500).send(err);
    }
};
