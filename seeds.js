

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

// const p = new Product ({
//     name: 'Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// },
// {
//     name: 'Apple',
//     price: 2.99,
//     category: 'fruit'
// },
// {
//     name: 'Orange',
//     price: 1,
//     category: 'fruit'
// },
// {
//     name: 'Banana',
//     price: 1.99,
//     category: 'fruit'
// },
// {
//     name: 'Pineapple',
//     price: 0.99,
//     category: 'fruit'
// },
// {
//     name: 'Strawberry',
//     price: 3.99,
//     category: 'fruit'
// }
// )
// p.save()
// .then(s => {
//     console.log(p)
// }) 


const seedProducts =  [{
    name: 'Grapefruit',
    price: 1.99,
    category: 'fruit'
},
{
    name: 'Apple',
    price: 2.99,
    category: 'fruit'
},
{
    name: 'Orange',
    price: 1,
    category: 'fruit'
},
{
    name: 'Banana',
    price: 1.99,
    category: 'fruit'
},
{
    name: 'Pineapple',
    price: 0.99,
    category: 'fruit'
},
{
    name: 'Strawberry',
    price: 3.99,
    category: 'fruit'
}
]

const manyProds = Product.insertMany(seedProducts)
manyProds.save()
.then(s => {
    console.log(p)
}) 
