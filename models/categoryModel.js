import mongoose from "mongoose";

export const categorySchema = new mongoose.Schema({
    category_name: String,
});
