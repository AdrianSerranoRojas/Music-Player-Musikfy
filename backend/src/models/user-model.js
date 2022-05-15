import mongoose from "mongoose";
import validator from "validator";

const { Schema, model } = mongoose;
const { isEmail } = validator;

const UserSchema = new Schema(
  {
    _id: String,

    userName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      trim: true,
      unique: true,
      validate: {
        validator: (value) => isEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
    image: {
      url: String,
      public_id: String,
    },
    myFavoriteSongs: {
      type: [{ type: Schema.Types.ObjectId, ref: "song" }],
      default: [],
    },
  },
  { timestamps: true }
);

export const User = new model("user", UserSchema);
