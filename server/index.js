const express = require('express');
const mongoose = require('mongoose');
const app = express();
const BirdsModel = require("./models/abc")



app.use(express.json());

mongoose.connect("mongodb+srv://DeeKoders:deekay0312@abc.i8xwk.mongodb.net/awan-birds-care?retryWrites=true&w=majority",{
    useNewUrlParser: true
});

app.get("/", async (req, res)   =>{
    const bird = new  BirdsModel({
        birdName: 'Macaw Parrots',
        temprature: 'Mid Weather',
        size: '12 inches',
        food: 'Nuts and Seeds',
        details: 'Macaws are typically large, brightly colored parrots with long tail feathers. The characteristic that distinguishes macaws from other members of the parrot family is their bare facial areas that vary in size and pattern according to different species.',
    });
     try{
        await bird.save();

    }
    catch(err){
        console.log(err);

    }
} );

app.listen(3001, ()=>{
    console.log("Server is Running on Port 3001")
})
