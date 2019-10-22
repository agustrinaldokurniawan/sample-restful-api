const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    name: String,
    price: Number
  },
  {
    versionKey: "__versionOfProduct"
  }
);

module.exports = mongoose.model("Product", productSchema);
