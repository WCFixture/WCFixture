const { Router } = require('express');
const Match = require('../DB/Schemas/Match.js');
const User = require('../DB/Schemas/User.js');


const userRoutes = Router();


// Routes:

userRoutes.get('/get_prode/:email', async (req, res) => {
    try {
        const { email } = req.params;
        let json = await User.findOne({ email: email })
        res.status(200).json(json.prode);
    } catch (error) {
        return res.status(400).json({ "Error": error.message });
    }
});

userRoutes.post('/update_prode/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const { matchId, result } = req.body;
        let json = await User.findOne({ email: email })
        json.prode[matchId] = result
        if (Object.keys(json.prode).length === 49) {
            json.prodeComplete = true
        }
        json.markModified('prode')
        await json.save()
        res.status(200).json(json.prode);
    } catch (error) {
        return res.status(400).json({ "Error": error.message });
    }
});

userRoutes.post('/update_points/:matchId', async (req, res) => {
    const { matchId } = req.params;
    try {
        let users = await User.find({ prodeComplete: true })
        let match = await Match.findOne({ id: matchId })
        let draw = match.result.local === match.result.away
        let localWins = match.result.local > match.result.away
        let awayWins = match.result.local < match.result.away
        for (let i = 0; i < users.length; i++) {
            let predict = users[i].prode[String(matchId)]
            if (predict.local === match.result.local && predict.away === match.result.away) {
                if (predict.local > 3 || predict.away > 3) {
                    users[i].prode.points += 25
                    users[i].markModified('prode.points');
                    await users[i].save()
                    continue
                }
                users[i].prode.points += 20
                users[i].markModified('prode.points');
                await users[i].save()
                continue
            } else if ((draw && predict.local === predict.away) || (localWins && predict.local > predict.away) || (awayWins && predict.local < predict.away)) {
                users[i].prode.points += 5
                users[i].markModified('prode.points');
                await users[i].save()
                continue
            }
        }
        res.status(204).json({ complete: true });
    } catch (error) {
        return res.status(400).json({ "Error": error.message });
    }
});


userRoutes.get('/chequear_user/', async (req, res) => {
    try {
        const { email, picture, name } = req.query;
        let json = await User.findOne({ email: email })
        if (!json) {
            await User.create({ email, prodeComplete: false, prode: {points: 0}, picture, name })
        res.status(200).json(json);
    } } catch (error) {
        return res.status(400).json({ "Error": error.message});
    }
});

userRoutes.get("/prode_points", async (req, res) => {
    try{
        let json = await User.find({prodeComplete: true}).select({"name": 1, "_id": 0, "picture": 1, "prode.points": 1 }).sort({"prode.points":"desc"})
        json = json.filter(value => JSON.stringify(value) !== '{}');
        res.status(200).json(json);
    } catch (error){
        return res.status(400).json({ "Error": error.message });
    }
});

module.exports = userRoutes;