import express from "express";
const router = express.Router(); // initialisation du router

// router.use() --> middleware utilisé pour tous les types de requête http
// router.get(), .post(), .put(), .delete()

export default router.get("/", (req, res) => {
    try {
        res.status(200).send({ test: "test" });
    } catch (err) {
        res.status(400);
    }
});


