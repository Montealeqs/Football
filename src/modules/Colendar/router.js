
import express from "express";
import { CountrolerColendar } from "./countrol";

const router = express.Router()
router.get("/", CountrolerColendar.getData)
router.post("/add", CountrolerColendar.createData)
router.put("/chenj/:id", CountrolerColendar.updateData)
router.delete("/delete/:id", CountrolerColendar.delete)

export default router;