const { Router } = require('express');

const Match = require('../DB/Schemas/Match.js');


const matchsRoutes = Router();


// Routes:


matchsRoutes.post('/new_match', async (req, res) => {
    try {
        const { id, status, countries, date, instance } = req.body;
        let json = await Match.create({ id, status, countries, date, instance });
        res.status(201).json(json);
    } catch (error) {
        return res.status(400).json({ "Error": error.message });
    }
});

matchsRoutes.get('/get_group/:grupo', async (req, res) => {
    try {
        const { grupo } = req.params;
        let json = await Match.find({group: grupo});
        res.status(200).json(json);
    } catch (error) {
        return res.status(400).json({ "Error": error.message });
    }
});

matchsRoutes.get('/get_all_from_groups', async (req, res) => {
    try {
        let json = await Match.find({ instance: "groups" });
        res.status(200).json(json);
    } catch (error) {
        return res.status(400).json({ "Error": error.message });
    }
});

matchsRoutes.get('/get_all_from_playoff', async (req, res) => {
    try {
        let json = await Match.find({ instance: "playoff" });
        res.status(200).json(json);
    } catch (error) {
        return res.status(400).json({ "Error": error.message });
    }
});

matchsRoutes.post('/update_result', async (req, res) => {
    const { matchId, result } = req.body;
    try {
        let json = await Match.findOne({ id: matchId });
        json.result = result;
        json.status = "finished"
        json.markModified('result');
        await json.save();
        res.redirect(307, "/user/update_points/" + matchId)
    } catch (error) {
        return res.status(400).json({ "Error": error.message });
    }
});


module.exports = matchsRoutes;