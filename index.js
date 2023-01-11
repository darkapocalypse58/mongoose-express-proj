const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const Product = require('./models/product')
//Mongoose Server
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("mongo db CONNECTION OPEN!!!")
})

.catch(err => {
    console.log("Error connection!!")
    console.log(err);
}) 

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.listen(port, () => {
    console.log("Listening to Port:"+ port)
})

// const Product = mongoose.model('Product', productSchema);
// module.exports = Product;

app.get('/products', async (req,res) => {
    const products = await Product.find({})
    res.render('products/index',{products})

})

app.get('/products/:id', async (req,res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    console.log(product)
    res.send('details page!')
})