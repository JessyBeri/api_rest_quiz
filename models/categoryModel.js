import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    category_name: String,
});

export const Category = mongoose.model("Categories", categorySchema);
