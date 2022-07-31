const mongoose=  require('mongoose');

const ProductSchema= new mongoose.Schema({
    category: String,
    description: String,
    id: Number,
    image: String,
    price: Number,
    // rating:  {String:Number}, //{rate: 3.9, count: 120}
    title: String
});

module.exports=  ProductSchema;