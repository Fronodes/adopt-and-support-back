import { Pets } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const pets = await Pets.find({}).lean();
    return res.status(200).json({ pets });
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
};
