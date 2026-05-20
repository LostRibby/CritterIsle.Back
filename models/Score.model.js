 const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const ScoreSchema = new Schema( 
    {
user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
},
score :{
    type: Number,
    required: true,
}, 
},
{
    timestamps : true,

}, 
); 
const Score = model('Score',ScoreSchema);
module.exports = Score; 