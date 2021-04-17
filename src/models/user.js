import mongoose from "mongoose";
const { Schema, model } = mongoose;
import crypto from "crypto";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    salt: String,
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
    },
    adress: {
      street: {
        type: String,
      },
      neighborhood: {
        type: String,
      },
      district: {
        type: String,
      },
      province: {
        type: String,
      },
    },
    photoUrl: {
      type: String,
    },
    favorites: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
export default User;

// userSchema
//   .virtual("password")
//   .set(function (password) {
//     this._password = password;
//     this.salt = this.makeSalt();

//     this.hash_password = this.encryptPassword(password);
//   })
//   .get(function () {
//     return this._password;
//   });

// // methods
// userSchema.methods = {
//   authenticate: function (plainText) {
//     return this.encryptPassword(plainText) === this.hash_password;
//   },

//   encryptPassword: function (password) {
//     if (!password) return "";
//     try {
//       return crypto.createHmac("sha1", this.salt).update().digest("hex");
//     } catch (err) {
//       return "";
//     }
//   },

//   makeSalt: function () {
//     return Math.round(new Date().valueOf() * Math.random()) + "";
//   },
// };

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         name:
 *           type: string
 *         surname:
 *           type: string
 *         photoUrl:
 *           type: string
 *         phoneNumber:
 *           type: integer
 */
