import { Schema, model } from "mongoose";
import { isEmail } from "validator";

const UserSchema = new Schema(
  {
    _id: String,

    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
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
    speaks: [
      {
        type: String,
        enum: [
          "english",
          "spanish",
          "catalan",
          "german",
          "italian",
          "javascript",
        ],
      },
    ],
  },
  { timestamps: true },
);

const UserModel = new model("user", UserSchema);

export default UserModel;