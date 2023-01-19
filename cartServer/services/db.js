// import mongoose
const mongoose = require('mongoose')

// define connection string from mongodb
mongoose.connect('mongodb://127.0.0.1:27017/cart',()=>{
    console.log('connected to mongodb');
})

//model creation
const Product = mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }

})

//wishlist model
const Wishlist = mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
})

 
//export 
module.exports={
    Product,
    Wishlist
}