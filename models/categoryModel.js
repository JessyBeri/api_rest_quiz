import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    category_name: String,
});

export const Question = mongoose.model("Categories", categorySchema);
