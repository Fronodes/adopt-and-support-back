import { Router } from "express";
import { auth, imageUpload } from "../middlewares/index.js";
import {
  getPets,
  addPet,
  getPet,
  getPetsByProvince,
  getPetFavorites,
  addPetToFavorites,
} from "../controllers/pet/index.js";

const router = Router();

router.get("/", getPets);
router.put("/add", auth, imageUpload.array("image"), addPet);
router.get("/:id", getPet);
router.post("/byprovince", getPetsByProvince);
router.post("/favorites", auth, getPetFavorites);
router.put("/addtofavorites", auth, addPetToFavorites);

export default router;
