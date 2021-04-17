import { Pets } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const id = req.params.id;
    const pet = await Pets.findById(id).lean();
    return res.status(200).json({ pet });
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
};
