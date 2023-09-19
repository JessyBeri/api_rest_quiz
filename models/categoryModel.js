import mongoose from "mongoose";
import { Question } from "./questionModel.js";

const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
    },
});

// Middleware qui s'exécute automatiquement lorsque l'on remove une categorie
categorySchema.pre("remove", function async(next) {
    const category = this;
    console.log(category);
    next();
});

export const Category = mongoose.model("Categories", categorySchema);