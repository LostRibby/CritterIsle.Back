const { Schema, model, Types } = require('mongoose');

const BugSchema = Schema({
     season: {
        type : Array,
        required: true,
        trim: true 
    }, 
    location: {
        type: [String], 
        required: true, 
        trim: true
    }, 
    
},{
    collection : 'Bugs', 
    timestamps: true
} 
)
const Bug = model('Bugs', BugSchema); 
module.exports = Bug