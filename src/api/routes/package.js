import { Router } from "express";
import { getPackages } from "../controllers/package/index.js";
const router = Router();

router.get("/", getPackages);

export default router;
