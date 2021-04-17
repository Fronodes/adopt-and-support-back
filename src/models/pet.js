import mongoose from "mongoose";
const { Schema, model } = mongoose;

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photoUrls: [String],
    type: { type: Schema.Types.ObjectId, ref: "Category" },
    gender: {
      type: String,
    },
    age: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    summary: {
      type: String,
    },
    province: {
      type: String,
    },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Pet = model("Pet", petSchema);
export default Pet;
