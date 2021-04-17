import mongoose from "mongoose";
const { Schema, model } = mongoose;

const packageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    pieceNumber: {
      type: Number,
    },
    photoUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Package = model("Package", packageSchema);
export default Package;
