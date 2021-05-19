var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Data = require('../schema/Data');

const dbRoute =
    'mongodb://localhost/dbname1';//*

    mongoose.connect(dbRoute, { useUnifiedTopology: true });//*
let db = mongoose.connection;//*

db.once('open', () => console.log('connected to the database'));//*

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));//*

let idAssign = 4;
let stocks =[
    {id:1, name: "Apple", vol: "10"},
    {id:2, name: "Tesla", vol: "15"},
    {id:3, name: "GameStop", vol: "20"}
];

/* GET home page. */
router.get('/stocks/', function(req, res, next) {
        Data.find(function (err, data) {
            if (err) {
                return res.json({ success: false, error: err });
            } 
            return res.json({ success: true, info: data })
            
        });
});
//localhost:3001/stocks

router.post('/stocks/', function (req, res, next) {
    let newVol = req.body.vol;
    let newStock = req.body.name;
    console.log({id: idAssign, name: newStock, vol: newStock});
    
    let stuffToAdd = new Data();
    stuffToAdd.vol = newVol;
    stuffToAdd.name = newStock;
    stuffToAdd.id = idAssign;

    stuffToAdd.save((err)=>{
        if(err){
            return res.json({success:false, error:err});
        }else{
            return res.json({success: true})
        }
    })
    idAssign++;
})
router.delete('/stocks/', function (req, res, next) {
    let newVol = req.body.vol;
    let newStock = req.body.name;
    Data.findOneAndRemove({ name: req.body.name }, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });

    
    
})
router.put('/stocks/', function (req, res, next) {
    Data.findOneAndUpdate({ name: req.body.name }, req.body, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
   //stocks.find();
 
})
module.exports = router;