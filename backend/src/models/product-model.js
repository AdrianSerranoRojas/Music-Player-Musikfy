import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  title: {
    type: String,
    // required: true,
    trim: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  img: {
    type: String,
    // required: true,
  },
  shortDescription: {
    type: String,
    // required: true,
  },
  longDescription: {
    type: String,
    // required: true,
  },
  isFavorite: {
    type: Boolean,
    // required: true,
  },
  unitsInStock: {
    type: Number,
    // required: true,
  },
  quantity: {
    type: Number,
    // required: true,
  },
  votes: {
    upVotes: {
      upperLimit: {
        type: Number,
      },
      currentValue: {
        type: Number,
      },
    },
    downVotes: {
      lowerLimit: {
        type: Number,
      },
      currentValue: {
        type: Number,
      },
    },
  },
  author: {
    email: {
      type: String,
      // required: true,
    },
    id: {
      type: String,
      // required: true,
    },
  },
});

const ProductModel = new model("products", ProductSchema);

export default ProductModel;
