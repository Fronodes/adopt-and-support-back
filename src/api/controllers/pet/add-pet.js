import { Pets } from "../../../models/index.js";
import multer from "multer";
import fs from "fs";

export default async (req, res) => {
  if (req.fileValidationError) {
    return res.end(req.fileValidationError);
  }
  const { name, type, gender, age, weight, summary, province } = req.body;
  const userId = req.user._id;
  const files = req.files;
  let photoUrls = [];
  files.map((file) => {
    photoUrls.push("/" + file.filename);
  });

  try {
    let newPet = new Pets({
      name,
      photoUrls: photoUrls,
      type,
      gender,
      age,
      weight,
      summary,
      province,
      owner: userId,
    });
    newPet = await newPet.save();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Gerekli bilgilerin hepsini doldurun!",
    });
  }

  return res.status(200).json({ success: true });
};
