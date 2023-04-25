const mongoose = require('mongoose')
const productSchema = mongoose.schema(

  {

    name: {
      type: String,
      required: [true, "please enter a product name"]

    },
    quantity: {
      type: Number,
      required: true,



    },
    price: {

      type: Number,
      required: true,
    },




  },
  {
    timestamps: true

  }

)

const Product = mogoose.model('product', productSchema)
module.exports = Product;