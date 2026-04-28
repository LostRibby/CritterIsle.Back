const {Schema, model} = require('mongoose'); 

const categorySchema = new Schema({
    season: {
        type : Array,
        required: true,
        trim: true 
    }, 
    location: {
        type: String, 
        required: true, 
        trim: true
    }, 
    
},{
    collection : 'Category', 
    timestamps: true
} 
); 

const Category = model('Category', categorySchema); 

module.exports = Category;