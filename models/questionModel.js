import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
        },
        multiple_choice: [
            {
                answer: {
                    type: String,
                    required: true,
                },
                isCorrect: {
                    type: Boolean,
                    required: true,
                    default: false,
                },
            },
        ],
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Question = mongoose.model("Questions", questionSchema);
