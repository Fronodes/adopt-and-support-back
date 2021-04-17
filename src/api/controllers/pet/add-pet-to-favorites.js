import { User } from "../../../models/index.js";

export default async (req, res) => {
  const userId = req.user._id;
  const { petId } = req.body;
  try {
    if (petId) {
      const docs = await User.find({ favorites: { $in: [petId] } });
      console.log(docs.length);
      if (docs.length == 0) {
        const user = await User.findOneAndUpdate(
          { _id: userId },
          {
            $push: {
              favorites: petId,
            },
          },
          { new: true }
        );
        return res.status(200).json({
          favorites: user.favorites,
          message: "Favorited",
        });
      } else {
        const user = await User.findOneAndUpdate(
          { _id: userId },
          {
            $pull: {
              favorites: petId,
            },
          },
          { new: true }
        );
        return res.status(200).json({
          favorites: user.favorites,
          message: "Unfavorited",
        });
      }
    } else {
      return res.status(500).json({ error: "Provide pet id" });
    }
  } catch (error) {
    return res.status(500).json({ error: err.message });
  }
};
