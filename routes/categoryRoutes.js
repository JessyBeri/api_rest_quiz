import express from "express";
// import { Category } from "../models/categoryModel.js";
import {
    getCategories,
    getOneCategory,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router(); // initialisation du router

// récupérer toutes les questions, http://localhost:3000/categories
categoryRouter.get("/", getCategories);

// récupérer une question, http://localhost:3000/categories/:id
categoryRouter.get("/:id", getOneCategory);

// poster une question, http://localhost:3000/categories
categoryRouter.post("/", createCategory);

// mettre à jour une question, http://localhost:3000/categories/:id
categoryRouter.put("/:id", updateCategory);

// supprimer une question, http://localhost:3000/categories/:id
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;
