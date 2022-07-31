const express= require('express');
const router= express.Router();
const Product=  require('../model/ProductModel');


router.get('/api/products', async (req, res)=>{
    const products= await Product.find();// (Send Get All Products Req To Server)
    res.send(products);// (Send All Products JSON To Clinet)
});

router.post('/api/products',  async (req, res)=>{
    const newProduct= new Product(req.body);// (Create new Document In DB)
    const savedProduct= await newProduct.save();// (Save New Product To Server)
    res.send(savedProduct);// (Send The Saved Product To Client)
});

router.delete('/api/products/:id', async (req, res)=>{
    const deletedPro= await Product.findByIdAndDelete(req.params.id); // (Find Product By Id And Deleted It From DB)
    res.send(deletedPro);// (Send The Deleted Product To Client)
});


module.exports= router;