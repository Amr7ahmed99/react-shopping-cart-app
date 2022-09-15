const mongoose=  require('mongoose');
const bodyParser= require('body-parser');
// const express= require('express');
const app= express();
const router=  require('./routes/Routes');

app.use(bodyParser.json());  //Middleware to parse each response into json
app.use('/', router);
mongoose.connect('mongodb://localhost/react-shopping-cart',{useNewUrlParser: true, useUnifiedTopology:  true})
.then( res=> console.log("successfully connected on DB"))
.catch( err=> console.log("can not connect to mongoDB"));



app.listen(27017, ()=>{
    console.log("Server Is Running Now")
});//Listen on port 27017

// const express= require('express');
// const mongoose= require('mongoose');
// const bodyParser= require('body-parser');
// const app= express();

// app.use( bodyParser.json() )//Middleware to parse each response into json

// mongoose.connect('mongodb://localhost/react-shopping-cart',{useNewUrlParser: true, useUnifiedTopology:  true})
// .then( res=> console.log("successfully connected on DB"))
// .catch( err=> console.log("can not connect to mongoDB"));

// const Products= mongoose.model("product", new mongoose.Schema({
//         category: String,
//         description: String,
//         id: Number,
//         image: String,
//         price: Float,
//         rating:  {String:Number}, //{rate: 3.9, count: 120}
//         title: String
// }));


// app.get('/api/products', async (req, res)=>{
//     const products= await Products.find();
//     res.send(products);
// });

// app.post('/api/products', async (req, res)=>{
//     const newProduct= new Products(req.body);
//     const savedPro= await newProduct.save();
//     res.send(savedPro);
// });


// app.delete('/api/products/:id', async (req, res)=>{
//     const deletedPro= await Products.findByIdAndDelete(req.params.id);
//     res.send(deletedPro);
// });


// app.listen(27017, ()=>{
//     console.log("Server Is Running Now")
// });//Listen on port 3005