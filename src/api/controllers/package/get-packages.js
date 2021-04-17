import { Package } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const packages = await Package.find({}).lean();
    return res.status(200).json({ packages });
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
};
