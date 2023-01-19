const db = require('./db')

//get all the products from db

const getProducts = () => {
    return db.Product.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    products: result
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 404,
                    message: 'No products found'
                }
            }
        }
    )
}


//to add wishlist data
const addtowishlist = (id, title, price, image, description) => {
    // data added to mongodb -- for which we need to create a model un db.js

    return db.Wishlist.findOne({ id }).then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    message: "Product Already in WishList!"
                }
            }
            else {
                const newProduct = new db.Wishlist({ id, title, price, image, description })
                newProduct.save()// to save data in mongodb
                return {
                    status: true,
                    statusCode: 200,
                    message: "Product Added to WishList"
                }
            }
        }
    )
}

//to get wishlist

const getwishlist = () => {
    return db.Wishlist.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    products: result
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 404,
                    message: 'Your WishList is Empty!'
                }
            }
        } // call this in index.js
    )
}


//delete wishlist

deletewish = (id) => {
    return db.Wishlist.deleteOne({ id }).then(
        (result) => {
            if (result) {
                // return{
                //     status:true,
                //     statusCode:200,
                //     wishlist:result,
                //     message:'Product removed'
                // }

                return db.Wishlist.find().then(
                    (result) => {
                        if (result) {
                            return {
                                status: true,
                                statusCode: 200,
                                wishlist: result,
                                message: 'Product removed successfully'
                            }
                        }
                        // call this in index.js

                        else {
                            return {
                                status: false,
                                statusCode: 404,
                                message: 'Product not Found'
                            }
                        }
                    }
                )
            }
            else {
                return {
                    status: false,
                    statusCode: 404,
                    message: 'Product not Found'
                }}
            })}


                module.exports = {
                    getProducts,
                    addtowishlist,
                    getwishlist,
                    deletewish
                }