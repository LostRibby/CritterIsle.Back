const {Schema, model} = require('mongoose');

const ScoreSchema = new Schema( 
    {
user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
},
Score : Number,
createdAt: {
    type : Date,
    default : date.now,

},
}); 
const Score = model('Scores',ScoreSchema);
module.exports = Score; 