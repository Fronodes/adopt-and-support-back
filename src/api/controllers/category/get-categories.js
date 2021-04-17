import { Categories } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const categories = await Categories.find().lean();
    return res.status(200).json({ categories });
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
};
