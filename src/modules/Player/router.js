
import express from "express";
import { CountrolerPlayer } from "./countrol";

const router = express.Router()

router.get("/", CountrolerPlayer.getData)
router.post("/add", CountrolerPlayer.createData)
router.put("/chenj/:id", CountrolerPlayer.updateData)
router.delete("/delete/:id", CountrolerPlayer.delete)
router.get("/sort/:id", CountrolerPlayer.sort)
export default router;