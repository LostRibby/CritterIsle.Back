const Score = require('../models/Score.model');

const scoreController = {
    postScore: async (req, res) => {
        try {
            
            console.log("BODY:", req.body);

            const { score } = req.body;

            const newScore = new Score({
                token,
                score
            });

            await newScore.save();

            res.status(201).json(newScore);

        } catch (err) {
            console.error(err);

            res.status(500).json({
                error: err.message,
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const scores = await Score.find()
                .populate("user", "firstname lastname")
                .sort({ score: -1 })
                .limit(10);

            res.json(scores);

        } catch (err) {
            console.error(err);

            res.status(500).json({
                success: false,
                message: "je n'ai pas trouvé ton score",
                error: err.message,
            });
        }
    }
};

module.exports = scoreController;
