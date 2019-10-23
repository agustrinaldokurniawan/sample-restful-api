const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    name: {
      type: String,
      require: true
    },
    price: {
      type: Number,
      require: true
    },
    productImage: {
      type: String,
      require: true
    }
  },
  {
    versionKey: "__versionOfProduct"
  }
);

module.exports = mongoose.model("Product", productSchema);
