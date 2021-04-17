import { Router } from "express";
import { getCategories } from "../controllers/category/index.js";
const router = Router();

router.get("/", getCategories);

export default router;
