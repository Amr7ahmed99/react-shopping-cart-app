const mongoose=  require('mongoose');
const proSchema= require('../schema/ProductSchema');  
const Product=  mongoose.model('product', proSchema);

module.exports=  Product;