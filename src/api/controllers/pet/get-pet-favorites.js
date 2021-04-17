import { User, Pets } from "../../../models/index.js";

export default async (req, res) => {
  const userId = req.user._id;
  try {
    const user = await User.findById(userId);
    const favorites = user.favorites;
    console.log("asd");
    const favoritePets = await Pets.find({ _id: { $in: favorites } });
    console.log(favoritePets);

    return res.status(200).json({ favoritePets });
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
};
