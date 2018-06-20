var express = require('express');
var router = express.Router();
var sequelize = require('C:/Users/ajrar/Documents/JavaScriptMay2018/GroupChallenege/pieserver/dp.js');
var Pie = sequelize.import('C:/Users/ajrar/Documents/JavaScriptMay2018/GroupChallenege/pieserver/models/Pie.js');

router.post('/postpie', (req, res)=>{
    Pie.create({
        userEmail: req.body.Pie.userEmail,
        nameOfPie: req.body.Pie.nameOfPie,
        baseOfPie: req.body.Pie.baseOfPie,
        crust: req.body.Pie.crust,
        servings: req.body.Pie.servings,
        rating: req.body.Pie.rating,
        timeToBake: req.body.Pie.timeToBake
    }).then(dataFromDatabase =>{
        res.send('test pie went through')
    })
})
// /****************************/
router.get('/getall', (req, res)=>{  
    Pie.findAll({
    }).then(dataFromDatabase=> {
        res.send(dataFromDatabase)
    })
})
router.get('/:getpie', (req, res)=>{
    // var nameofpie= Pie.nameOfPie
    Pie.findOne({ 
        where: {nameOfPie: req.params.getpie}
    }).then(dataFromDatabase=>{
        res.send(dataFromDatabase)
    })
});

module.exports=router;