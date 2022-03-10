import express from "express";
import { CountrolerTeam } from "./countrol";

const router = express.Router()

router.get("/", CountrolerTeam.getData)
router.post("/add", CountrolerTeam.createData)
router.put("/chenj/:id", CountrolerTeam.updateData)
router.delete("/delete/:id", CountrolerTeam.delete)

export default router;