
import express from "express";
import { CountrolerCountry } from "./countrol";

const router = express.Router()

router.get("/", CountrolerCountry.getData)
router.post("/add", CountrolerCountry.createData)
router.put("/chenj/:id", CountrolerCountry.updateData)
router.delete("/delete/:id", CountrolerCountry.delete)

export default router;